// @sgrishchenko
export type Excuse<T extends Record<string, string>> =
  new (dict: T) => {
    [K in keyof T]: `${K & string}: ${T[K]}`
  }[keyof T];
