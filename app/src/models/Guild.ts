export interface Guild {
	GuildID: string, // Unique key
	Guild_ID: string, // Primary key
	GuildName: string,
	Motd: string,
	Omotd: string, // officier motd
	Realm: number,

	AllianceId: string,
	Emblem: number,
	RealmPoints: number,
	BountyPoints: number,

	WebPage: string,
	Email: string,
	GuildBanner: number, // bool?
	GuildBannerLostTime: Date,
	GuildDues: boolean,
	GuildBank: number,
	GuildDuesPercent: number,
	GuildHouse: number // bool?
	GuildHouseNumber: number,

	GuildLevel: number,
	BonusType: number,
	MeritPoints: number,
}
