// check declare module: https://www.google.com/search?q=declare+module&rlz=1C1GEWG_enMX1139MX1139&oq=declare+module&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEHMzk5ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8
// check youtube: https://www.youtube.com/results?search_query=declare+module

// thanks to @FuzeTox: https://www.youtube.com/@FuzeTox + check the error
declare module "santas-special-list" {
  type Status = "naughty" | "nice";

  interface Child {
    name: string;
    status: Status;
  }

  type List = Array<Child>;
}
