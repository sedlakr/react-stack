export enum Operation {
	Add
}

export function count(a: number, b: number, op: Operation): number {
	switch (op) {
		case Operation.Add:
			return a + b;
		default:
			assertNever(op);
	}
}

export function assertNever(val: never): never {
	console.error(val);
	throw new Error("value should be never");
}