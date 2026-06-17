export interface DataQuestDB {
	ID: number;
	Name: string;
	MaxCount: number;
	MinLevel: number;
	MaxLevel: number;
	isDaily: boolean;
	StartType: "0" | "1" | "2" | "3" | "4" | "5" | "200";
	StartName: string;
	StartRegionID: number;
	AcceptText?: string;
	Description?: string;
	SourceName?: string;
	SourceText?: string;
	StepType: string;
	StepText?: string;
	StepItemTemplates?: string;
	AdvanceText?: string;
	TargetName?: string;
	TargetText?: string;
	CollectItemTemplate?: string;
	RewardMoney?: string;
	RewardXP?: string;
	RewardCLXP?: string;
	RewardRP?: string;
	RewardBP?: string;
	OptionalRewardItemTemplates?: string;
	FinalRewardItemTemplates?: string;
	FinishText?: string;
	QuestDependency?: string;
	NotQuestDependency?: string;
	ClassType?: string;
	AllowedClasses?: string;
}

export class DataQuest {
	private _db: DataQuestDB = {
		ID: 0,
		Name: "New quest",
		MaxCount: 1,
		MinLevel: 1,
		isDaily: false,
		MaxLevel: 50,
		StartType: "0",
		StartName: "",
		StartRegionID: 0,
		StepType: "",
	};

	readonly steps!: DataQuestStep[];

	constructor(db: DataQuestDB) {
		this._db = db;
		if (this._db.StepType)
			this.steps = this._db.StepType
				?.split(/\|/g)
				?.map((_, idx) => new DataQuestStep(this, idx))
				?? []
				;
		else
			this.steps = [];
	}

	get ID() {
		return this._db.ID;
	}

	set ID(v) {
		this._db.ID = v;
	}

	get Name() {
		return this._db.Name;
	}

	set Name(v) {
		this._db.Name = v;
	}

	get MaxCount() {
		return this._db.MaxCount;
	}

	set MaxCount(v) {
		this._db.MaxCount = v;
	}

	get isDaily() {
		return this._db.isDaily;
	}

	set isDaily(v) {
		this._db.isDaily = v;
	}

	get MinLevel() {
		return this._db.MinLevel;
	}

	set MinLevel(v) {
		this._db.MinLevel = v;
	}

	get MaxLevel() {
		return this._db.MaxLevel;
	}

	set MaxLevel(v) {
		this._db.MaxLevel = v;
	}

	get StartRegionID() {
		return this._db.StartRegionID;
	}

	set StartRegionID(v) {
		this._db.StartRegionID = v;
	}

	get StartType() {
		return this._db.StartType;
	}

	set StartType(v) {
		this._db.StartType = v;
	}

	get StartName() {
		return this._db.StartName;
	}

	set StartName(v) {
		this._db.StartName = v;
	}

	get AcceptText() {
		return this._db.AcceptText;
	}

	set AcceptText(v) {
		this._db.AcceptText = v;
	}

	get Description() {
		return this._db.Description;
	}

	set Description(v) {
		this._db.Description = v;
	}

	get FinishText() {
		return this._db.FinishText;
	}

	set FinishText(v) {
		this._db.FinishText = v;
	}

	get FinalRewardItemTemplates() {
		return this._db.FinalRewardItemTemplates;
	}

	set FinalRewardItemTemplates(v) {
		this._db.FinalRewardItemTemplates = v;
	}

	get OptionalRewardItemTemplates() {
		return this._db.OptionalRewardItemTemplates;
	}

	set OptionalRewardItemTemplates(v) {
		this._db.OptionalRewardItemTemplates = v;
	}

	get StepType() {
		return this._db.StepType;
	}

	set StepType(_) {
		throw new Error("can't change property StepType");
	}

	get StepText() {
		return this._db.StepText;
	}

	set StepText(_) {
		throw new Error("can't change property StepText");
	}

	get StepItemTemplates() {
		return this._db.StepItemTemplates;
	}

	set StepItemTemplates(_) {
		throw new Error("can't change property StepItemTemplates");
	}

	get AdvanceText() {
		return this._db.AdvanceText;
	}

	set AdvanceText(_) {
		throw new Error("can't change property AdvanceText");
	}

	get CollectItemTemplate() {
		return this._db.CollectItemTemplate;
	}

	set CollectItemTemplate(_) {
		throw new Error("can't change property CollectItemTemplate");
	}

	get RewardMoney() {
		return this._db.RewardMoney;
	}

	set RewardMoney(_) {
		throw new Error("can't change property RewardMoney");
	}

	get RewardXP() {
		return this._db.RewardXP;
	}

	set RewardXP(_) {
		throw new Error("can't change property RewardXP");
	}

	get RewardCLXP() {
		return this._db.RewardCLXP;
	}

	set RewardCLXP(_) {
		throw new Error("can't change property RewardCLXP");
	}

	get RewardRP() {
		return this._db.RewardRP;
	}

	set RewardRP(_) {
		throw new Error("can't change property RewardRP");
	}

	get RewardBP() {
		return this._db.RewardBP;
	}

	set RewardBP(_) {
		throw new Error("can't change property RewardBP");
	}

	get SourceName() {
		return this._db.SourceName;
	}

	set SourceName(_) {
		throw new Error("can't change property SourceName");
	}

	get SourceText() {
		return this._db.SourceText;
	}

	set SourceText(_) {
		throw new Error("can't change property SourceText");
	}

	get TargetName() {
		return this._db.TargetName;
	}

	set TargetName(_) {
		throw new Error("can't change property TargetName");
	}

	get TargetText() {
		return this._db.TargetText;
	}

	set TargetText(_) {
		throw new Error("can't change property TargetText");
	}

	get QuestDependency() {
		return this._db.QuestDependency;
	}
	set QuestDependency(val: string | undefined) {
		this._db.QuestDependency = val;
	}

	get NotQuestDependency() {
		return this._db.NotQuestDependency;
	}
	set NotQuestDependency(val: string | undefined) {
		this._db.NotQuestDependency = val;
	}

	get isValid() {
		return this._db.ID > 0 && this._db.StartName && this._db.StartRegionID > 0;
	}

	toJSON() {
		return {
			ID: this.ID,
			Name: this.Name,
			MaxCount: this.MaxCount,
			isDaily: this._db.isDaily,
			MinLevel: this.MinLevel,
			MaxLevel: this.MaxLevel,
			StartType: this._db.StartType,
			StartName: this._db.StartName,
			StartRegionID: this.StartRegionID,
			AcceptText: this._db.AcceptText,
			Description: this._db.Description,
			SourceName: this.steps.map(s => s.source.join(";")).join("|"),
			SourceText: this.steps.map(s => s.sourceText || "").join("|"),
			StepType: this.steps.map(s => s.type || "").join("|"),
			StepText: this.steps.map(s => s.text || "").join("|"),
			StepItemTemplates: this.steps.map(s => s.itemTemplate || "").join("|"),
			AdvanceText: this.steps.map(s => s.advanceText || "").join("|"),
			TargetName: this.steps.map(s => s.target.join(";")).join("|"),
			TargetText: this.steps.map(s => s.targetText || "").join("|"),
			CollectItemTemplate: this.steps.map(s => s.collectItemTemplate || "").join("|"),
			RewardMoney: this.steps.map(s => s.rewardMoney || 0).join("|"),
			RewardXP: this.steps.map(s => s.rewardXP || 0).join("|"),
			RewardCLXP: this.steps.map(s => s.rewardCLXP || 0).join("|"),
			RewardRP: this.steps.map(s => s.rewardRP || 0).join("|"),
			RewardBP: this.steps.map(s => s.rewardBP || 0).join("|"),
			OptionalRewardItemTemplates: this._db.OptionalRewardItemTemplates,
			FinalRewardItemTemplates: this._db.FinalRewardItemTemplates,
			FinishText: this._db.FinishText,
			QuestDependency: this._db.QuestDependency,
			NotQuestDependency: this._db.NotQuestDependency,
			ClassType: this._db.ClassType,
			AllowedClasses: this._db.AllowedClasses,
		};
	}
}

export class DataQuestStep {
	readonly quest!: DataQuest;

	readonly stepIdx!: number;

	constructor(quest: DataQuest, idx: number) {
		this.quest = quest;
		this.stepIdx = idx;

		this.type = this.quest.StepType?.split("|")[this.stepIdx];
		this.text = this.quest.StepText?.split("|")[this.stepIdx];
		this.sourceText = this.quest.SourceText?.split("|")[this.stepIdx];
		this.targetText = this.quest.TargetText?.split("|")[this.stepIdx];
		this.itemTemplate = this.quest.StepItemTemplates?.split("|")[this.stepIdx];
		this.advanceText = this.quest.AdvanceText?.split("|")[this.stepIdx];
		this.collectItemTemplate = this.quest.CollectItemTemplate?.split("|")[this.stepIdx];
		this.rewardMoney = this.quest.RewardMoney?.split("|")[this.stepIdx];
		this.rewardXP = this.quest.RewardXP?.split("|")[this.stepIdx];
		this.rewardCLXP = this.quest.RewardCLXP?.split("|")[this.stepIdx];
		this.rewardRP = this.quest.RewardRP?.split("|")[this.stepIdx];
		this.rewardBP = this.quest.RewardBP?.split("|")[this.stepIdx];

		const [sourceName, sourceRegion] = this.quest.SourceName?.split("|")[this.stepIdx]?.split(";") ?? ["", ""];
		this.source = (sourceName && sourceRegion) ? [sourceName, parseInt(sourceRegion)] : ["", 0];
		const [targetName, targetRegion] = this.quest.TargetName?.split("|")[this.stepIdx]?.split(";") ?? ["", ""];
		this.target = (targetName && targetRegion) ? [targetName, parseInt(targetRegion)] : ["", 0];
	}

	type!: string;
	text?: string;
	sourceText?: string;
	targetText?: string;
	itemTemplate?: string;
	advanceText?: string;
	source!: [string, number];
	target!: [string, number];
	collectItemTemplate?: string;
	rewardMoney?: string;
	rewardXP?: string;
	rewardCLXP?: string;
	rewardRP?: string;
	rewardBP?: string;
}
