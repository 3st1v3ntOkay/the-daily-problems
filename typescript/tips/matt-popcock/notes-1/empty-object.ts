interface Empty {}
// type Unknown = Object | null | undefined;
type Unknown = {} | null | undefined;

const a: Empty = {}
const b: Empty = "abcd"
const c: Empty = 123123
const d: Empty = false

const aa: Unknown = {}
const bb: Unknown = "abcd"
const cc: Unknown = 123123
const dd: Unknown = false

const e: unknown = null
const f: Unknown = undefined

const g: Empty = NaN
