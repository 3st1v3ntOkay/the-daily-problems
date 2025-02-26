import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type { GiftWrapper } from "../day-3";

// test 1
type test_SantaToTrash_actual = GiftWrapper<"Car", "Santa", "Trash">;

type test_SantaToTrash_expected = {
  present: "Car",
  from: "Santa",
  to: "Trash",
};

type test_SantaToTrash = Expect<Equal<
  test_SantaToTrash_actual,
  test_SantaToTrash_expected
>>;

// test 2
type test_TrashToPrime_actual = GiftWrapper<"vscode", "Trash", "Prime">;

type test_TrashToPrime_expected = {
  present: "vscode",
  from: "Trash",
  to: "Prime",
};

type test_TrashToPrime = Expect<Equal<
  test_TrashToPrime_actual,
  test_TrashToPrime_expected
>>;

// test 3
type test_DanToEvan_actual = GiftWrapper<"javascript", "Dan", "Evan">;

type test_DanToEvan_expected = {
  present: "javascript",
  from: "Dan",
  to: "Evan",
};

type test_DanToEvan = Expect<Equal<
  test_DanToEvan_actual,
  test_DanToEvan_expected
>>;
