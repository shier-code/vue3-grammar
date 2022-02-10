//protected:在类内部和子类可访问，受保护的属性和方法
//private:仅仅在同一类中可方位
//readyonly：可以在构造器中赋值，属性本身不能修改，如果时对象类型，对象中的属性可修改
class Person {
    private name: string = ""
    protected age: number = 18
    title: string
    readonly friend?: Person
    constructor(name: string, friend?: Person) {
        this.name = name
        this.friend = friend
    }
    getName() {
        return this.name
    }
    setName(newName) {
        this.name = newName
    }
}
class Student extends Person {
    getAge() {
        return this.age

    }
}
const p = new Person("why", new Person("kobe"))
p.getName()
p.setName("why")
if (p.friend) {
    p.friend.title = "shier"
}
export { }