//函数的重载，函数的名称相同，但是参数不同的几个函数
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

function add(num1: any, num2: any): any {
    return num1 + num2
};

const res = add(20, 30)
const res2 = add("shier", "luoxue")
console.log(res2);
//在函数的重载中，实现函数不能直接被调用，需要有对应的声明函数
// add({ name: "shier" }, { age: 19 })

//实现方式一 :能用联合类型实现就用联合类型
function getLength(args: string | any[]) {
    return args.length
}
getLength("abc")
getLength([2, 3, 4])
//实现方式二
// function getLength(args: number): number
// function getLength(args: any[]): number

// function getLength(args: any): number {
//     return args.length
// }


export { }

