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



export const square:ScalarOperationType =(
    first:number
) : number => Math.pow(first,2);



export const pow:ScalarOperationType = (
    first:number,
    second:number
):number => Math.pow(first,second);


// export const factorial:ScalarOperationType = (
//     first:number
// ):number => first != 1 ? first * factorial(first - 1) : 1;

export const sin:ScalarOperationType = (
first:number
    ):number => Math.sin(first)

export const cos:ScalarOperationType = (
    first:number
):number => Math.cos(first)

export const tan:ScalarOperationType = (
    first:number
):number => Math.tan(first)


// export const fib:ScalarOperationType = (
//     first:number,
//     second:number
// ):number => fib(first,second)

export const remain:ScalarOperationType = (
    first:number,
    second:number
):number => first % second



export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**":square,
  "^":pow,
  "sin":sin,
  "cos":cos,
  "tan":tan,
  "%":remain,

  // "fib":fib,
  // "!":factorial
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND ,THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": SECOND,
  "/": SECOND,
  "**":FIRST,
  "^":FIRST,
  "sin":FIRST,
  "cos":FIRST,
  "tan":FIRST,
  "%":FIRST,
  // "fib":FIRST,
  // "!":FIRST,
  "+": THIRD,
  "-": THIRD,
};
