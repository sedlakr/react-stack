export function assertNever(val: never): never {
  throw new Error('Value should be never here' + JSON.stringify(val));
}
