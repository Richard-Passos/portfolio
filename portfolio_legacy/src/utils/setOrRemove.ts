import isFunction from './isFunction';

type ShouldRemove<T> = (value: T[keyof T]) => boolean;

const setOrRemove = <T extends object>(
  obj: T,
  key: keyof T,
  value: T[keyof T] | ShouldRemove<T>
): T => {
  const shouldRemove = isFunction(value) ? value(obj[key]) : !value;

  if (shouldRemove) {
    const { [key]: _, ...rest } = obj;

    return rest as T;
  }

  return {
    ...obj,
    [key]: value
  };
};

export { setOrRemove };
export type { ShouldRemove };
