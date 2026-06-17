#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
QuestFactory — Générateur de quêtes C# pour OpenDAoC / Amtenaël
Usage: python generate_quests.py [--csv quests.csv] [--output-root ../OpenDAoC-SPB] [--dry-run]
"""

import argparse
import csv
import os
import sys
from pathlib import Path

# Fix Windows console encoding
import io
sys_stdout_reconfigured = False
try:
    sys.stdout.reconfigure(encoding='utf-8')
    sys_stdout_reconfigured = True
except AttributeError:
    pass

try:
    from jinja2 import Environment, FileSystemLoader, StrictUndefined
except ImportError:
    print("ERROR: jinja2 not installed. Run: pip install jinja2")
    sys.exit(1)

# ---------------------------------------------------------------------------
# Configuration des chemins de sortie par type de quête
# ---------------------------------------------------------------------------

QUEST_TYPE_TO_PATH = {
    # (type, frequency, realm) -> sous-dossier relatif depuis la racine des quêtes
    ("pve",       "daily",  "Albion"):   "AtlasQuests/DailyQuests/Albion/PvE/Daily",
    ("pve",       "daily",  "Hibernia"): "AtlasQuests/DailyQuests/Hibernia/PvE/Daily",
    ("pve",       "daily",  "Midgard"):  "AtlasQuests/DailyQuests/Midgard/PvE/Daily",
    ("pve",       "weekly", "Albion"):   "AtlasQuests/DailyQuests/Albion/PvE/Weekly",
    ("pve",       "weekly", "Hibernia"): "AtlasQuests/DailyQuests/Hibernia/PvE/Weekly",
    ("pve",       "weekly", "Midgard"):  "AtlasQuests/DailyQuests/Midgard/PvE/Weekly",
    ("rvr",       "daily",  "Albion"):   "AtlasQuests/DailyQuests/Albion/RvR/Daily",
    ("rvr",       "daily",  "Hibernia"): "AtlasQuests/DailyQuests/Hibernia/RvR/Daily",
    ("rvr",       "daily",  "Midgard"):  "AtlasQuests/DailyQuests/Midgard/RvR/Daily",
    ("rvr",       "weekly", "Albion"):   "AtlasQuests/DailyQuests/Albion/RvR/Weekly",
    ("rvr",       "weekly", "Hibernia"): "AtlasQuests/DailyQuests/Hibernia/RvR/Weekly",
    ("rvr",       "weekly", "Midgard"):  "AtlasQuests/DailyQuests/Midgard/RvR/Weekly",
    ("hardcore",  "daily",  "Albion"):   "AtlasQuests/DailyQuests/Albion/Hardcore",
    ("hardcore",  "daily",  "Hibernia"): "AtlasQuests/DailyQuests/Hibernia/Hardcore",
    ("hardcore",  "daily",  "Midgard"):  "AtlasQuests/DailyQuests/Midgard/Hardcore",
    ("frontier",  "daily",  "Albion"):   "AtlasQuests/DailyQuests/Albion/Frontier/Daily",
    ("frontier",  "daily",  "Hibernia"): "AtlasQuests/DailyQuests/Hibernia/Frontier/Daily",
    ("frontier",  "daily",  "Midgard"):  "AtlasQuests/DailyQuests/Midgard/Frontier/Daily",
    ("initiation", "once",   "Albion"):   "AtlasQuests/PaladinsTyr",
}

QUEST_TYPE_TO_TEMPLATE = {
    ("pve",      "daily"):  "daily_pve_kill.cs.j2",
    ("pve",      "weekly"): "weekly_pve_kill.cs.j2",
    ("rvr",      "daily"):  "daily_rvr_kill.cs.j2",
    ("rvr",      "weekly"): "daily_rvr_kill.cs.j2",   # même structure, récompense différente gérée dans le CSV
    ("hardcore", "daily"):  "hardcore_kill.cs.j2",
    ("frontier", "daily"):  "daily_pve_kill.cs.j2",   # frontier utilise le même template PvE
    ("initiation", "once"): "initiation_faction.cs.j2",
}

QUESTS_SCRIPT_ROOT = "GameServer/scripts/quests"

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def sanitize_class_name(name: str) -> str:
    """Convertit un nom en identifiant C# valide (PascalCase, pas d'accents)."""
    import re
    # Retire les caractères non-alphanumériques sauf espace
    name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
    # PascalCase
    return "".join(word.capitalize() for word in name.split())


def build_template_context(row: dict) -> dict:
    """Construit le contexte Jinja2 à partir d'une ligne CSV."""
    quest_type  = row["quest_type"].strip().lower()
    frequency   = row["frequency"].strip().lower()
    realm       = row["realm"].strip().capitalize()
    class_name  = row["class_name"].strip()
    npc_name    = row["npc_name"].strip()

    # npc_var : nom de la variable statique dans le C# (ex: "James", "SucciAlb")
    npc_var = row.get("npc_var", "").strip() or (npc_name + realm if realm != "Albion" else npc_name)

    ctx = {
        "class_name":          class_name,
        "realm":               realm,
        "quest_title":         row["quest_title"].strip(),
        "min_level":           int(row.get("min_level", 40)),
        "max_level":           int(row.get("max_level", 50)),
        "kill_quota":          int(row.get("kill_quota", 10)),
        "mob_name_lower":      row.get("mob_name", "").strip().lower(),
        "mob_name_display":    row.get("mob_name", "").strip(),
        "npc_name":            npc_name,
        "npc_var":             npc_var,
        "npc_guild":           row.get("npc_guild", "Advisor To The King").strip(),
        "npc_model":           int(row.get("npc_model", 254)),
        "npc_region":          int(row.get("npc_region", 51)),
        "npc_x":               int(row.get("npc_x", 534044)),
        "npc_y":               int(row.get("npc_y", 549664)),
        "npc_z":               int(row.get("npc_z", 4940)),
        "npc_heading":         int(row.get("npc_heading", 3143)),
        "npc_location_comment": row.get("npc_location_comment", "Caer Gothwaite").strip(),
        "npc_equipment":       None,   # Optionnel, pas géré dans CSV simple
        "counter_var":         row.get("counter_var", "mobsKilled").strip(),
        # Factions
        "required_faction":    int(row["required_faction"].strip()) if row.get("required_faction") else None,
        "reward_faction":      int(row["reward_faction"].strip()) if row.get("reward_faction") else None,
        # Dialogues
        "dialog_intro":        row.get("dialog_intro", "We need your help eliminating threats in the region.").strip(),
        "dialog_lore":         row.get("dialog_lore", "").strip(),
        "dialog_call_to_action": row.get("dialog_call_to_action", "").strip(),
        "dialog_in_progress":  row.get("dialog_in_progress", "Continue your mission and come back when done.").strip(),
        "dialog_accepted":     row.get("dialog_accepted", "Good luck, champion.").strip(),
        "dialog_decline":      row.get("dialog_decline", "Thank you for your time.").strip(),
        "dialog_reward":       row.get("dialog_reward", "Thank you for your contribution!").strip(),
        "whisper_accept":      row.get("whisper_accept", "help").strip(),
        "whisper_finish":      row.get("whisper_finish", "finished").strip(),
        "description_step1":   row.get("description_step1", "Hunt down the enemies and return when done.").strip(),
    }
    return ctx


def get_output_path(output_root: Path, row: dict) -> Path:
    """Calcule le chemin de sortie du fichier .cs généré."""
    quest_type = row["quest_type"].strip().lower()
    frequency  = row["frequency"].strip().lower()
    realm      = row["realm"].strip().capitalize()

    key = (quest_type, frequency, realm)
    rel = QUEST_TYPE_TO_PATH.get(key)
    if rel is None:
        raise ValueError(f"Combinaison non supportée : type={quest_type}, frequency={frequency}, realm={realm}")

    subdir = output_root / QUESTS_SCRIPT_ROOT / rel
    filename = row["class_name"].strip() + ".cs"
    return subdir / filename


def get_template_name(row: dict) -> str:
    quest_type = row["quest_type"].strip().lower()
    frequency  = row["frequency"].strip().lower()
    key = (quest_type, frequency)
    tmpl = QUEST_TYPE_TO_TEMPLATE.get(key)
    if tmpl is None:
        raise ValueError(f"Pas de template pour : type={quest_type}, frequency={frequency}")
    return tmpl


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="QuestFactory — Générateur de quêtes OpenDAoC")
    parser.add_argument("--csv",         default="quests_definitions.csv", help="Fichier CSV source")
    parser.add_argument("--output-root", default=r"C:\OpenDAOC_server\ProjetsAnnexes\OpenDAoC-SPB",
                        help="Racine du projet OpenDAoC-SPB")
    parser.add_argument("--templates",   default="templates", help="Dossier des templates Jinja2")
    parser.add_argument("--dry-run",     action="store_true",  help="Affiche ce qui serait généré sans écrire")
    parser.add_argument("--overwrite",   action="store_true",  help="Ecrase les fichiers existants")
    args = parser.parse_args()

    # Chemins
    csv_path     = Path(args.csv)
    output_root  = Path(args.output_root)
    templates_dir = Path(__file__).parent / args.templates

    if not csv_path.exists():
        print(f"ERROR: CSV introuvable : {csv_path}")
        sys.exit(1)

    if not templates_dir.exists():
        print(f"ERROR: Dossier templates introuvable : {templates_dir}")
        sys.exit(1)

    # Jinja2 env
    env = Environment(
        loader=FileSystemLoader(str(templates_dir)),
        undefined=StrictUndefined,
        trim_blocks=True,
        lstrip_blocks=True,
        keep_trailing_newline=True,
    )

    # Lecture CSV
    with open(csv_path, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    print(f"[OK] {len(rows)} quetes trouvees dans {csv_path}")
    generated = 0
    skipped   = 0
    errors    = 0

    for i, row in enumerate(rows, 1):
        # Ignorer les lignes vides / commentaires
        if not row.get("class_name", "").strip() or row.get("class_name", "").startswith("#"):
            continue

        try:
            template_name = get_template_name(row)
            template      = env.get_template(template_name)
            ctx           = build_template_context(row)
            cs_content    = template.render(**ctx)

            out_path = get_output_path(output_root, row)

            if args.dry_run:
                print(f"  [DRY-RUN] {out_path.relative_to(output_root)}")
                generated += 1
                continue

            if out_path.exists() and not args.overwrite:
                print(f"  [SKIP] {out_path.name} (déjà existant, utilise --overwrite pour forcer)")
                skipped += 1
                continue

            # Création du répertoire si nécessaire
            out_path.parent.mkdir(parents=True, exist_ok=True)

            # Écriture avec CRLF (Windows / Visual Studio)
            with open(out_path, "w", encoding="utf-8", newline="\r\n") as f:
                f.write(cs_content)

            print(f"  [OK] {out_path.relative_to(output_root)}")
            generated += 1

        except Exception as ex:
            print(f"  [ERROR] Ligne {i} ({row.get('class_name', '?')}): {ex}")
            errors += 1

    print()
    print(f"Résultat : {generated} générés, {skipped} ignorés, {errors} erreurs")
    if errors > 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
