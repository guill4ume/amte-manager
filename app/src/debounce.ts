export interface IRewriteFuncOption {
	timer?: number;
	lastArgs: any[];
}

export interface IRewriteFunc {
	(...rewriteArgs: any[]): void;
	options: IRewriteFuncOption;
}

export function debounce(target: any, name: string, descriptor?: PropertyDescriptor): void;
export function debounce(debounceTime: number, leading?: boolean): ((target: any, name: string, descriptor?: PropertyDescriptor) => void);
export function debounce<F extends Function>(func: F, debounceTime?: number, leading?: boolean): F;
export function debounce(...opts: any[]): any {
	let debounceTime = 200;
	let leading = false;

	if (opts.length && (typeof (opts[0]) === "number" || (typeof (opts[0]) === "object" && opts[0].leading !== undefined))) {
		if (typeof (opts[0]) === "number")
			debounceTime = opts[0];

		let options;
		if (typeof (opts[0]) === "object" && opts[0].leading !== undefined)
			options = opts[0];

		if (opts.length > 1 && typeof (opts[1]) === "object" && opts[1].leading !== undefined)
			options = opts[1];
		if (options)
			leading = options.leading;

		return (target: any, name: string, descriptor?: PropertyDescriptor) => _createDebounce(debounceTime, leading, target, name, descriptor);
	}

	// function
	if (opts.length && typeof (opts[0]) === "function" && (typeof (opts[1]) === "undefined" || typeof (opts[1]) === "number")) {
		const func: Function = opts[0];
		debounceTime = opts[1] ?? debounceTime;
		leading = opts[2] ?? leading;
		return _getWrapper(debounceTime, leading, func);
	}

	return _createDebounce(debounceTime, leading, opts[0], opts[1], opts[2]);
}

export function cancel(func: IRewriteFunc) {
	if (func && func.options && func.options.timer) {
		clearTimeout(func.options.timer);
	}
}

function _getWrapper(debounceTime: number, leading: boolean, originalMethod: Function, that?: Function) {
	const options: IRewriteFuncOption = {
		timer: undefined,
		lastArgs: []
	};

	let rewriteFunc = <IRewriteFunc>function (this: any, ...rewriteArgs) {
		options.lastArgs = rewriteArgs;

		if (options.timer)
			clearTimeout(options.timer);
		else if (leading)
			originalMethod.apply(this, options.lastArgs);

		options.timer = <any>setTimeout(() => {
			if (!leading)
				originalMethod.apply(this, options.lastArgs);
			options.timer = undefined;
		}, debounceTime);
	};

	if (that) {
		rewriteFunc = rewriteFunc.bind(that);
	}

	rewriteFunc.options = options;

	return rewriteFunc;
}

function _defineProperty(debounceTime: number, leading: boolean, target: any, name: string) {
	let wrapperFunc: any;

	Object.defineProperty(target, name, {
		configurable: true,
		enumerable: false,
		get() {
			return wrapperFunc;
		},
		set(value) {
			wrapperFunc = _getWrapper(debounceTime, leading, value, this);
		}
	});
}

function _modifyDescriptor(debounceTime: number, leading: boolean, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	descriptor.value = _getWrapper(debounceTime, leading, originalMethod);
	return descriptor;
}

function _createDebounce(debounceTime: number, leading: boolean, target: any, name: string, descriptor?: PropertyDescriptor) {
	if (!target)
		throw new Error("function applied debounce decorator should be a method");
	if (!name)
		throw new Error("method applied debounce decorator should have valid name");

	descriptor = descriptor !== undefined ? descriptor : Object.getOwnPropertyDescriptor(target, name);

	if (descriptor)
		return _modifyDescriptor(debounceTime, leading, descriptor);

	// property method has no descriptor to return;
	_defineProperty(debounceTime, leading, target, name);
	return undefined;
}
