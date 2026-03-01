type DeepPartial<T> = T extends Function
  ? T
  : T extends Map<infer K, infer V>
    ? Map<K, DeepPartial<V>>
    : T extends Set<infer U>
      ? Set<DeepPartial<U>>
      : T extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T extends object
          ? { [P in keyof T]?: DeepPartial<T[P]> }
          : T;

export type { DeepPartial };
