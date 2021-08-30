import { useState } from "react";
import React from "react";
import Code from './assets/code-brackets.svg';
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
	throw new Error("value should be never");
}

export interface CounterProps {
	/**
	 * Background of the counter
	 */
	background: string;
	size: "SMALL" | "LARGE",
	unit: "EUR" | "CZK"
}

export function Counter(
	{
		unit,
		size,
		background = "#d8ecd6",
	}: CounterProps) {
	let [counter, setCounter] = useState(10);
	return (
		<div style={{backgroundColor: background, fontSize: size === "SMALL" ? "12px" : "20px"}}>
			<img src={Code} alt="code" /> Counter: {counter} {unit}<br/>
			<a onClick={() => setCounter(counter + 1)}>INC</a>
		</div>
	)
}