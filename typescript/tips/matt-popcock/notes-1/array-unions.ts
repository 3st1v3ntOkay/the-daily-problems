interface Fizz {
  id: string
  fizz: number
}

interface Buzz {
  id: string
  buzz: number
}

const func = (arr: Array<Fizz> | Array<Buzz>) => {
  // use any method or property of arrays ...
}