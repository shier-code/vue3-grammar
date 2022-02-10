class Person {
    name: string = ""
    age: number = 1

    //定义了构造器在创建实例时必须要传参
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eating() {
        console.log("===", this.name);
    }
}
const p = new Person("why", 19)
p.eating()
export { }