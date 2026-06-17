export interface GuildRank {
	GuildID: string,
	GuildRank_ID: string, // Primary Key

	Title: number,
	RankLevel: number, // tinyint(3)
	Alli: number, // tinyint(1)
	Emblem: number, // tinyint(1)
	Buff: number, // tinyint(1)
	GcHear: number, // tinyint(1)
	GcSpeak: number, // tinyint(1)
	OcHear: number, // tinyint(1)
	OcSpeak: number, // tinyint(1)
	AcHear: number, // tinyint(1)
	AcSpeak: number, // tinyint(1)
	Invite: number, // tinyint(1)
	Promote: number, // tinyint(1)
	Remove: number, // tinyint(1)
	View: number, // tinyint(1)
	Claim: number, // tinyint(1)
	Upgrade: number, // tinyint(1)
	Release: number, // tinyint(1)
	Dues: number, // tinyint(1)
	Withdraw: number, // tinyint(1)
	LastTimeRowUpdate: string, // datetime
}
