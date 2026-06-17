create or replace table ability
(
	AbilityID          int auto_increment
		primary key,
	KeyName            varchar(100)                           not null,
	Name               varchar(255)                           not null,
	InternalID         int      default 0                     not null,
	Description        text                                   not null,
	IconID             int      default 0                     not null,
	Implementation     varchar(255)                           null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	constraint U_Ability_KeyName
		unique (KeyName)
)
	charset = utf8mb3;

create or replace table account
(
	Name               varchar(255)                               not null
		primary key,
	Password           text                                       not null,
	CreationDate       datetime     default current_timestamp()   not null,
	LastLogin          datetime     default '2000-01-01 00:00:00' null,
	Realm              int          default 0                     not null,
	PrivLevel          int unsigned default 0                     not null,
	Status             int          default 0                     not null,
	Mail               text                                       null,
	LastLoginIP        varchar(255)                               null,
	LastClientVersion  text                                       null,
	Language           text                                       null,
	IsMuted            tinyint(1)   default 0                     not null,
	LastTimeRowUpdated datetime     default '2000-01-01 00:00:00' not null,
	Account_ID         varchar(255)                               null,
	Discord            varchar(255)                               null,
	DiscordUsername    text                                       null,
	constraint U_Account_Account_ID
		unique (Account_ID)
)
	charset = utf8mb3;

create or replace index I_Account_Discord
	on account (Discord);

create or replace index I_Account_LastLoginIP
	on account (LastLoginIP);

create or replace table accountxcustomparam
(
	Name               varchar(255)                           not null,
	KeyName            varchar(100)                           not null,
	Value              varchar(255)                           null,
	CustomParamID      int auto_increment
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_AccountXCustomParam_KeyName
	on accountxcustomparam (KeyName);

create or replace index I_AccountXCustomParam_Name
	on accountxcustomparam (Name);

create or replace table amtebrainsparam
(
	MobID              text                                   not null,
	Param              text                                   not null,
	Value              text                                   not null,
	AmteBrainsParam_ID varchar(255)                           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table appeal
(
	Name               varchar(255)                           not null,
	Account            varchar(255)                           not null,
	Severity           int                                    not null,
	Status             text                                   not null,
	Timestamp          text                                   not null,
	Text               text                                   not null,
	Appeal_ID          varchar(255)                           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_Appeal_Account
	on appeal (Account);

create or replace index I_Appeal_Name
	on appeal (Name);

create or replace table area
(
	Description        text                                           not null,
	X                  int              default 0                     not null,
	Y                  int                                            not null,
	Z                  int                                            not null,
	Radius             int                                            not null,
	Region             smallint unsigned                              not null,
	ClassType          text                                           null,
	CanBroadcast       tinyint(1)       default 0                     not null,
	Sound              tinyint unsigned default 0                     not null,
	CheckLOS           tinyint(1)       default 0                     not null,
	Points             text                                           null,
	Area_ID            varchar(255)                                   not null
		primary key,
	TranslationId      text                                           null,
	LastTimeRowUpdated datetime         default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table areaeffect
(
	MobID              text                                   not null,
	Effect             int                                    not null,
	IntervalMin        int                                    not null,
	IntervalMax        int                                    not null,
	HealHarm           int                                    not null,
	MissChance         int                                    not null,
	Radius             int                                    not null,
	Message            text                                   not null,
	AreaEffect_ID      varchar(255)                           not null
		primary key,
	Mana               int                                    not null,
	Endurance          int                                    not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table artifact
(
	ArtifactID            text                                   not null,
	EncounterID           text                                   not null,
	QuestID               text                                   not null,
	Zone                  text                                   not null,
	ScholarID             text                                   not null,
	ReuseTimer            int                                    not null,
	XPRate                int                                    not null,
	BookID                text                                   not null,
	BookModel             int                                    not null,
	Scroll1               text                                   not null,
	Scroll2               text                                   not null,
	Scroll3               text                                   not null,
	Scroll12              text                                   not null,
	Scroll13              text                                   not null,
	Scroll23              text                                   not null,
	ScrollModel1          int                                    not null,
	ScrollModel2          int                                    not null,
	ScrollLevel           int                                    not null,
	MessageUse            text                                   not null,
	MessageCombineScrolls text                                   not null,
	MessageCombineBook    text                                   not null,
	MessageReceiveScrolls text                                   not null,
	MessageReceiveBook    text                                   not null,
	Credit                text                                   null,
	Artifact_ID           varchar(255)                           not null
		primary key,
	LastTimeRowUpdated    datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table artifactbonus
(
	ArtifactID         text                                   not null,
	BonusID            int                                    not null,
	Level              int                                    not null,
	ArtifactBonus_ID   varchar(255)                           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table artifactxitem
(
	ArtifactID         text                                   not null,
	ItemID             text                                   not null,
	Version            text                                   not null,
	Realm              int                                    not null,
	ArtifactXItem_ID   varchar(255)                           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table auditentry
(
	AuditTime          datetime default '2000-01-01 00:00:00' not null,
	AccountID          text                                   null,
	RemoteHost         text                                   null,
	AuditType          int                                    not null,
	AuditSubtype       int                                    not null,
	OldValue           text                                   null,
	NewValue           text                                   not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	AuditEntry_ID      varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace table autoxmlupdate
(
	AutoXMLUpdateID    int auto_increment
		primary key,
	FilePackage        varchar(255)                           not null,
	FileHash           varchar(255)                           not null,
	LoadResult         varchar(255)                           not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_AutoXMLUpdate_FileHash
	on autoxmlupdate (FileHash);

create or replace index I_AutoXMLUpdate_FilePackage
	on autoxmlupdate (FilePackage);

create or replace table ban
(
	Author             text                                   not null,
	Type               varchar(255)                           not null,
	Ip                 varchar(255)                           not null,
	Account            varchar(255)                           not null,
	DateBan            datetime default '2000-01-01 00:00:00' not null,
	Reason             text                                   not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	Ban_ID             varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_Ban_Account
	on ban (Account);

create or replace index I_Ban_Ip
	on ban (Ip);

create or replace index I_Ban_Type
	on ban (Type);

create or replace table banque
(
	PlayerID           varchar(255)                           not null
		primary key,
	Money              bigint                                 not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	Banque_ID          varchar(255)                           null,
	constraint U_Banque_Banque_ID
		unique (Banque_ID)
)
	charset = utf8mb3;

create or replace table battleground
(
	RegionID           smallint unsigned                      not null,
	MinLevel           tinyint unsigned                       not null,
	MaxLevel           tinyint unsigned                       not null,
	MaxRealmLevel      tinyint unsigned                       not null,
	Battleground_ID    varchar(255)                           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table bindpoint
(
	X                  int                                    not null,
	Y                  int                                    not null,
	Z                  int                                    not null,
	Radius             smallint unsigned                      not null,
	Region             int                                    not null,
	Realm              int      default 0                     not null,
	BindPoint_ID       varchar(255)                           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table blacklist
(
	PlayerID           varchar(255)                           not null
		primary key,
	PlayerName         text                                   not null,
	Reputation         double                                 not null,
	HasReported        int                                    not null,
	KilledBlacklisted  int                                    not null,
	BeReported         int                                    not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	Blacklist_ID       varchar(255)                           null,
	constraint U_Blacklist_Blacklist_ID
		unique (Blacklist_ID)
)
	charset = utf8mb3;

create or replace index I_Blacklist_Reputation
	on blacklist (Reputation);

create or replace table blacklistlog
(
	ID                 bigint auto_increment
		primary key,
	Date               datetime default '2000-01-01 00:00:00' not null,
	PlayerName         varchar(255)                           not null,
	`Group`            text                                   not null,
	Amount             double                                 not null,
	Reason             text                                   not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_BlacklistLog_PlayerName
	on blacklistlog (PlayerName);

create or replace table book
(
	ID                 bigint auto_increment
		primary key,
	PlayerID           varchar(255)                           not null,
	Author             varchar(255)                           not null,
	Name               varchar(255)                           not null,
	Title              varchar(255)                           not null,
	Ink                text                                   not null,
	InkId              text                                   not null,
	Text               text                                   not null,
	IsInLibrary        tinyint(1)                             not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_Book_Author
	on book (Author);

create or replace index I_Book_IsInLibrary
	on book (IsInLibrary);

create or replace index I_Book_Name
	on book (Name);

create or replace index I_Book_PlayerID
	on book (PlayerID);

create or replace index I_Book_Title
	on book (Title);

create or replace table bugreport
(
	ID                 int                                    not null
		primary key,
	Message            text                                   not null,
	Submitter          text                                   not null,
	DateSubmitted      datetime default '2000-01-01 00:00:00' not null,
	ClosedBy           text                                   not null,
	DateClosed         datetime default '2000-01-01 00:00:00' not null,
	Category           text                                   null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	BugReport_ID       varchar(255)                           null,
	constraint U_BugReport_BugReport_ID
		unique (BugReport_ID)
)
	charset = utf8mb3;

create or replace table casier
(
	ID                 bigint auto_increment
		primary key,
	Date               datetime default '2000-01-01 00:00:00' not null,
	Author             varchar(255)                           not null,
	AccountName        varchar(255)                           not null,
	StaffOnly          tinyint(1)                             not null,
	Reason             text                                   not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_Casier_AccountName
	on casier (AccountName);

create or replace index I_Casier_Author
	on casier (Author);

create or replace index I_Casier_Date
	on casier (Date);

create or replace index I_Casier_StaffOnly
	on casier (StaffOnly);

create or replace table champspecs
(
	ChampSpecs_ID      varchar(255)                           not null
		primary key,
	Cost               int                                    not null,
	IdLine             int                                    not null,
	SkillIndex         int                                    not null,
	`Index`            int                                    not null,
	SpellID            int                                    not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table characterxdataquest
(
	ID                 int auto_increment
		primary key,
	Character_ID       varchar(100)                           not null,
	DataQuestID        int                                    not null,
	Step               smallint                               not null,
	Count              smallint                               not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_CharacterXDataQuest_Character_ID
	on characterxdataquest (DataQuestID, Character_ID);

create or replace table characterxfaction
(
	PlayerID             varchar(255)                           not null
		primary key,
	FactionValue         double   default 0                     not null,
	LastTimeRowUpdated   datetime default '2000-01-01 00:00:00' not null,
	CharacterXFaction_ID varchar(255)                           null,
	constraint U_CharacterXFaction_CharacterXFaction_ID
		unique (CharacterXFaction_ID)
);

create or replace table characterxmasterlevel
(
	Character_ID             varchar(255)                             not null,
	MLLevel                  int                                      not null,
	MLStep                   int                                      not null,
	StepCompleted            tinyint(1) default 0                     not null,
	ValidationDate           datetime   default '2000-01-01 00:00:00' null,
	LastTimeRowUpdated       datetime   default '2000-01-01 00:00:00' not null,
	CharacterXMasterLevel_ID varchar(255)                             not null
		primary key
)
	charset = utf8mb3;

create or replace index I_CharacterXMasterLevel_Character_ID
	on characterxmasterlevel (Character_ID);

create or replace table characterxonetimedrop
(
	CharacterID              varchar(100)                           not null,
	ItemTemplateID           varchar(100)                           not null,
	LastTimeRowUpdated       datetime default '2000-01-01 00:00:00' not null,
	CharacterXOneTimeDrop_ID varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_CharacterXOneTimeDrop_CharacterID
	on characterxonetimedrop (CharacterID);

create or replace index I_CharacterXOneTimeDrop_ItemTemplateID
	on characterxonetimedrop (ItemTemplateID);

create or replace table classxrealmability
(
	CharClass             int      default 0                     not null,
	AbilityKey            text                                   not null,
	LastTimeRowUpdated    datetime default '2000-01-01 00:00:00' not null,
	ClassXRealmAbility_ID varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace table classxspecialization
(
	ClassXSpecializationID int auto_increment
		primary key,
	ClassID                int      default 0                     not null,
	SpecKeyName            varchar(100)                           not null,
	LevelAcquired          int      default 0                     not null,
	LastTimeRowUpdated     datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_ClassXSpecialization_ClassID
	on classxspecialization (ClassID);

create or replace index I_ClassXSpecialization_LevelAcquired
	on classxspecialization (LevelAcquired);

create or replace index I_ClassXSpecialization_SpecKeyName
	on classxspecialization (SpecKeyName);

create or replace table coffre
(
	Name               text charset utf8mb3                   not null,
	X                  int                                    not null,
	Y                  int                                    not null,
	Z                  int                                    not null,
	Heading            smallint unsigned                      not null,
	Region             smallint unsigned                      not null,
	Model              smallint unsigned                      not null,
	ItemInterval       int                                    not null,
	ItemChance         int                                    not null,
	LastOpen           datetime default '2000-01-01 00:00:00' not null,
	ItemList           text charset utf8mb3                   not null,
	LockDifficult      int                                    not null,
	KeyItem            text charset utf8mb3                   not null,
	Coffre_ID          varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table cookies
(
	ID           varchar(255) not null
		primary key,
	Login        varchar(255) not null,
	CreationDate datetime     not null
)
	charset = latin1;

create or replace index Login
	on cookies (Login);

create or replace table crafteditem
(
	CraftedItemID      varchar(255)                             not null
		primary key,
	Id_nb              varchar(255)                             not null,
	CraftingLevel      int        default 0                     not null,
	CraftingSkillType  int        default 0                     not null,
	MakeTemplated      tinyint(1) default 0                     not null,
	LastTimeRowUpdated datetime   default '2000-01-01 00:00:00' not null,
	CraftedItem_ID     varchar(255)                             null,
	constraint U_CraftedItem_CraftedItem_ID
		unique (CraftedItem_ID)
)
	charset = utf8mb3;

create or replace index I_CraftedItem_Id_nb
	on crafteditem (Id_nb);

create or replace table craftedxitem
(
	CraftedItemId_nb   varchar(255)                           not null,
	IngredientId_nb    text                                   not null,
	Count              int      default 0                     not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	CraftedXItem_ID    varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_CraftedXItem_CraftedItemId_nb
	on craftedxitem (CraftedItemId_nb);

create or replace table dataquest
(
	ID                          int auto_increment
		primary key,
	Name                        varchar(255)                           not null,
	StartType                   tinyint unsigned                       not null,
	StartName                   varchar(100)                           not null,
	StartRegionID               smallint unsigned                      not null,
	AcceptText                  varchar(100)                           null,
	Description                 text                                   null,
	SourceName                  text                                   null,
	SourceText                  text                                   null,
	StepType                    text                                   null,
	StepText                    text                                   null,
	StepItemTemplates           text                                   null,
	AdvanceText                 text                                   null,
	TargetName                  text                                   null,
	TargetText                  text                                   null,
	CollectItemTemplate         text                                   null,
	MaxCount                    smallint unsigned                      not null,
	MinLevel                    tinyint unsigned                       not null,
	MaxLevel                    tinyint unsigned                       not null,
	RewardMoney                 text                                   null,
	RewardXP                    text                                   null,
	OptionalRewardItemTemplates text                                   null,
	FinalRewardItemTemplates    text                                   null,
	FinishText                  text                                   null,
	QuestDependency             text                                   null,
	ClassType                   text                                   null,
	AllowedClasses              varchar(200)                           null,
	RewardCLXP                  text                                   null,
	RewardRP                    text                                   null,
	RewardBP                    text                                   null,
	LastTimeRowUpdated          datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table dataquestjson
(
	Id                          int auto_increment
		primary key,
	Name                        varchar(255)                                    not null,
	Description                 text                                            null,
	Summary                     text                                            null,
	Story                       text                                            null,
	Conclusion                  text                                            null,
	NpcName                     text                                            not null,
	NpcRegion                   smallint unsigned default 0                     not null,
	MaxCount                    smallint unsigned default 0                     not null,
	MinLevel                    tinyint unsigned  default 0                     not null,
	MaxLevel                    tinyint unsigned  default 0                     not null,
	RewardMoney                 bigint            default 0                     not null,
	RewardXP                    bigint            default 0                     not null,
	RewardCLXP                  int               default 0                     not null,
	RewardRP                    int               default 0                     not null,
	RewardBP                    int               default 0                     not null,
	OptionalRewardItemTemplates text                                            null,
	FinalRewardItemTemplates    text                                            null,
	QuestDependency             text                                            null,
	AllowedClasses              text                                            null,
	GoalsJson                   text                                            not null,
	LastTimeRowUpdated          datetime          default '2000-01-01 00:00:00' not null,
	NbChooseOptionalItems       int               default 0                     not null,
	RewardBreamorFaction        int               default 0                     not null
)
	charset = utf8mb3;

create or replace table dataquestrewardquest
(
	ID                          int auto_increment
		primary key,
	QuestName                   varchar(255)                           not null,
	StartNPC                    varchar(100)                           not null,
	StartRegionID               smallint unsigned                      not null,
	StoryText                   text                                   null,
	Summary                     text                                   null,
	AcceptText                  text                                   null,
	QuestGoals                  text                                   null,
	GoalType                    text                                   null,
	GoalRepeatNo                text                                   null,
	GoalTargetName              text                                   null,
	GoalTargetText              text                                   null,
	StepCount                   int                                    null,
	FinishNPC                   text                                   null,
	AdvanceText                 text                                   null,
	CollectItemTemplate         text                                   null,
	MaxCount                    smallint unsigned                      not null,
	MinLevel                    tinyint unsigned                       not null,
	MaxLevel                    tinyint unsigned                       not null,
	RewardMoney                 bigint                                 null,
	RewardXP                    bigint                                 null,
	RewardCLXP                  bigint                                 null,
	RewardRP                    bigint                                 null,
	RewardBP                    bigint                                 null,
	OptionalRewardItemTemplates text                                   null,
	FinalRewardItemTemplates    text                                   null,
	FinishText                  text                                   null,
	QuestDependency             text                                   null,
	AllowedClasses              varchar(200)                           null,
	ClassType                   text                                   null,
	XOffset                     text                                   null,
	YOffset                     text                                   null,
	ZoneID                      text                                   null,
	LastTimeRowUpdated          datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table dbhouse
(
	DBHouse_ID         varchar(255)                                    null,
	HouseNumber        int               default 0                     not null
		primary key,
	X                  int               default 0                     not null,
	Y                  int               default 0                     not null,
	Z                  int               default 0                     not null,
	RegionID           smallint unsigned default 0                     not null,
	Heading            int               default 0                     not null,
	CreationTime       datetime                                        null,
	Name               text                                            null,
	Model              int               default 0                     not null,
	Emblem             int               default 0                     not null,
	PorchRoofColor     int               default 0                     not null,
	PorchMaterial      int               default 0                     not null,
	RoofMaterial       int               default 0                     not null,
	DoorMaterial       int               default 0                     not null,
	WallMaterial       int               default 0                     not null,
	TrussMaterial      int               default 0                     not null,
	WindowMaterial     int               default 0                     not null,
	Rug1Color          int               default 0                     not null,
	Rug2Color          int               default 0                     not null,
	Rug3Color          int               default 0                     not null,
	Rug4Color          int               default 0                     not null,
	IndoorGuildBanner  tinyint(1)        default 0                     not null,
	IndoorGuildShield  tinyint(1)        default 0                     not null,
	OutdoorGuildBanner tinyint(1)        default 0                     not null,
	OutdoorGuildShield tinyint(1)        default 0                     not null,
	Porch              tinyint(1)        default 0                     not null,
	Price              int                                             null,
	OwnerIDs           mediumtext                                      null,
	LastPaid           datetime                                        null,
	KeptMoney          bigint            default 0                     not null,
	NoPurge            tinyint(1)        default 0                     not null,
	GuildHouse         tinyint(1)        default 0                     not null,
	GuildName          text                                            null,
	HasConsignment     tinyint(1)        default 0                     not null,
	OwnerID            text                                            null,
	LastTimeRowUpdated datetime          default '2000-01-01 00:00:00' not null,
	constraint U_DBHouse_DBHouse_ID
		unique (DBHouse_ID)
)
	charset = utf8mb3;

create or replace index I_DBHouse_RegionID
	on dbhouse (RegionID);

create or replace table dbhousecharsxperms
(
	HouseNumber           int                                    not null,
	PermissionType        int                                    not null,
	TargetName            text                                   not null,
	DisplayName           text                                   not null,
	PermissionLevel       int                                    not null,
	CreationTime          datetime                               not null,
	DBHouseCharsXPerms_ID varchar(255)                           not null
		primary key,
	LastTimeRowUpdated    datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table dbhousemerchant
(
	HouseNumber        int          not null,
	Quantity           int          not null,
	DBHouseMerchant_ID varchar(255) not null
		primary key
)
	charset = utf8mb3;

create or replace table dbhousepermissions
(
	PermissionLevel             int                                    not null,
	HouseNumber                 int                                    not null,
	CanEnterHouse               tinyint(1)                             not null,
	Vault1                      tinyint unsigned                       not null,
	Vault2                      tinyint unsigned                       not null,
	Vault3                      tinyint unsigned                       not null,
	Vault4                      tinyint unsigned                       not null,
	CanChangeExternalAppearance tinyint(1)                             not null,
	ChangeInterior              tinyint unsigned                       not null,
	ChangeGarden                tinyint unsigned                       not null,
	CanBanish                   tinyint(1)                             not null,
	CanUseMerchants             tinyint(1)                             not null,
	CanUseTools                 tinyint(1)                             not null,
	CanBindInHouse              tinyint(1)                             not null,
	ConsignmentMerchant         tinyint unsigned                       not null,
	CanPayRent                  tinyint(1)                             not null,
	DBHousePermissions_ID       varchar(255)                           not null
		primary key,
	LastTimeRowUpdated          datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table dbindooritem
(
	DBIndoorItem_ID    varchar(255)                           not null
		primary key,
	HouseNumber        int                                    not null,
	Model              int                                    not null,
	Position           int                                    not null,
	Placemode          int                                    not null,
	X                  int                                    not null,
	Y                  int                                    not null,
	BaseItemID         text                                   not null,
	Color              int      default 0                     not null,
	Rotation           int      default 0                     not null,
	Size               int      default 0                     not null,
	Emblem             int      default 0                     not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_DBIndoorItem_HouseNumber
	on dbindooritem (HouseNumber);

create or replace table dboutdooritem
(
	DBOutdoorItem_ID   varchar(255)                           not null
		primary key,
	HouseNumber        int                                    not null,
	Model              int                                    not null,
	Position           int                                    not null,
	Rotation           int                                    not null,
	BaseItemID         text                                   not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_DBOutdoorItem_HouseNumber
	on dboutdooritem (HouseNumber);

create or replace table deathlog
(
	Id                 bigint auto_increment
		primary key,
	Killer             text                                   not null,
	KillerClass        text                                   not null,
	Killed             text                                   not null,
	KilledClass        text                                   not null,
	X                  int                                    not null,
	Y                  int                                    not null,
	Region             int                                    not null,
	DeathDate          datetime default '2000-01-01 00:00:00' not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_DeathLog_DeathDate
	on deathlog (DeathDate);

create or replace index I_DeathLog_Region
	on deathlog (Region);

create or replace index I_DeathLog_X
	on deathlog (X);

create or replace index I_DeathLog_Y
	on deathlog (Y);

create or replace table dolcharacters
(
	HasGravestone             tinyint(1)        default 0                     not null,
	GravestoneRegion          int               default 0                     not null,
	Constitution              int               default 0                     not null,
	Dexterity                 int               default 0                     not null,
	Strength                  int               default 0                     not null,
	Quickness                 int               default 0                     not null,
	Intelligence              int               default 0                     not null,
	Piety                     int               default 0                     not null,
	Empathy                   int               default 0                     not null,
	Charisma                  int               default 0                     not null,
	BountyPoints              bigint            default 0                     not null,
	RealmPoints               bigint            default 0                     not null,
	SkillSpecialtyPoints      int                                             null,
	RealmSpecialtyPoints      int                                             null,
	RealmLevel                int               default 0                     not null,
	Experience                bigint            default 0                     not null,
	MaxEndurance              int               default 0                     not null,
	Health                    int               default 0                     not null,
	Mana                      int               default 0                     not null,
	Endurance                 int               default 0                     not null,
	Concentration             int               default 0                     not null,
	AccountName               varchar(255) charset utf8mb3                    not null,
	AccountSlot               int               default 0                     not null,
	CreationDate              datetime          default '2000-01-01 00:00:00' not null,
	LastPlayed                datetime          default '2000-01-01 00:00:00' null,
	Name                      varchar(255) charset utf8mb3                    not null,
	LastName                  text charset utf8mb3                            null,
	GuildID                   varchar(255) charset utf8mb3                    null,
	Gender                    int                                             not null,
	Race                      int                                             not null,
	Level                     int                                             not null,
	Class                     int                                             not null,
	Realm                     int                                             not null,
	CreationModel             int                                             not null,
	CurrentModel              int                                             not null,
	Region                    int                                             not null,
	ActiveWeaponSlot          tinyint unsigned                                not null,
	Xpos                      int                                             not null,
	Ypos                      int                                             not null,
	Zpos                      int                                             not null,
	BindXpos                  int               default 0                     not null,
	BindYpos                  int               default 0                     not null,
	BindZpos                  int               default 0                     not null,
	BindRegion                int               default 0                     not null,
	BindHeading               int               default 0                     not null,
	BindHouseXpos             int               default 0                     not null,
	BindHouseYpos             int               default 0                     not null,
	BindHouseZpos             int               default 0                     not null,
	BindHouseRegion           int               default 0                     not null,
	BindHouseHeading          int               default 0                     not null,
	DeathCount                tinyint unsigned  default 0                     not null,
	ConLostAtDeath            int               default 0                     not null,
	Direction                 int                                             not null,
	MaxSpeed                  int                                             not null,
	Copper                    int               default 0                     not null,
	Silver                    int               default 0                     not null,
	Gold                      int               default 0                     not null,
	Platinum                  int               default 0                     not null,
	Mithril                   int               default 0                     not null,
	SerializedCraftingSkills  text                                            not null,
	SerializedAbilities       text                                            not null,
	SerializedSpecs           text                                            not null,
	SerializedSpellLines      text                                            null,
	SerializedRealmAbilities  text                                            not null,
	DisabledSpells            text                                            not null,
	DisabledAbilities         text                                            not null,
	SerializedFriendsList     text                                            not null,
	SerializedIgnoreList      text                                            not null,
	IsCloakHoodUp             tinyint(1)        default 0                     not null,
	IsCloakInvisible          tinyint(1)                                      not null,
	IsHelmInvisible           tinyint(1)                                      not null,
	SpellQueue                tinyint(1)        default 0                     not null,
	IsLevelSecondStage        tinyint(1)        default 0                     not null,
	FlagClassName             tinyint(1)        default 0                     not null,
	Advisor                   tinyint(1)        default 0                     not null,
	GuildRank                 smallint unsigned default 0                     not null,
	PlayedTime                bigint            default 0                     not null,
	DeathTime                 bigint            default 0                     not null,
	RespecAmountAllSkill      int               default 0                     not null,
	RespecAmountSingleSkill   int               default 0                     not null,
	RespecAmountRealmSkill    int               default 0                     not null,
	RespecAmountDOL           int               default 0                     not null,
	RespecAmountChampionSkill int               default 0                     not null,
	IsLevelRespecUsed         tinyint(1)        default 0                     not null,
	RespecBought              int               default 0                     not null,
	SafetyFlag                tinyint(1)        default 0                     not null,
	CraftingPrimarySkill      int               default 0                     not null,
	CancelStyle               tinyint(1)        default 0                     not null,
	IsAnonymous               tinyint(1)        default 0                     not null,
	CustomisationStep         tinyint unsigned  default 0                     not null,
	EyeSize                   tinyint unsigned  default 0                     not null,
	LipSize                   tinyint unsigned  default 0                     not null,
	EyeColor                  tinyint unsigned  default 0                     not null,
	HairColor                 tinyint unsigned  default 0                     not null,
	FaceType                  tinyint unsigned  default 0                     not null,
	HairStyle                 tinyint unsigned  default 0                     not null,
	MoodType                  tinyint unsigned  default 0                     not null,
	UsedLevelCommand          tinyint(1)        default 0                     not null,
	CurrentTitleType          text                                            not null,
	KillsAlbionPlayers        int               default 0                     not null,
	KillsMidgardPlayers       int               default 0                     not null,
	KillsHiberniaPlayers      int               default 0                     not null,
	KillsAlbionDeathBlows     int               default 0                     not null,
	KillsMidgardDeathBlows    int               default 0                     not null,
	KillsHiberniaDeathBlows   int               default 0                     not null,
	KillsAlbionSolo           int               default 0                     not null,
	KillsMidgardSolo          int               default 0                     not null,
	KillsHiberniaSolo         int               default 0                     not null,
	CapturedKeeps             int               default 0                     not null,
	CapturedTowers            int               default 0                     not null,
	CapturedRelics            int               default 0                     not null,
	KillsDragon               int               default 0                     not null,
	DeathsPvP                 int               default 0                     not null,
	KillsLegion               int               default 0                     not null,
	KillsEpicBoss             int               default 0                     not null,
	GainXP                    tinyint(1)        default 0                     not null,
	GainRP                    tinyint(1)        default 0                     not null,
	Autoloot                  tinyint(1)        default 0                     not null,
	LastFreeLeveled           datetime          default '2000-01-01 00:00:00' null,
	LastFreeLevel             int               default 0                     not null,
	GuildNote                 text                                            not null,
	ShowXFireInfo             tinyint(1)        default 0                     not null,
	NoHelp                    tinyint(1)        default 0                     not null,
	ShowGuildLogins           tinyint(1)        default 0                     not null,
	Champion                  tinyint(1)        default 0                     not null,
	ChampionLevel             int               default 0                     not null,
	ChampionSpecialtyPoints   int                                             null,
	ChampionExperience        bigint            default 0                     not null,
	ChampionSpells            text                                            null,
	ML                        tinyint unsigned                                not null,
	MLExperience              bigint                                          not null,
	MLLevel                   int                                             not null,
	MLGranted                 tinyint(1)                                      not null,
	RPFlag                    tinyint(1)        default 0                     not null,
	IgnoreStatistics          tinyint(1)        default 0                     not null,
	NotDisplayedInHerald      tinyint unsigned  default 0                     not null,
	ActiveSaddleBags          tinyint unsigned  default 0                     not null,
	LastTimeRowUpdated        datetime          default '2000-01-01 00:00:00' not null,
	DOLCharacters_ID          varchar(255) charset utf8mb3                    not null
		primary key,
	BreamorFaction            int               default 0                     not null,
	constraint U_DOLCharacters_Name
		unique (Name)
)
	charset = latin1;

create or replace index I_DOLCharacters_AccountName
	on dolcharacters (AccountName);

create or replace index I_DOLCharacters_GuildID
	on dolcharacters (GuildID);

create or replace table dolcharactersbackup
(
	DOLCharacters_ID          varchar(255) charset utf8mb3                    not null,
	Name                      varchar(255) charset utf8mb3                    not null,
	DeleteDate                datetime          default '2000-01-01 00:00:00' not null,
	HasGravestone             tinyint(1)        default 0                     not null,
	GravestoneRegion          int               default 0                     not null,
	Constitution              int               default 0                     not null,
	Dexterity                 int               default 0                     not null,
	Strength                  int               default 0                     not null,
	Quickness                 int               default 0                     not null,
	Intelligence              int               default 0                     not null,
	Piety                     int               default 0                     not null,
	Empathy                   int               default 0                     not null,
	Charisma                  int               default 0                     not null,
	BountyPoints              bigint            default 0                     not null,
	RealmPoints               bigint            default 0                     not null,
	SkillSpecialtyPoints      int                                             null,
	RealmSpecialtyPoints      int                                             null,
	RealmLevel                int               default 0                     not null,
	Experience                bigint            default 0                     not null,
	MaxEndurance              int               default 0                     not null,
	Health                    int               default 0                     not null,
	Mana                      int               default 0                     not null,
	Endurance                 int               default 0                     not null,
	Concentration             int               default 0                     not null,
	AccountName               varchar(255) charset utf8mb3                    not null,
	AccountSlot               int               default 0                     not null,
	CreationDate              datetime          default '2000-01-01 00:00:00' not null,
	LastPlayed                datetime          default '2000-01-01 00:00:00' null,
	LastName                  text charset utf8mb3                            null,
	GuildID                   varchar(255) charset utf8mb3                    null,
	Gender                    int                                             not null,
	Race                      int                                             not null,
	Level                     int                                             not null,
	Class                     int                                             not null,
	Realm                     int                                             not null,
	CreationModel             int                                             not null,
	CurrentModel              int                                             not null,
	Region                    int                                             not null,
	ActiveWeaponSlot          tinyint unsigned                                not null,
	Xpos                      int                                             not null,
	Ypos                      int                                             not null,
	Zpos                      int                                             not null,
	BindXpos                  int               default 0                     not null,
	BindYpos                  int               default 0                     not null,
	BindZpos                  int               default 0                     not null,
	BindRegion                int               default 0                     not null,
	BindHeading               int               default 0                     not null,
	BindHouseXpos             int               default 0                     not null,
	BindHouseYpos             int               default 0                     not null,
	BindHouseZpos             int               default 0                     not null,
	BindHouseRegion           int               default 0                     not null,
	BindHouseHeading          int               default 0                     not null,
	DeathCount                tinyint unsigned  default 0                     not null,
	ConLostAtDeath            int               default 0                     not null,
	Direction                 int                                             not null,
	MaxSpeed                  int                                             not null,
	Copper                    int               default 0                     not null,
	Silver                    int               default 0                     not null,
	Gold                      int               default 0                     not null,
	Platinum                  int               default 0                     not null,
	Mithril                   int               default 0                     not null,
	SerializedCraftingSkills  text                                            not null,
	SerializedAbilities       text                                            not null,
	SerializedSpecs           text                                            not null,
	SerializedSpellLines      text                                            null,
	SerializedRealmAbilities  text                                            not null,
	DisabledSpells            text                                            not null,
	DisabledAbilities         text                                            not null,
	SerializedFriendsList     text                                            not null,
	SerializedIgnoreList      text                                            not null,
	IsCloakHoodUp             tinyint(1)        default 0                     not null,
	IsCloakInvisible          tinyint(1)                                      not null,
	IsHelmInvisible           tinyint(1)                                      not null,
	SpellQueue                tinyint(1)        default 0                     not null,
	IsLevelSecondStage        tinyint(1)        default 0                     not null,
	FlagClassName             tinyint(1)        default 0                     not null,
	Advisor                   tinyint(1)        default 0                     not null,
	GuildRank                 smallint unsigned default 0                     not null,
	PlayedTime                bigint            default 0                     not null,
	DeathTime                 bigint            default 0                     not null,
	RespecAmountAllSkill      int               default 0                     not null,
	RespecAmountSingleSkill   int               default 0                     not null,
	RespecAmountRealmSkill    int               default 0                     not null,
	RespecAmountDOL           int               default 0                     not null,
	RespecAmountChampionSkill int               default 0                     not null,
	IsLevelRespecUsed         tinyint(1)        default 0                     not null,
	RespecBought              int               default 0                     not null,
	SafetyFlag                tinyint(1)        default 0                     not null,
	CraftingPrimarySkill      int               default 0                     not null,
	CancelStyle               tinyint(1)        default 0                     not null,
	IsAnonymous               tinyint(1)        default 0                     not null,
	CustomisationStep         tinyint unsigned  default 0                     not null,
	EyeSize                   tinyint unsigned  default 0                     not null,
	LipSize                   tinyint unsigned  default 0                     not null,
	EyeColor                  tinyint unsigned  default 0                     not null,
	HairColor                 tinyint unsigned  default 0                     not null,
	FaceType                  tinyint unsigned  default 0                     not null,
	HairStyle                 tinyint unsigned  default 0                     not null,
	MoodType                  tinyint unsigned  default 0                     not null,
	UsedLevelCommand          tinyint(1)        default 0                     not null,
	CurrentTitleType          text                                            not null,
	KillsAlbionPlayers        int               default 0                     not null,
	KillsMidgardPlayers       int               default 0                     not null,
	KillsHiberniaPlayers      int               default 0                     not null,
	KillsAlbionDeathBlows     int               default 0                     not null,
	KillsMidgardDeathBlows    int               default 0                     not null,
	KillsHiberniaDeathBlows   int               default 0                     not null,
	KillsAlbionSolo           int               default 0                     not null,
	KillsMidgardSolo          int               default 0                     not null,
	KillsHiberniaSolo         int               default 0                     not null,
	CapturedKeeps             int               default 0                     not null,
	CapturedTowers            int               default 0                     not null,
	CapturedRelics            int               default 0                     not null,
	KillsDragon               int               default 0                     not null,
	DeathsPvP                 int               default 0                     not null,
	KillsLegion               int               default 0                     not null,
	KillsEpicBoss             int               default 0                     not null,
	GainXP                    tinyint(1)        default 0                     not null,
	GainRP                    tinyint(1)        default 0                     not null,
	Autoloot                  tinyint(1)        default 0                     not null,
	LastFreeLeveled           datetime          default '2000-01-01 00:00:00' null,
	LastFreeLevel             int               default 0                     not null,
	GuildNote                 text                                            not null,
	ShowXFireInfo             tinyint(1)        default 0                     not null,
	NoHelp                    tinyint(1)        default 0                     not null,
	ShowGuildLogins           tinyint(1)        default 0                     not null,
	Champion                  tinyint(1)        default 0                     not null,
	ChampionLevel             int               default 0                     not null,
	ChampionSpecialtyPoints   int                                             null,
	ChampionExperience        bigint            default 0                     not null,
	ChampionSpells            text                                            null,
	ML                        tinyint unsigned                                not null,
	MLExperience              bigint                                          not null,
	MLLevel                   int                                             not null,
	MLGranted                 tinyint(1)                                      not null,
	RPFlag                    tinyint(1)        default 0                     not null,
	IgnoreStatistics          tinyint(1)        default 0                     not null,
	NotDisplayedInHerald      tinyint unsigned  default 0                     not null,
	ActiveSaddleBags          tinyint unsigned  default 0                     not null,
	LastTimeRowUpdated        datetime          default '2000-01-01 00:00:00' not null,
	DOLCharactersBackup_ID    varchar(255) charset utf8mb3                    not null
		primary key,
	BreamorFaction            int               default 0                     not null
)
	charset = latin1;

create or replace index I_DOLCharactersBackup_AccountName
	on dolcharactersbackup (AccountName);

create or replace index I_DOLCharactersBackup_GuildID
	on dolcharactersbackup (GuildID);

create or replace index I_DOLCharactersBackup_Name
	on dolcharactersbackup (Name);

create or replace table dolcharactersbackupxcustomparam
(
	DOLCharactersObjectId varchar(255)                           not null,
	KeyName               varchar(100)                           not null,
	Value                 varchar(255)                           null,
	CustomParamID         int auto_increment
		primary key,
	LastTimeRowUpdated    datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_DOLCharactersBackupXCustomParam_DOLCharactersObjectId
	on dolcharactersbackupxcustomparam (DOLCharactersObjectId);

create or replace index I_DOLCharactersBackupXCustomParam_KeyName
	on dolcharactersbackupxcustomparam (KeyName);

create or replace table dolcharactersxcustomparam
(
	DOLCharactersObjectId varchar(255)                           not null,
	KeyName               varchar(100)                           not null,
	Value                 varchar(255)                           null,
	CustomParamID         int auto_increment
		primary key,
	LastTimeRowUpdated    datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_DOLCharactersXCustomParam_DOLCharactersObjectId
	on dolcharactersxcustomparam (DOLCharactersObjectId);

create or replace index I_DOLCharactersXCustomParam_KeyName
	on dolcharactersxcustomparam (KeyName);

create or replace table door
(
	Name               text                                           null,
	Type               int              default 0                     not null,
	Z                  int              default 0                     not null,
	Y                  int              default 0                     not null,
	X                  int              default 0                     not null,
	Heading            int              default 0                     not null,
	InternalID         int              default 0                     not null,
	Guild              text                                           null,
	Level              tinyint unsigned default 0                     not null,
	Realm              tinyint unsigned default 0                     not null,
	Flags              int unsigned     default 0                     not null,
	Locked             int              default 0                     not null,
	Health             int              default 0                     not null,
	MaxHealth          int              default 0                     not null,
	LastTimeRowUpdated datetime         default '2000-01-01 00:00:00' not null,
	Door_ID            varchar(255)                                   not null
		primary key
)
	charset = utf8mb3;

create or replace index I_Door_InternalID
	on door (InternalID);

create or replace table droptemplatexitemtemplate
(
	ID                 bigint auto_increment
		primary key,
	TemplateName       varchar(255) charset utf8mb3           not null,
	ItemTemplateID     text charset utf8mb3                   not null,
	Chance             int                                    not null,
	Count              int                                    not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_DropTemplateXItemTemplate_TemplateName
	on droptemplatexitemtemplate (TemplateName);

create or replace table echangeur
(
	NpcID              text charset utf8mb3                   null,
	ItemRecvID         text charset utf8mb3                   null,
	ItemRecvCount      int                                    null,
	ItemGiveID         text charset utf8mb3                   null,
	ItemGiveCount      int                                    null,
	GainMoney          bigint                                 not null,
	GainXP             int                                    not null,
	ChangedItemCount   int                                    not null,
	Echangeur_ID       varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table faction
(
	ID                 int                                    not null
		primary key,
	Name               text charset utf8mb3                   null,
	BaseAggroLevel     int      default 0                     not null,
	Faction_ID         varchar(255) charset utf8mb3           null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	constraint U_Faction_Faction_ID
		unique (Faction_ID)
)
	charset = latin1;

create or replace table factionaggrolevel
(
	CharacterID          varchar(100)                           not null,
	FactionID            int                                    not null,
	AggroLevel           int                                    not null,
	FactionAggroLevel_ID varchar(255)                           not null
		primary key,
	LastTimeRowUpdated   datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_FactionAggroLevel_CharacterID
	on factionaggrolevel (CharacterID);

create or replace table fret
(
	FromPlayer         text charset utf8mb3                            not null,
	ToPlayer           varchar(255) charset utf8mb3                    not null,
	OwnerID            varchar(255) charset utf8mb3                    not null,
	OwnerLot           smallint unsigned default 0                     not null,
	ITemplate_Id       varchar(255) charset utf8mb3                    null,
	UTemplate_Id       varchar(255) charset utf8mb3                    null,
	IsCrafted          tinyint(1)        default 0                     not null,
	Creator            text charset utf8mb3                            null,
	SlotPosition       int               default 0                     not null,
	Count              int               default 0                     not null,
	SellPrice          int               default 0                     not null,
	Experience         bigint            default 0                     not null,
	Color              int               default 0                     not null,
	Emblem             int               default 0                     not null,
	Extension          tinyint unsigned  default 0                     not null,
	`Condition`        int                                             not null,
	Durability         int                                             not null,
	PoisonSpellID      int               default 0                     not null,
	PoisonMaxCharges   int               default 0                     not null,
	PoisonCharges      int               default 0                     not null,
	Charges            int               default 0                     not null,
	Charges1           int               default 0                     not null,
	Cooldown           int                                             not null,
	LastTimeRowUpdated datetime          default '2000-01-01 00:00:00' not null,
	Fret_ID            varchar(255) charset utf8mb3                    not null
		primary key
)
	charset = latin1;

create or replace index I_Fret_ITemplate_Id
	on fret (ITemplate_Id);

create or replace index I_Fret_OwnerID
	on fret (OwnerID);

create or replace index I_Fret_SlotPosition
	on fret (SlotPosition);

create or replace index I_Fret_ToPlayer
	on fret (ToPlayer);

create or replace index I_Fret_UTemplate_Id
	on fret (UTemplate_Id);

create or replace table guardxguild
(
	ID                 int auto_increment
		primary key,
	GuildID            text charset utf8mb3                   not null,
	Aggro              int      default 0                     not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table guardxplayer
(
	ID                 int auto_increment
		primary key,
	PlayerID           text charset utf8mb3                   not null,
	Aggro              int      default 0                     not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table guild
(
	GuildID             varchar(255)                                   not null,
	GuildName           varchar(255)                                   not null,
	Realm               tinyint unsigned default 0                     not null,
	GuildBanner         tinyint(1)       default 0                     not null,
	GuildBannerLostTime datetime         default '2000-01-01 00:00:00' not null,
	Motd                text charset utf8mb3                           null,
	oMotd               text charset utf8mb3                           null,
	AllianceID          varchar(255) charset utf8mb3                   null,
	Emblem              int              default 0                     not null,
	RealmPoints         bigint           default 0                     not null,
	BountyPoints        bigint           default 0                     not null,
	Webpage             text                                           not null,
	Email               text                                           not null,
	Dues                tinyint(1)       default 0                     not null,
	Bank                double           default 0                     not null,
	DuesPercent         bigint           default 0                     not null,
	HaveGuildHouse      tinyint(1)                                     not null,
	GuildHouseNumber    int                                            not null,
	GuildLevel          bigint           default 0                     not null,
	BonusType           tinyint unsigned default 0                     not null,
	BonusStartTime      datetime         default '2000-01-01 00:00:00' not null,
	MeritPoints         bigint                                         not null,
	LastTimeRowUpdated  datetime         default '2000-01-01 00:00:00' not null,
	Guild_ID            varchar(255) charset utf8mb3                   not null
		primary key,
	constraint U_Guild_GuildID
		unique (GuildID)
)
	charset = latin1;

create or replace index I_Guild_AllianceID
	on guild (AllianceID);

create or replace index I_Guild_GuildName
	on guild (GuildName);

create or replace table guildalliance
(
	AllianceName       text                                   not null,
	Motd               text                                   not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	GuildAlliance_ID   varchar(255) charset utf8mb3           not null
		primary key,
	LeaderGuildID      varchar(255) charset utf8mb3           null,
	constraint U_GuildAlliance_LeaderGuildID
		unique (LeaderGuildID)
)
	charset = latin1;

create or replace table guildrank
(
	GuildID            varchar(255) charset utf8mb3                   null,
	Title              text charset utf8mb3                           null,
	RankLevel          tinyint unsigned default 0                     not null,
	Alli               tinyint(1)       default 0                     not null,
	Emblem             tinyint(1)       default 0                     not null,
	Buff               tinyint(1)       default 0                     not null,
	GcHear             tinyint(1)       default 0                     not null,
	GcSpeak            tinyint(1)       default 0                     not null,
	OcHear             tinyint(1)       default 0                     not null,
	OcSpeak            tinyint(1)       default 0                     not null,
	AcHear             tinyint(1)       default 0                     not null,
	AcSpeak            tinyint(1)       default 0                     not null,
	Invite             tinyint(1)       default 0                     not null,
	Promote            tinyint(1)       default 0                     not null,
	Remove             tinyint(1)       default 0                     not null,
	View               tinyint(1)       default 0                     not null,
	Claim              tinyint(1)       default 0                     not null,
	Upgrade            tinyint(1)       default 0                     not null,
	`Release`          tinyint(1)       default 0                     not null,
	Dues               tinyint(1)       default 0                     not null,
	Withdraw           tinyint(1)       default 0                     not null,
	LastTimeRowUpdated datetime         default '2000-01-01 00:00:00' not null,
	GuildRank_ID       varchar(255) charset utf8mb3                   not null
		primary key
)
	charset = latin1;

create or replace index I_GuildRank_GuildID
	on guildrank (GuildID);

create or replace table gvgarea
(
	ID                 int auto_increment
		primary key,
	LastClaim          datetime default '2000-01-01 00:00:00' not null,
	LordID             varchar(255) charset utf8mb3           not null,
	Type               text charset utf8mb3                   not null,
	Name               varchar(255) charset utf8mb3           not null,
	GuildID            varchar(255) charset utf8mb3           not null,
	GuardTemplates     text charset utf8mb3                   not null,
	Allied             text charset utf8mb3                   not null,
	Enemies            text charset utf8mb3                   not null,
	Settings           text charset utf8mb3                   not null,
	X                  int                                    not null,
	Y                  int                                    not null,
	Radius             smallint unsigned                      not null,
	Region             smallint unsigned                      not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_GvGArea_GuildID
	on gvgarea (GuildID);

create or replace index I_GvGArea_LordID
	on gvgarea (LordID);

create or replace index I_GvGArea_Name
	on gvgarea (Name);

create or replace table gvgkeep
(
	NPCCenterID        varchar(255)                             not null
		primary key,
	OwnerGuildID       text                                     not null,
	Faction            int        default 0                     not null,
	AcceptAvernes      tinyint(1) default 0                     not null,
	AcceptHelviens     tinyint(1) default 0                     not null,
	BonusXP            int        default 0                     not null,
	BonusRP            int        default 0                     not null,
	BonusRadius        int        default 0                     not null,
	LastTimeRowUpdated datetime   default '2000-01-01 00:00:00' not null,
	GvGKeep_ID         varchar(255)                             null,
	constraint U_GvGKeep_GvGKeep_ID
		unique (GvGKeep_ID)
);

create or replace table gvgkeepalliance
(
	NPCCenterID        text                                     not null,
	GuildID            text                                     not null,
	IsAllied           tinyint(1) default 0                     not null,
	HasBonus           tinyint(1) default 0                     not null,
	LastTimeRowUpdated datetime   default '2000-01-01 00:00:00' not null,
	GvGKeepAlliance_ID varchar(255)                             not null
		primary key
);

create or replace table house_hookpointoffset
(
	househookpointoffset_ID  varchar(255) null,
	Model                    int          not null,
	Hookpoint                int          not null,
	OffX                     int          null,
	OffY                     int          null,
	OffZ                     int          null,
	OffH                     int          null,
	house_hookpointoffset_ID varchar(255) not null
		primary key
)
	charset = utf8mb3;

create or replace table houseconsignmentmerchant
(
	ID                 bigint auto_increment
		primary key,
	OwnerID            varchar(128) charset utf8mb3           not null,
	HouseNumber        int                                    not null,
	Money              bigint                                 not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_HouseConsignmentMerchant_HouseNumber
	on houseconsignmentmerchant (HouseNumber);

create or replace index I_HouseConsignmentMerchant_OwnerID
	on houseconsignmentmerchant (OwnerID);

create or replace table househookpointitem
(
	ID                 bigint auto_increment
		primary key,
	HouseNumber        int                                             not null,
	HookpointID        int unsigned                                    not null,
	Heading            smallint unsigned default 0                     not null,
	ItemTemplateID     text charset utf8mb3                            null,
	`Index`            tinyint unsigned  default 0                     not null,
	LastTimeRowUpdated datetime          default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_househookpointitem_HouseNumber
	on househookpointitem (HouseNumber);

create or replace table househookpointoffset
(
	ID                 bigint auto_increment
		primary key,
	HouseModel         int                                    not null,
	HookpointID        int                                    not null,
	X                  int                                    not null,
	Y                  int                                    not null,
	Z                  int                                    not null,
	Heading            int                                    not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table housepointitem
(
	housepointitem_ID varchar(255)      not null
		primary key,
	HouseID           int               not null,
	Position          int unsigned      not null,
	ItemTemplateID    mediumtext        null,
	`Index`           tinyint unsigned  null,
	Heading           smallint unsigned null
)
	charset = utf8mb3;

create or replace table instancexelement
(
	InstanceID          varchar(255)                           not null,
	ClassType           text                                   not null,
	X                   int                                    not null,
	Y                   int                                    not null,
	Z                   int                                    not null,
	Heading             smallint unsigned                      not null,
	NPCTemplate         varchar(255)                           not null,
	InstanceXElement_ID varchar(255)                           not null
		primary key,
	LastTimeRowUpdated  datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_InstanceXElement_InstanceID
	on instancexelement (InstanceID);

create or replace table inventory
(
	OwnerID            varchar(255) charset utf8mb3                    not null,
	OwnerLot           smallint unsigned default 0                     not null,
	ITemplate_Id       varchar(255) charset utf8mb3                    null,
	UTemplate_Id       varchar(255) charset utf8mb3                    null,
	IsCrafted          tinyint(1)        default 0                     not null,
	Creator            text charset utf8mb3                            null,
	SlotPosition       int               default 0                     not null,
	Count              int               default 0                     not null,
	SellPrice          int               default 0                     not null,
	Experience         bigint            default 0                     not null,
	Color              int               default 0                     not null,
	Emblem             int               default 0                     not null,
	Extension          tinyint unsigned  default 0                     not null,
	`Condition`        int                                             not null,
	Durability         int                                             not null,
	PoisonSpellID      int               default 0                     not null,
	PoisonMaxCharges   int               default 0                     not null,
	PoisonCharges      int               default 0                     not null,
	Charges            int               default 0                     not null,
	Charges1           int               default 0                     not null,
	Cooldown           int                                             not null,
	LastTimeRowUpdated datetime          default '2000-01-01 00:00:00' not null,
	Inventory_ID       varchar(255) charset utf8mb3                    not null
		primary key
)
	charset = latin1;

create or replace index I_Inventory_ITemplate_Id
	on inventory (ITemplate_Id);

create or replace index I_Inventory_OwnerID
	on inventory (OwnerID);

create or replace index I_Inventory_SlotPosition
	on inventory (SlotPosition);

create or replace index I_Inventory_UTemplate_Id
	on inventory (UTemplate_Id);

create or replace table inventorylog
(
	CreatedAt          datetime default '2000-01-01 00:00:00' not null,
	Source             text                                   null,
	SourceId           text                                   null,
	SourcePlvl         int                                    null,
	Destination        text                                   null,
	DestinationId      text                                   null,
	DestinationPlvl    int                                    null,
	ItemTemplate       text                                   null,
	ItemUnique         text                                   null,
	Money              bigint   default 0                     not null,
	ItemCount          int      default 0                     not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	InventoryLog_ID    varchar(255)                           not null
		primary key
);

create or replace table irc
(
	Account            text                                   not null,
	Ban                int                                    not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	irc_ID             varchar(255)                           not null
		primary key
)
	charset = latin1;

create or replace table itemtemplate
(
	Id_nb              varchar(255)                                   not null
		primary key,
	TranslationId      text                                           null,
	Name               text                                           not null,
	ExamineArticle     text                                           null,
	MessageArticle     text                                           null,
	Level              int              default 0                     not null,
	Durability         int              default 0                     not null,
	MaxDurability      int              default 0                     not null,
	IsNotLosingDur     tinyint(1)       default 0                     not null,
	`Condition`        int              default 0                     not null,
	MaxCondition       int              default 0                     not null,
	Quality            int              default 0                     not null,
	DPS_AF             int              default 0                     not null,
	SPD_ABS            int              default 0                     not null,
	Hand               int              default 0                     not null,
	Type_Damage        int              default 0                     not null,
	Object_Type        int              default 0                     not null,
	Item_Type          int              default 0                     not null,
	Color              int              default 0                     not null,
	Emblem             int              default 0                     not null,
	Effect             int              default 0                     not null,
	Weight             int              default 0                     not null,
	Model              int              default 0                     not null,
	Extension          tinyint unsigned default 0                     not null,
	Bonus              int              default 0                     not null,
	Bonus1             int              default 0                     not null,
	Bonus2             int              default 0                     not null,
	Bonus3             int              default 0                     not null,
	Bonus4             int              default 0                     not null,
	Bonus5             int              default 0                     not null,
	Bonus6             int              default 0                     not null,
	Bonus7             int              default 0                     not null,
	Bonus8             int              default 0                     not null,
	Bonus9             int              default 0                     not null,
	Bonus10            int              default 0                     not null,
	ExtraBonus         int              default 0                     not null,
	Bonus1Type         int              default 0                     not null,
	Bonus2Type         int              default 0                     not null,
	Bonus3Type         int              default 0                     not null,
	Bonus4Type         int              default 0                     not null,
	Bonus5Type         int              default 0                     not null,
	Bonus6Type         int              default 0                     not null,
	Bonus7Type         int              default 0                     not null,
	Bonus8Type         int              default 0                     not null,
	Bonus9Type         int              default 0                     not null,
	Bonus10Type        int              default 0                     not null,
	ExtraBonusType     int              default 0                     not null,
	CanUseEvery        int              default 0                     not null,
	SpellID            int              default 0                     not null,
	Charges            int              default 0                     not null,
	MaxCharges         int              default 0                     not null,
	SpellID1           int              default 0                     not null,
	Charges1           int              default 0                     not null,
	MaxCharges1        int              default 0                     not null,
	ProcChance         tinyint unsigned default 0                     not null,
	ProcSpellID        int              default 0                     not null,
	ProcSpellID1       int              default 0                     not null,
	PoisonSpellID      int              default 0                     not null,
	PoisonCharges      int              default 0                     not null,
	PoisonMaxCharges   int              default 0                     not null,
	IsPickable         tinyint(1)       default 0                     not null,
	IsDropable         tinyint(1)       default 0                     not null,
	CanDropAsLoot      tinyint(1)       default 0                     not null,
	IsTradable         tinyint(1)       default 0                     not null,
	Price              bigint           default 0                     not null,
	MaxCount           int              default 0                     not null,
	IsIndestructible   tinyint(1)       default 0                     not null,
	PackSize           int              default 0                     not null,
	Realm              int              default 0                     not null,
	AllowedClasses     text                                           not null,
	Flags              int              default 0                     not null,
	BonusLevel         int              default 0                     not null,
	LevelRequirement   int              default 0                     not null,
	PackageID          text                                           null,
	Description        text                                           null,
	ClassType          varchar(255)                                   null,
	SalvageYieldID     int              default 0                     not null,
	LastTimeRowUpdated datetime         default '2000-01-01 00:00:00' not null,
	ItemTemplate_ID    varchar(255)                                   null,
	constraint U_ItemTemplate_ItemTemplate_ID
		unique (ItemTemplate_ID)
)
	charset = utf8mb3
	row_format = DYNAMIC;

create or replace table itemunique
(
	Id_nb              varchar(255)                                   not null
		primary key,
	Name               text                                           not null,
	Level              int                                            not null,
	Durability         int              default 0                     not null,
	`Condition`        int              default 0                     not null,
	MaxDurability      int              default 0                     not null,
	MaxCondition       int              default 0                     not null,
	Quality            int              default 0                     not null,
	DPS_AF             int              default 0                     not null,
	SPD_ABS            int              default 0                     not null,
	Hand               int              default 0                     not null,
	Type_Damage        int              default 0                     not null,
	Object_Type        int              default 0                     not null,
	Item_Type          int              default 0                     not null,
	Color              int              default 0                     not null,
	Emblem             int              default 0                     not null,
	Effect             int              default 0                     not null,
	Weight             int              default 0                     not null,
	Model              int                                            not null,
	Extension          tinyint unsigned default 0                     not null,
	Bonus              int              default 0                     not null,
	Bonus1             int              default 0                     not null,
	Bonus2             int              default 0                     not null,
	Bonus3             int              default 0                     not null,
	Bonus4             int              default 0                     not null,
	Bonus5             int              default 0                     not null,
	Bonus6             int              default 0                     not null,
	Bonus7             int              default 0                     not null,
	Bonus8             int              default 0                     not null,
	Bonus9             int              default 0                     not null,
	Bonus10            int              default 0                     not null,
	ExtraBonus         int              default 0                     not null,
	Bonus1Type         int              default 0                     not null,
	Bonus2Type         int              default 0                     not null,
	Bonus3Type         int              default 0                     not null,
	Bonus4Type         int              default 0                     not null,
	Bonus5Type         int              default 0                     not null,
	Bonus6Type         int              default 0                     not null,
	Bonus7Type         int              default 0                     not null,
	Bonus8Type         int              default 0                     not null,
	Bonus9Type         int              default 0                     not null,
	Bonus10Type        int              default 0                     not null,
	ExtraBonusType     int              default 0                     not null,
	IsPickable         tinyint(1)       default 0                     not null,
	IsDropable         tinyint(1)       default 0                     not null,
	CanDropAsLoot      tinyint(1)       default 0                     not null,
	IsTradable         tinyint(1)       default 0                     not null,
	Price              bigint           default 0                     not null,
	MaxCount           int              default 0                     not null,
	IsIndestructible   tinyint(1)       default 0                     not null,
	IsNotLosingDur     tinyint(1)       default 0                     not null,
	PackSize           int              default 0                     not null,
	Charges            int              default 0                     not null,
	MaxCharges         int              default 0                     not null,
	Charges1           int              default 0                     not null,
	MaxCharges1        int              default 0                     not null,
	SpellID            int              default 0                     not null,
	SpellID1           int              default 0                     not null,
	ProcSpellID        int              default 0                     not null,
	ProcSpellID1       int              default 0                     not null,
	PoisonSpellID      int              default 0                     not null,
	PoisonMaxCharges   int              default 0                     not null,
	PoisonCharges      int              default 0                     not null,
	Realm              int              default 0                     not null,
	AllowedClasses     text                                           not null,
	CanUseEvery        int                                            not null,
	Flags              int              default 0                     not null,
	BonusLevel         int              default 0                     not null,
	LevelRequirement   int              default 0                     not null,
	PackageID          text                                           null,
	Description        text                                           null,
	ClassType          varchar(255)                                   null,
	ItemUnique_ID      varchar(255)                                   null,
	ProcChance         tinyint unsigned default 0                     not null,
	SalvageYieldID     int              default 0                     not null,
	TranslationId      text                                           null,
	ExamineArticle     text                                           null,
	MessageArticle     text                                           null,
	LastTimeRowUpdated datetime         default '2000-01-01 00:00:00' not null,
	constraint U_ItemUnique_ItemUnique_ID
		unique (ItemUnique_ID)
)
	charset = utf8mb3;

create or replace table keep
(
	KeepID                  int               default 0                     not null
		primary key,
	Name                    text                                            not null,
	Region                  smallint unsigned default 0                     not null,
	X                       int               default 0                     not null,
	Y                       int               default 0                     not null,
	Z                       int               default 0                     not null,
	Heading                 smallint unsigned default 0                     not null,
	Realm                   tinyint unsigned  default 0                     not null,
	Level                   tinyint unsigned  default 0                     not null,
	ClaimedGuildName        text                                            null,
	AlbionDifficultyLevel   int               default 0                     not null,
	MidgardDifficultyLevel  int               default 0                     not null,
	HiberniaDifficultyLevel int               default 0                     not null,
	OriginalRealm           int               default 0                     not null,
	KeepType                int               default 0                     not null,
	BaseLevel               tinyint unsigned  default 0                     not null,
	SkinType                tinyint unsigned  default 0                     not null,
	CreateInfo              varchar(255)                                    not null,
	LastTimeRowUpdated      datetime          default '2000-01-01 00:00:00' not null,
	Keep_ID                 varchar(255)                                    null,
	constraint U_Keep_Keep_ID
		unique (Keep_ID)
)
	charset = utf8mb3;

create or replace table keepcapturelog
(
	ID                 bigint auto_increment
		primary key,
	DateTaken          datetime                               not null,
	KeepName           text                                   not null,
	KeepType           text                                   not null,
	NumEnemies         int                                    not null,
	CombatTime         int                                    not null,
	RPReward           int                                    not null,
	BPReward           int                                    not null,
	XPReward           bigint                                 not null,
	MoneyReward        bigint                                 not null,
	CapturedBy         text                                   not null,
	RPGainerList       text                                   not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table keepcomponent
(
	X                  int      default 0                     not null,
	Y                  int      default 0                     not null,
	Heading            int      default 0                     not null,
	Health             int      default 0                     not null,
	Skin               int      default 0                     not null,
	KeepID             int      default 0                     not null,
	ID                 int      default 0                     not null,
	CreateInfo         varchar(255)                           not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	KeepComponent_ID   varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_KeepComponent_ID
	on keepcomponent (ID);

create or replace index I_KeepComponent_KeepID
	on keepcomponent (KeepID);

create or replace table keephookpoint
(
	HookPointID         int      default 0                     not null,
	KeepComponentSkinID int      default 0                     not null,
	Z                   int      default 0                     not null,
	Y                   int      default 0                     not null,
	X                   int      default 0                     not null,
	Heading             int      default 0                     not null,
	Height              int      default 0                     not null,
	LastTimeRowUpdated  datetime default '2000-01-01 00:00:00' not null,
	KeepHookPoint_ID    varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_KeepHookPoint_Height
	on keephookpoint (Height);

create or replace index I_KeepHookPoint_HookPointID
	on keephookpoint (HookPointID);

create or replace table keephookpointitem
(
	KeepID               int      default 0                     not null,
	ComponentID          int      default 0                     not null,
	HookPointID          int      default 0                     not null,
	ClassType            text                                   not null,
	LastTimeRowUpdated   datetime default '2000-01-01 00:00:00' not null,
	KeepHookPointItem_ID varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_KeepHookPointItem_ComponentID
	on keephookpointitem (ComponentID);

create or replace index I_KeepHookPointItem_HookPointID
	on keephookpointitem (HookPointID);

create or replace index I_KeepHookPointItem_KeepID
	on keephookpointitem (KeepID);

create or replace table keepposition
(
	ComponentSkin      int      default 0                     not null,
	ComponentRotation  int      default 0                     not null,
	TemplateID         varchar(255)                           not null,
	Height             int      default 0                     not null,
	XOff               int      default 0                     not null,
	YOff               int      default 0                     not null,
	ZOff               int      default 0                     not null,
	HOff               int      default 0                     not null,
	ClassType          varchar(255)                           null,
	TemplateType       int      default 0                     not null,
	KeepType           int      default 0                     not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	KeepPosition_ID    varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_KeepPosition_ClassType
	on keepposition (ClassType);

create or replace index I_KeepPosition_ComponentSkin
	on keepposition (ComponentSkin);

create or replace index I_KeepPosition_Height
	on keepposition (Height);

create or replace index I_KeepPosition_TemplateID
	on keepposition (TemplateID);

create or replace table language
(
	Language_ID   varchar(255) not null
		primary key,
	TranslationID varchar(255) not null,
	EN            text         not null,
	DE            text         null,
	FR            text         null,
	IT            text         null,
	ES            text         null,
	CZ            text         null,
	PackageID     text         null,
	CU            text         null,
	constraint TranslationID
		unique (TranslationID)
)
	charset = latin1;

create or replace table languagearea
(
	TranslationId      varchar(255) charset utf8mb3           not null,
	Description        text charset utf8mb3                   not null,
	ScreenDescription  text charset utf8mb3                   not null,
	Language           varchar(255) charset utf8mb3           not null,
	LanguageArea_ID    varchar(255) charset utf8mb3           not null
		primary key,
	Tag                text charset utf8mb3                   null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_LanguageArea_Language
	on languagearea (Language);

create or replace index I_LanguageArea_TranslationId
	on languagearea (TranslationId);

create or replace table languagegameobject
(
	Name                  text                                   null,
	ExamineArticle        text                                   null,
	TranslationId         varchar(255)                           not null,
	Language              varchar(255)                           not null,
	Tag                   text                                   null,
	LastTimeRowUpdated    datetime default '2000-01-01 00:00:00' not null,
	LanguageGameObject_ID varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_LanguageGameObject_Language
	on languagegameobject (Language);

create or replace index I_LanguageGameObject_TranslationId
	on languagegameobject (TranslationId);

create or replace table languagemasterlevelstep
(
	TranslationId              varchar(255) not null,
	Text                       text         not null,
	Language                   varchar(255) not null,
	LanguageMasterLevelStep_ID varchar(255) not null
		primary key
)
	charset = latin1;

create or replace index Language
	on languagemasterlevelstep (Language);

create or replace index TranslationId
	on languagemasterlevelstep (TranslationId);

create or replace table languagenpc
(
	Name               text                                   null,
	Suffix             text                                   null,
	GuildName          text                                   null,
	ExamineArticle     text                                   null,
	MessageArticle     text                                   null,
	TranslationId      varchar(255)                           not null,
	Language           varchar(255)                           not null,
	Tag                text                                   null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	LanguageNPC_ID     varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_LanguageNPC_Language
	on languagenpc (Language);

create or replace index I_LanguageNPC_TranslationId
	on languagenpc (TranslationId);

create or replace table languagesystem
(
	Text               text                                   not null,
	TranslationId      varchar(255)                           not null,
	Language           varchar(255)                           not null,
	Tag                text                                   null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	LanguageSystem_ID  varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_LanguageSystem_Language
	on languagesystem (Language);

create or replace index I_LanguageSystem_TranslationId
	on languagesystem (TranslationId);

create or replace table languagesystemtext
(
	TranslationId         varchar(255) not null,
	Text                  text         not null,
	TranslationUnique     varchar(255) null,
	Language              varchar(255) not null,
	LanguageSystemText_ID varchar(255) not null
		primary key
)
	charset = latin1;

create or replace index Language
	on languagesystemtext (Language);

create or replace index TranslationId
	on languagesystemtext (TranslationId);

create or replace index TranslationUnique
	on languagesystemtext (TranslationUnique);

create or replace table languagezone
(
	Description        text                                   not null,
	ScreenDescription  text                                   not null,
	TranslationId      varchar(255)                           not null,
	Language           varchar(255)                           not null,
	Tag                text                                   null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	LanguageZone_ID    varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_LanguageZone_Language
	on languagezone (Language);

create or replace index I_LanguageZone_TranslationId
	on languagezone (TranslationId);

create or replace table linexspell
(
	LineName           varchar(255)                           not null,
	SpellID            int      default 0                     not null,
	Level              int      default 0                     not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	LineXSpell_ID      varchar(255)                           not null
		primary key,
	PackageID          text                                   null
)
	charset = utf8mb3;

create or replace index I_LineXSpell_LineName
	on linexspell (LineName);

create or replace table linkedfaction
(
	FactionID          int                                      not null,
	LinkedFactionID    int        default 0                     not null,
	IsFriend           tinyint(1) default 0                     not null,
	LinkedFaction_ID   varchar(255) charset utf8mb3             not null
		primary key,
	LastTimeRowUpdated datetime   default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table lootchangertemplate
(
	LootChangerTemplateName text charset utf8mb3                   not null,
	ItemsTemplatesRecvs     text charset utf8mb3                   not null,
	ItemsTemplatesGives     text charset utf8mb3                   not null,
	LootChangerTemplate_ID  varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated      datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table lootgenerator
(
	MobName            text charset utf8mb3                   null,
	MobGuild           text charset utf8mb3                   null,
	MobFaction         text charset utf8mb3                   null,
	RegionID           smallint unsigned                      not null,
	LootGeneratorClass text charset utf8mb3                   not null,
	ExclusivePriority  int                                    not null,
	LootGenerator_ID   varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table loototd
(
	MobName            varchar(100) charset utf8mb3           not null,
	ItemTemplateID     varchar(100) charset utf8mb3           not null,
	MinLevel           int                                    not null,
	LootOTD_ID         varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_LootOTD_ItemTemplateID
	on loototd (ItemTemplateID);

create or replace index I_LootOTD_MobName
	on loototd (MobName);

create or replace table loottemplate
(
	TemplateName       varchar(255) charset utf8mb3           not null,
	ItemTemplateID     text charset utf8mb3                   not null,
	Chance             int                                    not null,
	Count              int                                    not null,
	LootTemplate_ID    varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_LootTemplate_TemplateName
	on loottemplate (TemplateName);

create or replace table merchantitem
(
	MerchantItem_ID    varchar(255)                           not null
		primary key,
	ItemListID         varchar(255)                           not null,
	ItemTemplateID     text                                   not null,
	PageNumber         int      default 0                     not null,
	SlotPosition       int      default 0                     not null,
	PackageID          varchar(45)                            null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_MerchantItem_ItemListID
	on merchantitem (ItemListID);

create or replace index I_MerchantItem_PageNumber
	on merchantitem (PageNumber);

create or replace index I_MerchantItem_SlotPosition
	on merchantitem (SlotPosition);

create or replace table minotaurrelic
(
	relicSpell         int                                    not null,
	SpawnLocked        tinyint(1)                             not null,
	ProtectorClassType text                                   not null,
	relicTarget        text                                   not null,
	Name               text                                   not null,
	Model              smallint unsigned                      not null,
	SpawnX             int                                    not null,
	SpawnY             int                                    not null,
	SpawnZ             int                                    not null,
	SpawnHeading       int                                    not null,
	SpawnRegion        int                                    not null,
	Effect             int                                    not null,
	RelicID            int                                    not null
		primary key,
	Minotaurrelic_ID   varchar(255)                           null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	constraint U_Minotaurrelic_Minotaurrelic_ID
		unique (Minotaurrelic_ID)
)
	charset = utf8mb3;

create or replace table mob
(
	ClassType           text charset utf8mb3                           null,
	Name                varchar(255) charset utf8mb3                   not null,
	Guild               text charset utf8mb3                           null,
	X                   int                                            not null,
	Y                   int                                            not null,
	Z                   int                                            not null,
	Speed               int                                            not null,
	Heading             smallint unsigned                              not null,
	Region              smallint unsigned                              not null,
	Model               smallint unsigned                              not null,
	Size                tinyint unsigned                               not null,
	Strength            smallint         default 0                     not null,
	Constitution        smallint         default 0                     not null,
	Dexterity           smallint         default 0                     not null,
	Quickness           smallint         default 0                     not null,
	Intelligence        smallint         default 0                     not null,
	Piety               smallint         default 0                     not null,
	Empathy             smallint         default 0                     not null,
	Charisma            smallint         default 0                     not null,
	Level               tinyint unsigned                               not null,
	Realm               tinyint unsigned                               not null,
	EquipmentTemplateID text charset utf8mb3                           null,
	ItemsListTemplateID text charset utf8mb3                           null,
	NPCTemplateID       int              default 0                     not null,
	Race                int              default 0                     not null,
	Flags               int unsigned     default 0                     not null,
	AggroLevel          int              default 0                     not null,
	AggroRange          int              default 0                     not null,
	MeleeDamageType     int              default 0                     not null,
	RespawnInterval     int                                            not null,
	FactionID           int              default 0                     not null,
	BodyType            int              default 0                     not null,
	HouseNumber         int                                            not null,
	Brain               text charset utf8mb3                           null,
	PathID              text charset utf8mb3                           null,
	MaxDistance         int              default 0                     not null,
	OwnerID             varchar(255) charset utf8mb3                   not null,
	RoamingRange        int              default 0                     not null,
	IsCloakHoodUp       tinyint(1)       default 0                     not null,
	Gender              tinyint unsigned default 0                     not null,
	PackageID           text charset utf8mb3                           null,
	VisibleWeaponSlots  tinyint unsigned                               not null,
	Mob_ID              varchar(255) charset utf8mb3                   not null
		primary key,
	TranslationId       text charset utf8mb3                           null,
	Suffix              text charset utf8mb3                           null,
	ExamineArticle      text charset utf8mb3                           null,
	MessageArticle      text charset utf8mb3                           null,
	LastTimeRowUpdated  datetime         default '2000-01-01 00:00:00' not null
)
	charset = latin1
	row_format = DYNAMIC;

create or replace index I_Mob_HouseNumber
	on mob (HouseNumber);

create or replace index I_Mob_Name
	on mob (Name);

create or replace table mobdroptemplate
(
	ID                 bigint auto_increment
		primary key,
	MobName            varchar(255) charset utf8mb3           not null,
	LootTemplateName   varchar(255) charset utf8mb3           not null,
	DropCount          int                                    not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_MobDropTemplate_LootTemplateName
	on mobdroptemplate (LootTemplateName);

create or replace index I_MobDropTemplate_MobName
	on mobdroptemplate (MobName);

create or replace table mobxambientbehaviour
(
	MobXAmbientBehaviour_ID varchar(255) charset utf8mb3                    not null
		primary key,
	Source                  varchar(255) charset utf8mb3                    not null,
	`Trigger`               text charset utf8mb3                            not null,
	Emote                   smallint unsigned default 0                     not null,
	Text                    text charset utf8mb3                            not null,
	Chance                  smallint unsigned                               not null,
	Voice                   text charset utf8mb3                            null,
	LastTimeRowUpdated      datetime          default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_MobXAmbientBehaviour_Source
	on mobxambientbehaviour (Source);

create or replace table mobxlootchanger
(
	MobName                 text charset utf8mb3                   not null,
	LootChangerTemplateName text charset utf8mb3                   not null,
	DropCount               int                                    not null,
	MobXLootChanger_ID      varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated      datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table mobxloottemplate
(
	MobName             varchar(255) charset utf8mb3           not null,
	LootTemplateName    varchar(255) charset utf8mb3           not null,
	DropCount           int                                    not null,
	MobXLootTemplate_ID varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated  datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_MobXLootTemplate_LootTemplateName
	on mobxloottemplate (LootTemplateName);

create or replace index I_MobXLootTemplate_MobName
	on mobxloottemplate (MobName);

create or replace table mobxtrigger
(
	MobXTrigger_ID varchar(255) not null
		primary key,
	Name           text         not null,
	Type           text         not null,
	Action         text         not null,
	Text           text         not null
)
	charset = latin1;

create or replace table news
(
	CreationDate       datetime                                       not null,
	Type               tinyint unsigned                               not null,
	Realm              tinyint unsigned default 0                     not null,
	Text               text                                           not null,
	News_ID            varchar(255)                                   not null
		primary key,
	LastTimeRowUpdated datetime         default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace table npcequipment
(
	NPCEquipment_ID    varchar(255) default ''                    not null
		primary key,
	TemplateID         varchar(255)                               not null,
	Slot               int          default 0                     not null,
	Model              int          default 0                     not null,
	Color              int          default 0                     not null,
	Effect             int          default 0                     not null,
	Extension          int          default 0                     not null,
	PackageID          varchar(45)                                null,
	Emblem             int          default 0                     not null,
	LastTimeRowUpdated datetime     default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_NPCEquipment_TemplateID
	on npcequipment (TemplateID);

create or replace table npctemplate
(
	NpcTemplate_ID      varchar(255)      default ''                    not null
		primary key,
	TemplateId          int               default 0                     not null,
	Name                text                                            not null,
	GuildName           text                                            null,
	Model               text                                            not null,
	Size                text                                            not null,
	MaxSpeed            smallint          default 0                     not null,
	EquipmentTemplateID text                                            null,
	Flags               smallint unsigned default 0                     not null,
	MeleeDamageType     tinyint unsigned  default 0                     not null,
	ParryChance         int               default 0                     not null,
	EvadeChance         int               default 0                     not null,
	BlockChance         int               default 0                     not null,
	LeftHandSwingChance int               default 0                     not null,
	Spells              text                                            not null,
	Styles              text                                            null,
	Strength            smallint          default 0                     not null,
	Constitution        smallint          default 0                     not null,
	Dexterity           smallint          default 0                     not null,
	Quickness           smallint          default 0                     not null,
	Intelligence        smallint          default 0                     not null,
	Piety               smallint          default 0                     not null,
	Charisma            smallint          default 0                     not null,
	Empathy             smallint          default 0                     not null,
	Abilities           text                                            null,
	AggroLevel          tinyint unsigned  default 0                     not null,
	AggroRange          int               default 0                     not null,
	ClassType           text                                            not null,
	Level               text                                            not null,
	Race                int               default 0                     not null,
	BodyType            int               default 0                     not null,
	MaxDistance         int               default 0                     not null,
	TetherRange         int               default 0                     not null,
	PackageID           text                                            null,
	VisibleWeaponSlots  tinyint unsigned                                not null,
	ReplaceMobValues    tinyint(1)        default 0                     not null,
	ItemsListTemplateID text                                            null,
	TranslationId       text                                            null,
	Suffix              text                                            null,
	ExamineArticle      text                                            null,
	MessageArticle      text                                            null,
	Gender              smallint unsigned default 0                     not null,
	LastTimeRowUpdated  datetime          default '2000-01-01 00:00:00' not null,
	WeaponDps           int               default 0                     not null,
	WeaponSpd           int               default 0                     not null,
	ArmorFactor         int               default 0                     not null,
	ArmorAbsorb         int               default 0                     not null,
	BreamorFaction      int               default 0                     not null
)
	charset = utf8mb3
	row_format = DYNAMIC;

create or replace index I_NpcTemplate_TemplateId
	on npctemplate (TemplateId);

create or replace table path
(
	PathID             varchar(255) charset utf8mb3                    not null,
	PathType           int                                             not null,
	RegionID           smallint unsigned default 0                     not null,
	Path_ID            varchar(255) charset utf8mb3                    not null
		primary key,
	LastTimeRowUpdated datetime          default '2000-01-01 00:00:00' not null,
	constraint U_Path_PathID
		unique (PathID)
)
	charset = latin1;

create or replace table pathpoints
(
	PathID             varchar(255) charset utf8mb3           not null,
	Step               int                                    not null,
	X                  int                                    not null,
	Y                  int                                    not null,
	Z                  int                                    not null,
	MaxSpeed           int      default 0                     not null,
	WaitTime           int      default 0                     not null,
	PathPoints_ID      varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_PathPoints_PathID
	on pathpoints (PathID);

create or replace table playerboats
(
	BoatID             text                                   not null,
	BoatOwner          text                                   not null,
	BoatName           varchar(255)                           not null
		primary key,
	BoatModel          smallint unsigned                      not null,
	BoatMaxSpeedBase   smallint                               not null,
	PlayerBoats_ID     varchar(255)                           null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	constraint U_PlayerBoats_PlayerBoats_ID
		unique (PlayerBoats_ID)
)
	charset = utf8mb3;

create or replace table playerxeffect
(
	IsHandler          tinyint(1) default 0                     not null,
	Var6               int        default 0                     not null,
	Var5               int        default 0                     not null,
	Var4               int        default 0                     not null,
	Var3               int        default 0                     not null,
	Var2               int        default 0                     not null,
	Var1               int        default 0                     not null,
	Duration           int        default 0                     not null,
	EffectType         text                                     null,
	SpellLine          text                                     null,
	ChardID            varchar(255)                             not null,
	PlayerXEffect_ID   varchar(255)                             not null
		primary key,
	LastTimeRowUpdated datetime   default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_PlayerXEffect_ChardID
	on playerxeffect (ChardID);

create or replace table prisoner
(
	PlayerId           varchar(255) charset utf8mb3           not null
		primary key,
	Name               text charset utf8mb3                   not null,
	Cost               int                                    not null,
	Sortie             datetime default '2000-01-01 00:00:00' not null,
	RP                 tinyint(1)                             not null,
	Raison             text charset utf8mb3                   not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	Prisoner_ID        varchar(255) charset utf8mb3           null,
	constraint U_Prisoner_Prisoner_ID
		unique (Prisoner_ID)
)
	charset = latin1;

create or replace table pvpkillslog
(
	ID                 bigint auto_increment
		primary key,
	DateKilled         datetime   default '2000-01-01 00:00:00' not null,
	KilledName         text charset utf8mb3                     not null,
	KillerName         text charset utf8mb3                     not null,
	KillerIP           text charset utf8mb3                     not null,
	KilledIP           text charset utf8mb3                     not null,
	KilledRealm        text charset utf8mb3                     not null,
	KillerRealm        text charset utf8mb3                     not null,
	RPReward           int                                      not null,
	SameIP             tinyint unsigned                         not null,
	RegionName         text charset utf8mb3                     null,
	IsInstance         tinyint(1) default 0                     not null,
	LastTimeRowUpdated datetime   default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table quest
(
	Name                   text                                   not null,
	Step                   int                                    not null,
	Character_ID           varchar(255)                           not null,
	CustomPropertiesString text                                   not null,
	Quest_ID               varchar(255)                           not null
		primary key,
	LastTimeRowUpdated     datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_Quest_Character_ID
	on quest (Character_ID);

create or replace table race
(
	ID                 int      default 0                     not null,
	Name               varchar(255)                           not null,
	ResistBody         tinyint(3)                             not null,
	ResistCold         tinyint(3)                             not null,
	ResistCrush        tinyint(3)                             not null,
	ResistEnergy       tinyint(3)                             not null,
	ResistHeat         tinyint(3)                             not null,
	ResistMatter       tinyint(3)                             not null,
	ResistNatural      tinyint(3)                             not null,
	ResistSlash        tinyint(3)                             not null,
	ResistSpirit       tinyint(3)                             not null,
	ResistThrust       tinyint(3)                             not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	Race_ID            varchar(255)                           not null
		primary key,
	constraint U_Race_ID
		unique (ID),
	constraint U_Race_Name
		unique (Name)
)
	charset = utf8mb3;

create or replace table regions
(
	RegionID           smallint unsigned                      not null
		primary key,
	Name               text charset utf8mb3                   not null,
	Description        text charset utf8mb3                   not null,
	IP                 text charset utf8mb3                   not null,
	Port               smallint unsigned                      not null,
	Expansion          int                                    not null,
	HousingEnabled     tinyint(1)                             not null,
	DivingEnabled      tinyint(1)                             not null,
	WaterLevel         int                                    not null,
	Regions_ID         varchar(255) charset utf8mb3           null,
	ClassType          varchar(200) charset utf8mb3           not null,
	IsFrontier         tinyint(1)                             not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	constraint U_Regions_Regions_ID
		unique (Regions_ID)
)
	charset = latin1;

create or replace table relic
(
	RelicID            int                                    not null
		primary key,
	Region             int                                    not null,
	X                  int                                    not null,
	Y                  int                                    not null,
	Z                  int                                    not null,
	Heading            int                                    not null,
	Realm              int                                    not null,
	OriginalRealm      int                                    not null,
	relicType          int                                    not null,
	Relic_ID           varchar(255)                           null,
	LastRealm          int                                    not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	constraint U_Relic_Relic_ID
		unique (Relic_ID)
)
	charset = utf8mb3;

create table rtinformation
(
    Id                 bigint auto_increment
        primary key,
    PlayerName         text collate utf8mb3_general_ci        not null,
    X                  int                                    not null,
    Y                  int                                    not null,
    Region             int                                    not null,
    LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
    charset = latin1;

create index I_RTInformation_Region
    on dol.rtinformation (Region);

create or replace table rvrplayer
(
	PlayerID           varchar(255) charset utf8mb3           not null
		primary key,
	GuildID            text charset utf8mb3                   not null,
	GuildRank          int      default 0                     not null,
	OldX               int                                    not null,
	OldY               int                                    not null,
	OldZ               int                                    not null,
	OldHeading         int                                    not null,
	OldRegion          int                                    not null,
	OldBindX           int                                    not null,
	OldBindY           int                                    not null,
	OldBindZ           int                                    not null,
	OldBindHeading     int                                    not null,
	OldBindRegion      int                                    not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	RvrPlayer_ID       varchar(255) charset utf8mb3           null,
	constraint U_RvrPlayer_RvrPlayer_ID
		unique (RvrPlayer_ID)
)
	charset = latin1;

create or replace table salvage
(
	Salvage_ID         varchar(255) default ''                    not null
		primary key,
	ObjectType         int          default 0                     not null,
	SalvageLevel       int          default 0                     not null,
	Id_nb              text                                       not null,
	Realm              int                                        not null,
	LastTimeRowUpdated datetime     default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_Salvage_ObjectType
	on salvage (ObjectType);

create or replace index I_Salvage_Realm
	on salvage (Realm);

create or replace index I_Salvage_SalvageLevel
	on salvage (SalvageLevel);

create or replace table salvageyield
(
	ID                 int auto_increment
		primary key,
	ObjectType         int      default 0                     not null,
	SalvageLevel       int      default 0                     not null,
	MaterialId_nb      text charset utf8mb3                   not null,
	Count              int      default 0                     not null,
	Realm              int      default 0                     not null,
	PackageID          text charset utf8mb3                   null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_SalvageYield_ObjectType
	on salvageyield (ObjectType);

create or replace index I_SalvageYield_Realm
	on salvageyield (Realm);

create or replace index I_SalvageYield_SalvageLevel
	on salvageyield (SalvageLevel);

create or replace table serverproperty
(
	Category           text charset utf8mb3                   not null,
	`Key`              varchar(255) charset utf8mb3           not null
		primary key,
	Description        text charset utf8mb3                   not null,
	DefaultValue       text charset utf8mb3                   not null,
	Value              text charset utf8mb3                   not null,
	ServerProperty_ID  varchar(255) charset utf8mb3           null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	constraint U_ServerProperty_ServerProperty_ID
		unique (ServerProperty_ID)
)
	charset = latin1;

create or replace table serverproperty_category
(
	BaseCategory               text charset utf8mb3                   not null,
	ParentCategory             text charset utf8mb3                   null,
	DisplayName                text charset utf8mb3                   not null,
	serverproperty_category_ID varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated         datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table serverstats
(
	StatDate           datetime default '2000-01-01 00:00:00' not null,
	Clients            int                                    not null,
	CPU                double                                 not null,
	Upload             int                                    not null,
	Download           int                                    not null,
	Memory             bigint                                 not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	serverstats_ID     varchar(255) charset utf8mb3           not null
		primary key
)
	charset = latin1;

create or replace table singlepermission
(
	PlayerID            varchar(255)                           not null,
	Command             varchar(255)                           not null,
	SinglePermission_ID varchar(255)                           not null
		primary key,
	LastTimeRowUpdated  datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_SinglePermission_Command
	on singlepermission (Command);

create or replace index I_SinglePermission_PlayerID
	on singlepermission (PlayerID);

create or replace table specialization
(
	SpecializationID   int auto_increment
		primary key,
	KeyName            varchar(100)                                    not null,
	Name               varchar(255)                                    not null,
	Icon               smallint unsigned default 0                     not null,
	Description        text                                            null,
	Implementation     varchar(255)                                    null,
	LastTimeRowUpdated datetime          default '2000-01-01 00:00:00' not null,
	constraint U_Specialization_KeyName
		unique (KeyName)
)
	charset = utf8mb3;

create or replace table specxability
(
	SpecXabilityID     int auto_increment
		primary key,
	Spec               varchar(100)                           not null,
	SpecLevel          int      default 0                     not null,
	AbilityKey         varchar(100)                           not null,
	AbilityLevel       int      default 0                     not null,
	ClassId            int      default 0                     not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_SpecXAbility_AbilityKey
	on specxability (AbilityKey);

create or replace index I_SpecXAbility_Spec
	on specxability (Spec);

create or replace table spell
(
	SpellID               int               default 0                     not null,
	ClientEffect          int               default 0                     not null,
	Icon                  int               default 0                     not null,
	Name                  text                                            not null,
	Description           text                                            not null,
	Target                text                                            not null,
	`Range`               int               default 0                     not null,
	Power                 int               default 0                     not null,
	CastTime              double            default 0                     not null,
	Damage                double            default 0                     not null,
	DamageType            int               default 0                     not null,
	Type                  text                                            null,
	Duration              int               default 0                     not null,
	Frequency             int               default 0                     not null,
	Pulse                 int               default 0                     not null,
	PulsePower            int               default 0                     not null,
	Radius                int               default 0                     not null,
	RecastDelay           int               default 0                     not null,
	ResurrectHealth       int               default 0                     not null,
	ResurrectMana         int               default 0                     not null,
	Value                 double            default 0                     not null,
	Concentration         int               default 0                     not null,
	LifeDrainReturn       int               default 0                     not null,
	AmnesiaChance         int               default 0                     not null,
	Message1              text                                            null,
	Message2              text                                            null,
	Message3              text                                            null,
	Message4              text                                            null,
	InstrumentRequirement int               default 0                     not null,
	SpellGroup            int               default 0                     not null,
	EffectGroup           int               default 0                     not null,
	SubSpellID            int               default 0                     not null,
	MoveCast              tinyint(1)        default 0                     not null,
	Uninterruptible       tinyint(1)        default 0                     not null,
	IsFocus               tinyint(1)        default 0                     not null,
	SharedTimerGroup      int               default 0                     not null,
	IsPrimary             tinyint(1)        default 0                     not null,
	IsSecondary           tinyint(1)        default 0                     not null,
	AllowBolt             tinyint(1)        default 0                     not null,
	PackageID             text                                            null,
	TooltipId             smallint unsigned default 0                     not null,
	LastTimeRowUpdated    datetime          default '2000-01-01 00:00:00' not null,
	Spell_ID              varchar(255)                                    not null
		primary key,
	constraint U_Spell_SpellID
		unique (SpellID)
)
	charset = utf8mb3;

create or replace table spellline
(
	SpellLineID        int auto_increment
		primary key,
	KeyName            varchar(255)                             not null,
	Name               varchar(255)                             null,
	Spec               varchar(100)                             null,
	IsBaseLine         tinyint(1) default 0                     not null,
	ClassIDHint        int        default 0                     not null,
	LastTimeRowUpdated datetime   default '2000-01-01 00:00:00' not null,
	constraint U_SpellLine_KeyName
		unique (KeyName)
)
	charset = utf8mb3;

create or replace index I_SpellLine_Spec
	on spellline (Spec);

create or replace table spellxcustomvalues
(
	SpellID            int      default 0                     not null,
	KeyName            varchar(100)                           not null,
	Value              varchar(255)                           null,
	CustomParamID      int auto_increment
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3;

create or replace index I_SpellXCustomValues_KeyName
	on spellxcustomvalues (KeyName);

create or replace index I_SpellXCustomValues_SpellID
	on spellxcustomvalues (SpellID);

create or replace table starterequipment
(
	FreeItem_ID         varchar(255)                           not null,
	Class               text                                   not null,
	TemplateID          varchar(255)                           not null,
	StarterEquipment_ID varchar(255)                           not null,
	LastTimeRowUpdated  datetime default '2000-01-01 00:00:00' not null,
	StarterEquipmentID  int auto_increment
		primary key
)
	charset = utf8mb3;

create or replace table startuplocation
(
	StartupLoc_ID      int auto_increment
		primary key,
	XPos               int                                    not null,
	YPos               int                                    not null,
	ZPos               int                                    not null,
	Heading            int                                    not null,
	Region             int                                    not null,
	ClassIDs           text                                   not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	MinVersion         int      default 0                     not null,
	RealmID            int      default 0                     not null,
	RaceID             int      default 0                     not null,
	ClassID            int      default 0                     not null,
	ClientRegionID     int      default 0                     not null
)
	charset = latin1;

create or replace table style
(
	StyleID                 int auto_increment
		primary key,
	ID                      int        default 0                     not null,
	ClassId                 int        default 0                     not null,
	Name                    varchar(255)                             not null,
	SpecKeyName             varchar(100)                             not null,
	SpecLevelRequirement    int        default 0                     not null,
	Icon                    int        default 0                     not null,
	EnduranceCost           int        default 0                     not null,
	StealthRequirement      tinyint(1) default 0                     not null,
	OpeningRequirementType  int        default 0                     not null,
	OpeningRequirementValue int        default 0                     not null,
	AttackResultRequirement int        default 0                     not null,
	WeaponTypeRequirement   int        default 0                     not null,
	GrowthOffset            double     default 0                     not null,
	GrowthRate              double     default 0                     not null,
	BonusToHit              int        default 0                     not null,
	BonusToDefense          int        default 0                     not null,
	TwoHandAnimation        int        default 0                     not null,
	RandomProc              tinyint(1) default 0                     not null,
	ArmorHitLocation        int        default 0                     not null,
	LastTimeRowUpdated      datetime   default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3
	row_format = DYNAMIC;

create or replace index I_Style_SpecKeyName
	on style (SpecKeyName);

create or replace table stylexspell
(
	SpellID            int      default 0                     not null,
	ClassID            int      default 0                     not null,
	StyleID            int      default 0                     not null,
	Chance             int      default 0                     not null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null,
	StyleXSpell_ID     varchar(255)                           not null
		primary key
)
	charset = utf8mb3;

create or replace index I_StyleXSpell_StyleID
	on stylexspell (StyleID);

create or replace table task
(
	Character_ID           varchar(255)                           not null
		primary key,
	TimeOut                datetime                               null,
	TaskType               text                                   null,
	TasksDone              int      default 0                     not null,
	CustomPropertiesString text                                   null,
	Task_ID                varchar(255)                           null,
	LastTimeRowUpdated     datetime default '2000-01-01 00:00:00' not null,
	constraint U_Task_Task_ID
		unique (Task_ID)
)
	charset = utf8mb3;

create or replace table teleport
(
	Type               text charset utf8mb3                   not null,
	TeleportID         varchar(255) charset utf8mb3           not null,
	Realm              int                                    not null,
	RegionID           int                                    not null,
	X                  int                                    not null,
	Y                  int                                    not null,
	Z                  int                                    not null,
	Heading            int                                    not null,
	Teleport_ID        varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_Teleport_TeleportID
	on teleport (TeleportID);

create or replace table teleportnpc
(
	MobID              text charset utf8mb3                   not null,
	Text               text charset utf8mb3                   not null,
	Text_Refuse        text charset utf8mb3                   not null,
	JumpPosition       text charset utf8mb3                   not null,
	Level              tinyint unsigned                       not null,
	`Range`            int                                    not null,
	TeleportNPC_ID     varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table textnpc
(
	MobID              text charset utf8mb3                   not null,
	MobName            text charset utf8mb3                   not null,
	MobRealm           tinyint unsigned                       not null,
	Text               text charset utf8mb3                   not null,
	Reponse            text charset utf8mb3                   null,
	ReponseSpell       text charset utf8mb3                   null,
	ReponseEmote       text charset utf8mb3                   null,
	RandomPhraseEmote  text charset utf8mb3                   null,
	PhraseInterval     int                                    null,
	`Condition`        text charset utf8mb3                   null,
	TextNPC_ID         varchar(255) charset utf8mb3           not null
		primary key,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace table worldobject
(
	ClassType          text                                   not null,
	Name               text charset utf8mb3                   not null,
	X                  int                                    not null,
	Y                  int                                    not null,
	Z                  int                                    not null,
	Heading            smallint unsigned                      not null,
	Region             smallint unsigned                      not null,
	Model              smallint unsigned                      not null,
	Emblem             int                                    not null,
	Realm              tinyint unsigned                       not null,
	WorldObject_ID     varchar(255) charset utf8mb3           not null
		primary key,
	RespawnInterval    int      default 0                     not null,
	TranslationId      text charset utf8mb3                   null,
	ExamineArticle     text charset utf8mb3                   null,
	LastTimeRowUpdated datetime default '2000-01-01 00:00:00' not null
)
	charset = latin1;

create or replace index I_WorldObject_Region
	on worldobject (Region);

create or replace table zonepoint
(
	ZonePoint_ID       varchar(255)      default ''                    not null
		primary key,
	Id                 smallint unsigned default 0                     not null,
	X                  int                                             null,
	Y                  int                                             null,
	Z                  int                                             null,
	Region             smallint unsigned                               null,
	Realm              smallint unsigned default 0                     not null,
	Heading            smallint unsigned                               null,
	ClassType          text                                            null,
	TargetX            int               default 0                     not null,
	TargetY            int               default 0                     not null,
	TargetZ            int               default 0                     not null,
	TargetRegion       smallint unsigned default 0                     not null,
	TargetHeading      smallint unsigned default 0                     not null,
	SourceX            int               default 0                     not null,
	SourceY            int               default 0                     not null,
	SourceZ            int               default 0                     not null,
	SourceRegion       smallint unsigned default 0                     not null,
	LastTimeRowUpdated datetime          default '2000-01-01 00:00:00' not null
)
	charset = utf8mb3
	row_format = DYNAMIC;

create or replace index I_ZonePoint_Id
	on zonepoint (Id);

create or replace index I_ZonePoint_Realm
	on zonepoint (Realm);

create or replace table zones
(
	Zones_ID           varchar(255) charset utf8mb3                   null,
	ZoneID             int                                            not null
		primary key,
	RegionID           smallint unsigned                              not null,
	Name               text charset utf8mb3                           not null,
	IsLava             tinyint(1)                                     not null,
	WaterLevel         int                                            not null,
	OffsetY            int                                            not null,
	OffsetX            int                                            not null,
	Width              int                                            not null,
	Height             int                                            not null,
	Experience         int              default 0                     not null,
	Realmpoints        int              default 0                     not null,
	Bountypoints       int              default 0                     not null,
	Coin               int              default 0                     not null,
	DivingFlag         tinyint unsigned                               not null,
	Realm              tinyint unsigned default 0                     not null,
	LastTimeRowUpdated datetime         default '2000-01-01 00:00:00' not null,
	constraint U_Zones_Zones_ID
		unique (Zones_ID)
)
	charset = latin1;

create or replace index I_Zones_RegionID
	on zones (RegionID);
