type Person = {
    name: string,
    friend?: {
        name: string,
        age?: number
    }
}
const info: Person = {
    name: "why",
    // friend: {
    //     name: "kobo"
    // }
}

console.log(info.name);
//不会导致报错
console.log(info.friend?.name);

//??的使用    
let message = "hello"
const current = message ?? "你好"
console.log(current);
export { }