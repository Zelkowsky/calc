export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const pow:ScalarOperationType = (
    first:number,
    second:number
):number => Math.pow(first,second)

export const square:ScalarOperationType = (
    first:number
):number => Math.pow(first,2)

export const increment:ScalarOperationType = (
    first:number
):number => first + 1

export const decrement:ScalarOperationType = (
    first:number
):number => first - 1

export const sin:ScalarOperationType = (
    first:number
):number => Math.sin(first)

export const cos:ScalarOperationType = (
    first:number
):number => Math.cos(first)

export const tan:ScalarOperationType = (
    first:number
):number => Math.tan(first)

export const factorial:ScalarOperationType = (
    first:number
):number => {
  let result = 1;
  for (let i = 2 ; i <= first ; i++) {
    result *= result
  }
  return result
}

export const remain:ScalarOperationType = (
    first:number,
    second:number
):number => first % second

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^":pow,
  "**":square,
  "++":increment,
  "--":decrement,
  "sin":sin,
  "cos":cos,
  "tan":tan,
  "!":factorial,
  "%":remain
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
  "^":FIRST,
  "**":FIRST,
  "++":SECOND,
  "--":SECOND,
  "sin":SECOND,
  "cos":SECOND,
  "tan":SECOND,
  "!":FIRST,
  "%":FIRST
};
