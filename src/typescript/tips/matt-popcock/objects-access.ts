// @1
const myObj = {
  a: 1,
  b: 2,
}

const badAccess = (str: string) => {
  return myObj[str]
}

const goodAccess = (str: keyof typeof myObj) => {
  return myObj[str]
}

// @2
const looseMyObj: Record<string, number> = {
  a: 1,
  b: 2,
}

const looseAccess = (str: string) => {
  return looseMyObj[str]
}

// @3
const castAccess = (str: string) => {
  return myObj[str as keyof typeof myObj]
}
