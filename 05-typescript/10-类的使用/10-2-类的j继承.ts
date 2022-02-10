class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eating() {
        console.log("Person eating ");
    }

}
class Student extends Person {
    title: string
    constructor(name: string, age: number, title: string) {
        super(name, age)  //调用父类构造器方法
        this.title = title
    }
    //重写
    eating() {
        super.eating() //调用父类方法
        console.log("Student eating ");
    }
    studying() { }
}

const stu = new Student("shier", 18, 'title')
console.log(stu.eating());
export { }