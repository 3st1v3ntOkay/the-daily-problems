import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

const createRoute = <T>(author: string, route: T): T => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);

  return route;
}

const oneMill = createRoute('💨Dasher', 100_000_000);
type t0_actual = typeof oneMill;
type t0_expected = 100_000_000;
type t0 = Expect<Equal<t0_actual, t0_expected>>;

const two = createRoute('💃Dancer', 2);
type t1_actual = typeof two;
type t1_expected = 2;
type t1 = Expect<Equal<t1_actual, t1_expected>>;

const three = createRoute('🦌Prancer', 2);
type t2_actual = typeof three;
type t2_expected = 2;
type t2 = Expect<Equal<t2_actual, t2_expected>>;

const four = createRoute('🌟Vixen', '1');
type t3_actual = typeof four;
type t3_expected = '1';
type t3 = Expect<Equal<t3_actual, t3_expected>>;

const five = createRoute('☄️Comet', true);
type t4_actual = typeof five;
type t4_expected = true;
type t4 = Expect<Equal<t4_actual, t4_expected>>;

const six = createRoute('❤️Cupid', [1]);
type t5_actual = typeof six;
type t5_expected = number[];
type t5 = Expect<Equal<t5_actual, t5_expected>>;

const seven = createRoute('🌩️Donner', { 1: 1 });
type t6_actual = typeof seven;
type t6_expected = { 1: number };
type t6 = Expect<Equal<t6_actual, t6_expected>>;

const eight = createRoute('⚡Blitzen', Symbol('🔴 === evil'));
type t7_actual = typeof eight;
type t7_expected = symbol;
type t7 = Expect<Equal<t7_actual, t7_expected>>;
