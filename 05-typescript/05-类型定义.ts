
//数组类型定义
const name1: Array<string> = []  //不推荐，最好在数组中只存放一种类型数据
const name2: string[] = []
//object
const info = {                   //不指定类型
    name: "shier"
}
//null
const n1: null = null
const n2: undefined = undefined        //最好指定类型
//symbol
const title1 = Symbol("title")
const title2 = Symbol("title")
const obj = {
    [title1]: "shier",
    [title2]: "luoxue"
}
//amy类型
let message: any = "hello"
message = true
//unknown  该类型只能赋值给any和unknow类型，可以防止被乱用  / any可以赋值给任何类型
let result: unknown = ""

console.log(obj);
//tuple元组
const shier: [string, number] = ["wt", 12]
console.log(shier[0].length);
//函数类型
type myFunction = () => void
const foo: myFunction = () => { }
//对象类型
type obj = {
    name: string,
    age: number
}
let person: obj = {
    name: "shier",
    age: 18
}
//字面量类型
type alignment = "left" | "right" | "center"
let align: alignment = "left"
align = "right"
//字面量推理
type Method = "POST" | "GET"
function request(url: string, method: Method) { }
type Reaq = {
    url: string,
    method: Method
}
// const option :Reaq= {
//     url: "www.shirer.com",
//     method: "POST"
// }
const option = {
    url: "www.shirer.com",
    method: "POST"
} as const
request(option.url, option.method)
export { }