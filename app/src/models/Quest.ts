import json5 from "json5";

export interface BaseQuestDB {
	Id: number;
	Name: string;

	Description: string;
	Summary: string;
	Story: string;
	Conclusion: string;

	NpcName: string;
	NpcRegion: number;

	MaxCount: number;
	isDaily: boolean;
	MinLevel: number;
	MaxLevel: number;
	RewardMoney: number;
	RewardXP: number;
	RewardCLXP: number;
	RewardRP: number;
	RewardBP: number;
	RewardBreamorFaction: number;

	NbChooseOptionalItems: number;
	OptionalRewardItemTemplates: string;
	FinalRewardItemTemplates: string;

	QuestDependency?: string;
	NotQuestDependency?: string;
	AllowedClasses?: string;

	GoalsJson: string;
}

export class QuestDB {
	public db!: BaseQuestDB;
	readonly goals!: QuestGoal[];

	constructor(db: BaseQuestDB) {
		this.db = db;
		this.goals = [];
		for (const goal of json5.parse(db.GoalsJson))
			this.goals.push(QuestGoal.createGoal(this, goal));
	}

	get isValid() {
		return this.db.Id > 0 && this.db.NpcName && this.db.NpcRegion > 0;
	}

	toJSON() {
		return {
			...this.db,
			GoalsJson: json5.stringify(this.goals),
		};
	}
}

export class QuestGoal {
	readonly quest!: QuestDB;
	readonly Id!: number;
	readonly Type!: string;

	Description!: string;
	GiveItem?: string;
	RewardBreamorFaction?: number;
	StartGoalsDone?: number[];
	EndWhenGoalsDone?: number[];

	MessageStarted!: string;
	MessageAborted!: string;
	MessageDone!: string;
	MessageCompleted!: string;

	constructor(quest: QuestDB, goal: any) {
		this.quest = quest;
		this.Id = goal.Id;
		this.Type = goal.Type;
		this.Description =
			goal.Data.Description ?? goal.Type.split(".").pop() ?? "";
		this.GiveItem = goal.Data.GiveItem;
		this.RewardBreamorFaction = goal.Data.RewardBreamorFaction;
		this.StartGoalsDone = goal.Data.StartGoalsDone;
		this.EndWhenGoalsDone = goal.Data.EndWhenGoalsDone;

		this.MessageStarted = goal.Data.MessageStarted ?? "";
		this.MessageAborted = goal.Data.MessageAborted ?? "";
		this.MessageDone = goal.Data.MessageDone ?? "";
		this.MessageCompleted = goal.Data.MessageCompleted ?? "";
	}

	toJSON() {
		return {
			Id: this.Id,
			Type: this.Type,
			Data: {
				Description: this.Description,
				GiveItem: this.GiveItem || null,
				RewardBreamorFaction: this.RewardBreamorFaction || null,
				StartGoalsDone: this.StartGoalsDone?.map((id) => id | 0) || null,
				EndWhenGoalsDone: this.EndWhenGoalsDone?.map((id) => id | 0) || null,
				MessageStarted: this.MessageStarted,
				MessageAborted: this.MessageAborted,
				MessageDone: this.MessageDone,
				MessageCompleted: this.MessageCompleted,
			},
		};
	}

	static createGoal(quest: QuestDB, goal: any): QuestGoal {
		switch (goal.Type) {
			case "DOL.GS.Quests.KillGoal":
				return new QuestKillGoal(quest, goal);
			case "DOL.GS.Quests.InteractGoal":
				return new QuestInteractGoal(quest, goal);
			case "DOL.GS.Quests.WhisperGoal":
				return new QuestWhisperGoal(quest, goal);
			case "DOL.GS.Quests.CollectGoal":
				return new QuestCollectGoal(quest, goal);
			case "DOL.GS.Quests.EndGoal":
				return new QuestEndGoal(quest, goal);
			case "DOL.GS.Quests.EnterAreaGoal":
				return new QuestEnterAreaGoal(quest, goal);
			case "DOL.GS.Quests.AbortQuestGoal":
				return new QuestAbortQuestGoal(quest, goal);
			case "DOL.GS.Quests.DummyGoal":
				return new QuestGoal(quest, goal);
			case "DOL.GS.Quests.KilledGoal":
				return new QuestKilledGoal(quest, goal);
			case "DOL.GS.Quests.TimerGoal":
				return new QuestTimerGoal(quest, goal);
			case "DOL.GS.Quests.StopGoal":
				return new QuestStopGoal(quest, goal);
			case "DOL.GS.Quests.UseItemGoal":
				return new QuestUseItemGoal(quest, goal);
		}
		throw new Error(`unknown goal type ${goal.Type}`);
	}
}

class QuestAbstractTargetNpcGoal extends QuestGoal {
	TargetName!: string;
	TargetRegion!: number;

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.TargetName = goal.Data.TargetName ?? "";
		this.TargetRegion = goal.Data.TargetRegion ?? 1;
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				TargetName: this.TargetName,
				TargetRegion: this.TargetRegion | 0,
			},
		};
	}
}

export class QuestKillGoal extends QuestAbstractTargetNpcGoal {
	KillCount: number;

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.KillCount = goal.Data.KillCount ?? 1;
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				KillCount: this.KillCount | 0,
			},
		};
	}
}

export class QuestInteractGoal extends QuestAbstractTargetNpcGoal {
	Text: string = "";

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.Text = goal.Data.Text ?? "Hello <Player>! [start]";
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				Text: this.Text,
			},
		};
	}
}

export class QuestWhisperGoal extends QuestInteractGoal {
	WhisperText: string;

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.WhisperText = goal.Data.WhisperText ?? "start";
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				WhisperText: this.WhisperText,
			},
		};
	}
}

export class QuestCollectGoal extends QuestInteractGoal {
	Item: string;
	ItemCount: number;

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.Item = goal.Data.Item ?? "quest_item";
		this.ItemCount = (goal.Data.ItemCount ?? 1) | 0;
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				Item: this.Item,
				ItemCount: this.ItemCount | 0,
			},
		};
	}
}

export class QuestEnterAreaGoal extends QuestGoal {
	AreaCenter!: { X: number; Y: number; Z: number };
	AreaRadius: number;
	AreaRegion!: number;

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.AreaCenter = goal.Data.AreaCenter ?? { X: 0, Y: 0, Z: 0 };
		this.AreaRadius = goal.Data.AreaRadius ?? 500;
		this.AreaRegion = goal.Data.AreaRegion ?? 1;
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				AreaCenter: {
					X: this.AreaCenter.X | 0,
					Y: this.AreaCenter.Y | 0,
					Z: this.AreaCenter.Z | 0,
				},
				AreaRadius: this.AreaRadius | 0,
				AreaRegion: this.AreaRegion | 0,
			},
		};
	}
}

export class QuestEndGoal extends QuestAbstractTargetNpcGoal {
	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
	}

	toJSON() {
		return super.toJSON();
	}
}

export class QuestAbortQuestGoal extends QuestGoal {
	Text: string = "";

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.Text = goal.Data.Text ?? "Hello <Player>! [start]";
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				Text: this.Text,
			},
		};
	}
}

export class QuestKilledGoal extends QuestAbstractTargetNpcGoal {
	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
	}
}

export class QuestTimerGoal extends QuestGoal {
	Seconds: number = 5;

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.Seconds = goal.Data.Seconds ?? 5;
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				Seconds: this.Seconds,
			},
		};
	}
}

export class QuestStopGoal extends QuestGoal {
	StopGoals: number[];

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.StopGoals = goal.Data.StopGoals || [];
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				StopGoals: this.StopGoals.map((id) => id | 0),
			},
		};
	}
}

export class QuestUseItemGoal extends QuestGoal {
	Item: string;

	constructor(quest: QuestDB, goal: any) {
		super(quest, goal);
		this.Item = goal.Data.Item ?? "quest_item";
	}

	toJSON() {
		const obj = super.toJSON();
		return {
			...obj,
			Data: {
				...obj.Data,
				Item: this.Item,
			},
		};
	}
}
