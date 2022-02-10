//可调用的接口
// type CalcFn = (n1: number, n2: number) => number
interface CalcFn {
    (n1: number, n2: number): number
}
const add: CalcFn = (n1, n2) => {
    return n1 + n2
}

export { }