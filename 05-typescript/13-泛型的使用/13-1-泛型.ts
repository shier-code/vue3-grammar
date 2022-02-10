//在定义函数时不决定参数类型，而是调用者以参数形式告诉参数类型
function sum<Type, E>(n1: Type, n2: E) {
    return n1
}
sum<number, string>(20, "sheir")
const res = sum<{ name: string }, any[]>({ name: "sheir" }, [1, 2])
console.log(res);
//类型推导
sum(50, 10)