import type { Debug, Equal, Expect, IsAny } from "@type-challenges/utils";

declare function myVueBasicProps(options: {
  props: Record<string, object>;
  data: (this: unknown) => `keyof props`;
  computed: Record<string, () => void>;
  methods: () => void;
}): any;

// @michaltarasiuk
type GetComputed<TComputed> = {
  [key in keyof TComputed]: TComputed[key] extends () => infer Result
  ? Result
  : never;
};

type Union<TValue> =
  TValue extends Array<unknown>
  ? TValue[number]
  : TValue;

type MyReturnType<TFunction> =
  TFunction extends () => infer Result
  ? Result
  : TFunction extends new (...params: any[]) => infer Result
  ? Result
  : any;

type InferProps<TProps> = {
  [key in keyof TProps]: MyReturnType<
    Union<TProps[key] extends { type: infer Type }
      ? Type
      : TProps[key]>
  >;
};

// for better performance interface is better when we are working with objects (hash table), thanks @drylint to remember me this
interface Options<
  TProps,
  TData,
  TComputed,
  TMethods
> {
  props: TProps;
  data: (this: InferProps<TProps>) => TData;
  computed: TComputed & ThisType<TData>;
  methods: TMethods &
  ThisType<GetComputed<TComputed> & TMethods & InferProps<TProps>>;
}

declare function VueBasicProps<
  TProps,
  TData,
  TComputed,
  TMethods
>(
  options: Options<TProps, TData, TComputed, TMethods>
): unknown;

class ClassA { }

VueBasicProps({
  props: {
    propA: {},
    propB: { type: String },
    propC: { type: Boolean },
    propD: { type: ClassA },
    propE: { type: [String, Number] },
    propF: RegExp,
  },
  data(this) {
    type PropsType = Debug<typeof this>
    type cases = [
      Expect<IsAny<PropsType['propA']>>,
      Expect<Equal<PropsType['propB'], string>>,
      Expect<Equal<PropsType['propC'], boolean>>,
      Expect<Equal<PropsType['propD'], ClassA>>,
      Expect<Equal<PropsType['propE'], string | number>>,
      Expect<Equal<PropsType['propF'], RegExp>>,
    ]

    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
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
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const propE = this.propE
      type cases = [
        Expect<Equal<typeof fullname, string>>,
        Expect<Equal<typeof propE, string | number>>,
      ]
    },
  },
});
