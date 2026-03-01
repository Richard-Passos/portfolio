const isType = <T>(bool?: boolean, value?: unknown): value is T => !!bool;

export { isType };
