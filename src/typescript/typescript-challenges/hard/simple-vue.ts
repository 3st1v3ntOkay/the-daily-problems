import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

declare function mySimpleVue(options: {
  data: () => Record<string, any>;
  computed: Record<string, () => void>;
  methods: Record<string, () => void>;
}): void;

// @antfu
type GetComputed<Computed> =
  Computed extends Record<
    string, (...args: any[]) => any
  >
  ? {
    [key in keyof Computed]: ReturnType<Computed[key]>
  }
  : never;

declare function SimpleVue<
  Data,
  Computed,
  Modified
>(
  options: {
    data: (this: void) => Data, // credits to @ga676005
    computed: Computed,
    methods: Modified,
  } & ThisType<Data & Modified & GetComputed<Computed>>
): any;

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.amount)
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
    },
  },
});
