export type GiftWrapper<
  Present extends string,
  From extends string,
  To extends string,
> = {
  present: Present;
  from: From;
  to: To;
}
