import axios from "axios";

export class DBConnection {
	public showLoginForm: () => Promise<boolean> = () => Promise.resolve(false);

	constructor(public url: string) { }

	async login(login: string, password: string): Promise<{ name: string; privLevel: number }> {
		const resp = await axios({
			url: this.url + "/login",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({
				login,
				password,
			}),
			withCredentials: true,
		});
		if (resp.data.error) {
			throw new Error(resp.data.error);
		}
		return resp.data;
	}

	async logout() {
		await axios({
			url: this.url + "/logout",
			method: "GET",
			params: { disconnect: "true" },
			withCredentials: true,
		});
	}

	async checkLoggedIn(): Promise<{ name: string; privLevel: number } | undefined> {
		const resp = await axios({
			method: "GET",
			url: this.url + "/login",
			withCredentials: true,
		});
		const user = resp.data;
		return user.ok === false ? undefined : user;
	}

	async select(options: {
		table: string;
		fields?: string | string[];
		where?: string;
		groupby?: string;
		orderby?: string | string[];
		offset?: number;
		limit?: number | string;
		action?: string;
	}): Promise<[any[], number]> {
		if (!options.fields) options.fields = "*";
		if (Array.isArray(options.fields)) options.fields = options.fields.join(",");

		if (!options.where) options.where = "1";

		if (Array.isArray(options.orderby)) options.orderby = options.orderby.join(",");

		if (typeof options.limit === "number" && options.limit < 0) options.limit = "10000000";
		if (options.offset && options.limit) options.limit = `${options.offset}, ${options.limit}`;
		else if (!options.limit) options.limit = 50;

		if (typeof options.limit === "number") options.limit = options.limit.toString();
		options.action = "SELECT";

		const resp = await axios({
			url: this.url + "/db/query",
			method: "POST",
			withCredentials: true,
			params: {
				action: "SELECT",
				table: options.table,
			},
			data: options,
		});
		if (resp.data.login === false) {
			if (await this.showLoginForm()) return this.select(options);
			throw new Error("not logged");
		}
		if (resp.data.error) throw new Error(resp.data.error);
		return [resp.data.content, resp.data.contentCount | 0];
	}

	async update(
		table: string,
		data: { [key: string]: number | string | boolean | undefined | null },
		where: string
	): Promise<number> {
		const upfields = Array.from(Object.keys(data))
			.map((key) => `\`${key}\`=${toSQL(data[key])}`)
			.join(",");
		const resp = await axios({
			url: this.url + "/db/query",
			method: "POST",
			withCredentials: true,
			params: {
				action: "UPDATE",
			},
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({
				table,
				upfields,
				where,
			}),
		});
		if (resp.data.login === false) {
			if (await this.showLoginForm()) return this.update(table, data, where);
			throw new Error("not logged");
		}
		if (resp.data.error) throw new Error(resp.data.error);
		return resp.data.contentCount;
	}

	async insert(table: string, data: { [key: string]: number | string | boolean | undefined | null }): Promise<number> {
		const fields = Array.from(Object.keys(data));
		const resp = await axios({
			url: this.url + "/db/query",
			method: "POST",
			withCredentials: true,
			params: {
				action: "INSERT",
			},
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({
				table,
				fields: fields.join(","),
				values: fields.map((f) => toSQL(data[f])).join(","),
			}),
		});
		if (resp.data.login === false) {
			if (await this.showLoginForm()) return this.insert(table, data);
			throw new Error("not logged");
		}
		if (resp.data.error) throw new Error(resp.data.error);
		return resp.data.contentCount;
	}

	async delete(table: string, where: string, limit = 1): Promise<[any, number]> {
		const resp = await axios({
			url: this.url + "/db/query",
			method: "POST",
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				action: "DELETE",
				table,
				where,
				limit: limit > 0 ? String(limit) : undefined,
			},
		});
		if (resp.data.login === false) {
			if (await this.showLoginForm()) return this.delete(table, where, limit);
			throw new Error("not logged");
		}
		if (resp.data.error) throw new Error(resp.data.error);
		return [resp.data.content, resp.data.contentCount | 0];
	}

	async selectRaw(raw: string): Promise<any> {
		const resp = await axios({
			url: this.url + "/db/query",
			method: "POST",
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				action: "raw", table: "__", raw
			},
		});
		if (resp.data.login === false) {
			if (await this.showLoginForm()) return this.selectRaw(raw);
			throw new Error("not logged");
		}
		if (resp.data.error) throw new Error(resp.data.error);
		return [resp.data.content, resp.data.contentCount | 0];
	}
}

export function toSQL(value: any) {
	if (value === null || value === undefined) return "NULL";
	switch (typeof value) {
		case "function":
		case "object":
		case "symbol":
			throw new Error(`can't convert ${value} to SQL value`);
		case "boolean":
			return value ? "1" : "0";
		case "bigint":
		case "number":
			return String(value);
		case "string":
			return `'${value.replace(/'/g, "''").replace(/\\/g, "\\\\")}'`;
		case "undefined":
			return "NULL";
	}
	throw new Error(`can't convert ${value} to SQL value`);
}
