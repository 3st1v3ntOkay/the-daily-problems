import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

// my solution
type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type CaseV1<
  P1 extends "👊🏻" | "🖐🏾" | "✌🏽",
  P2 extends "👊🏻" | "🖐🏾" | "✌🏽",
> =
  P1 extends "👊🏻" // case 1
  ? P2 extends "🖐🏾"
  ? "win"
  : P2 extends "✌🏽"
  ? "lose"
  : never
  : P1 extends "🖐🏾" // case 2
  ? P2 extends "👊🏻"
  ? "lose"
  : P2 extends "✌🏽"
  ? "win"
  : never
  : P1 extends "✌🏽" // case 3
  ? P2 extends "🖐🏾"
  ? "lose"
  : P2 extends "👊🏻"
  ? "win"
  : never
  : never;

type CaseV2<
  P1 extends "👊🏻" | "🖐🏾" | "✌🏽",
  P2 extends "👊🏻" | "🖐🏾" | "✌🏽",
> =
  P1 extends "👊🏻" // case 1
  ? P2 extends "🖐🏾"
  ? "win"
  : "lose"
  : P1 extends "🖐🏾" // case 2
  ? P2 extends "✌🏽"
  ? "win"
  : "lose"
  : P1 extends "✌🏽" // case 3
  ? P2 extends "👊🏻"
  ? "win"
  : "lose"
  : never;

type WhoWins<
  Player1 extends RockPaperScissors,
  Player2 extends RockPaperScissors,
> =
  Player1 extends Player2
  ? "draw"
  : CaseV2<Player1, Player2>;

// @dan-lee solution
type RPS = "👊🏻" | "🖐🏾" | "✌🏽";

type Results = {
  "👊🏻": { "👊🏻": "draw"; "🖐🏾": "lose"; "✌🏽": "win" },
  "🖐🏾": { "👊🏻": "win"; "🖐🏾": "draw"; "✌🏽": "lose" },
  "✌🏽": { "👊🏻": "lose"; "🖐🏾": "win"; "✌🏽": "draw" },
}

type WhoWinsAlt1<L extends RPS, R extends RPS> = Results[R][L];

// test 1
type test_0_actual = WhoWins<"👊🏻", "🖐🏾">;
type test_0_expected = "win";

type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

// test 2
type test_1_actual = WhoWins<"👊🏻", "✌🏽">;
type test_1_expected = "lose";

type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

// test 3
type test_2_actual = WhoWins<"👊🏻", "👊🏻">;
type test_2_expected = "draw";

type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;

// test 4
type test_3_actual = WhoWins<"🖐🏾", "👊🏻">;
type test_3_expected = "lose";

type test_3 = Expect<Equal<test_3_expected, test_3_actual>>;

// test 5
type test_4_actual = WhoWins<"🖐🏾", "✌🏽">;
type test_4_expected = "win";

type test_4 = Expect<Equal<test_4_expected, test_4_actual>>;

// test 6
type test_5_actual = WhoWins<"🖐🏾", "🖐🏾">;
type test_5_expected = "draw";

type test_5 = Expect<Equal<test_5_expected, test_5_actual>>;

// test 7
type test_6_actual = WhoWins<"✌🏽", "👊🏻">;
type test_6_expected = "win";

type test_6 = Expect<Equal<test_6_expected, test_6_actual>>;

// test 8
type test_7_actual = WhoWins<"✌🏽", "✌🏽">;
type test_7_expected = "draw";

type test_7 = Expect<Equal<test_7_expected, test_7_actual>>;

// test 9
type test_8_actual = WhoWins<"✌🏽", "🖐🏾">;
type test_8_expected = "lose";

type test_8 = Expect<Equal<test_8_expected, test_8_actual>>;
