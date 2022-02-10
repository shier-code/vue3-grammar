//通常不写返回值类型注解，返回值可不加类型注解
function foo(n1: number, n2: string) {
    return n1 + n2
}
foo(1, "1")
//匿名函数的参数类型  ,item可通过上下文推导出类型，可不加类型注解
const name2: string[] = []
name2.forEach((item) => {

});

type addFnType = (n1: number, n2: string) => void
const add: addFnType = (a1: number, a2: string) => { }

//函数类型案例
function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
    return fn(n1, n2)
}
const res1 = calc(20, 30, function (a, b) {
    return a + b
})
const res2 = calc(20, 30, function (a, b) {
    return a - b
})
//可选类型
function fn(x: string, b?: string) { }
//默认值 参数顺序：必传-默认-可选
function fn2(x: string, y: string = "a") {

}
//剩余参数
function num(initNum: number, ...nums: number[]) {
    let total: number = initNum
    for (const n of nums) {
        total += n
    }
    return total
}
//this的不确定类型
function eating(this: { name: string }, msg: string) {
    console.log(this.name + msg);
}
const info = {
    name: "why",
    eating: eating
}
info.eating("hhh")
eating.call({ name: "shier" }, "luoxue")
export { }