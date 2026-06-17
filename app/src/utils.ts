import { toSQL } from "@/dbconnection";

/** Format a html string with template string, usage : (html`<b>${account.first_name}</b>`) */
export function html(html: TemplateStringsArray, ...values: unknown[]): string {
	let result = "";
	for (let i = 0; i < values.length; ++i) {
		result += html[i];

		const value = values[i];
		if (isRawText(value)) result += value.text;
		else
			result += String(value).replace(/./g, (char) =>
				/^[a-z0-9():.,\[\]\\/%@_{} -]$/i.test(char)
					? char
					: `&#${char.charCodeAt(0)};`
			);
	}
	if (html.length > values.length) result += html[html.length - 1];
	return result;
}

/** Format a uri with template string, usage : (uri `/account/${account.id}`) */
export function uri(uri: TemplateStringsArray, ...values: unknown[]): string {
	let result = "";
	for (let i = 0; i < values.length; ++i) {
		result += uri[i];

		const value = values[i];
		if (isRawText(value)) result += value.text;
		else result += encodeURIComponent(String(value));
	}
	if (uri.length > values.length) result += uri[uri.length - 1];
	return result;
}

/** Format a sql query with template string, usage : (sql`SELECT name FROM account WHERE id = ${account.id}`) */
export function sql(query: TemplateStringsArray, ...values: unknown[]): string {
	let result = "";
	for (let i = 0; i < values.length; ++i) {
		result += query[i];

		const value = values[i];
		if (isRawText(value)) result += value.text;
		else result += toSQL(value);
	}
	if (query.length > values.length) result += query[query.length - 1];
	return result;
}

/**
 * Don't escape a template var
 * Example: uri`/api/${raw(pathName)}?query=${query}`
 */
export function raw(text: string) {
	return new RawText(text);
}

export class RawText {
	get text() {
		return this._text;
	}

	constructor(private readonly _text: string) {}
}

export function isRawText(value: unknown): value is RawText {
	return value instanceof RawText;
}

export function humanTimeSec(seconds: number) {
	const parts: string[] = [];
	if (seconds > 24 * 3600) {
		const nb = Math.floor(seconds / (24 * 3600));
		parts.push(nb + "j");
		seconds -= nb * 24 * 3600;
	}
	if (parts.length || seconds > 3600) {
		const nb = Math.floor(seconds / 3600);
		parts.push(nb + "h");
		seconds -= nb * 3600;
	}
	if (parts.length || seconds > 60) {
		const nb = Math.floor(seconds / 60);
		parts.push(nb + "m");
		seconds -= nb * 60;
	}
	parts.push(seconds + "s");
	return parts.join(" ");
}
