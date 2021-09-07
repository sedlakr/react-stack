import { useState } from "react";
import React from "react";
import Code from "./assets/code-brackets.svg";
import {assertNever} from 'react-stack-framework/utils/assert';
export enum Operation {
  Add,
}

export function count(a: number, b: number, op: Operation): number {
  switch (op) {
    case Operation.Add:
      return a + b;
    default:
      assertNever(op);
  }
}

export interface CounterProps {
  /**
   * Background of the counter
   */
  background: string;
  size: "SMALL" | "LARGE";
  unit: "EUR" | "CZK";
}

export function Counter({ unit, size, background = "#d8ecd6" }: CounterProps) {
  const [counter, setCounter] = useState(10);
  return (
    <div
      style={{
        backgroundColor: background,
        fontSize: size === "SMALL" ? "12px" : "20px",
      }}
    >
      <img src={Code} alt="code" /> Counter: {counter} {unit}
      <br />
      <a onClick={() => setCounter(counter + 1)}>INC</a>
    </div>
  );
}
