//在定义函数时不决定参数类型，而是调用者以参数形式告诉参数类型
interface IPerson<T1, T2> {
    name: T1,
    age: T2
}
const p: IPerson<string, number> = {
    name: "shier",
    age: 11
}
export { }
