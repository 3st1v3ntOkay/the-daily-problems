import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

// check declare module: https://www.google.com/search?q=declare+module&rlz=1C1GEWG_enMX1139MX1139&oq=declare+module&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEHMzk5ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8
// check youtube: https://www.youtube.com/results?search_query=declare+module

import type {
  Status,
  Child,
  List,
} from "santas-special-list";

type t0_actual = Status;
type t0_expected = "naughty" | "nice";

type t0 = Expect<Equal<t0_actual, t0_expected>>;

type t1_actual = Child;
type t1_expected = {
  name: string,
  status: Status
}

type t1 = Expect<Equal<t1_actual, t1_expected>>;

type t2_actual = List;
type t2_expected = Child[];

type t2 = Expect<Equal<t2_actual, t2_expected>>;
