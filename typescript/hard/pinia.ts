import type { Equal, Expect } from "@type-challenges/utils";

declare function mydefineStore(store: {
  id: string,
  state: () => object,
  getters: Record<string, (this: any) => void>,
  actions: Record<string, (this: any) => void>,
}): void;

// @Ayub-Begimkulov
type AnyObject = Record<string, unknown>;
type BaseGetters = Record<string, Function>;
type BaseActions = Record<string, (...args: any[]) => any>;

type ComputedGetters<G extends BaseGetters> = {
  readonly [K in keyof G]: G[K] extends (...args: any[]) => any
  ? ReturnType<G[K]>
  : never;
}

interface StoreOptions<
  State extends AnyObject,
  Getters extends BaseGetters,
  Actions extends BaseActions
> {
  id: string;
  state: () => State,
  getters: Getters & ThisType<ComputedGetters<Getters> & Readonly<State>>,
  actions: Actions & ThisType<Actions & State & ComputedGetters<Getters>>
}

type Store<
  State extends AnyObject,
  Getters extends BaseGetters,
  Actions extends BaseActions
> = {
  init(): void;
  reset(): true;
} & Actions & State & ComputedGetters<Getters>;

declare function defineStore<
  State extends AnyObject,
  Getters extends BaseGetters,
  Actions extends BaseActions
>(store: StoreOptions<State, Getters, Actions>): Store<State, Getters, Actions>;

const store = defineStore({
  id: '',
  state: () => ({
    num: 0,
    str: '',
  }),
  getters: {
    stringifiedNum() {
      // @ts-expect-error
      this.num += 1

      return this.num.toString()
    },
    parsedNum() {
      return Number.parseInt(this.stringifiedNum)
    },
  },
  actions: {
    init() {
      this.reset()
      this.increment()
    },
    increment(step = 1) {
      this.num += step
    },
    reset() {
      this.num = 0

      // @ts-expect-error
      this.parsedNum = 0

      return true
    },
    setNum(value: number) {
      this.num = value
    },
  },
})

// @ts-expect-error
store.nopeStateProp
// @ts-expect-error
store.nopeGetter
// @ts-expect-error
store.stringifiedNum()
store.init()
// @ts-expect-error
store.init(0)
store.increment()
store.increment(2)
// @ts-expect-error
store.setNum()
// @ts-expect-error
store.setNum('3')
store.setNum(3)
const r = store.reset()

type _tests = [
  Expect<Equal<typeof store.num, number>>,
  Expect<Equal<typeof store.str, string>>,
  Expect<Equal<typeof store.stringifiedNum, string>>,
  Expect<Equal<typeof store.parsedNum, number>>,
  Expect<Equal<typeof r, true>>,
];
