export type FindSanta<
  Input extends any[],
  Counter extends 0[] = [],
> =
  Input extends [infer Emoji, ...infer RestEmoji]
  ? Emoji extends "🎅🏼"
  ? Counter["length"]
  : FindSanta<RestEmoji, [...Counter, 0]>
  : never;
