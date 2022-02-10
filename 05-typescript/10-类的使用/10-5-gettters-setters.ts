//protected:在类内部和子类可访问，受保护的属性和方法
//private:仅仅在同一类中可方位
//readyonly：可以在构造器中赋值，属性本身不能修改，如果时对象类型，对象中的属性可修改
class Person {
    private _name: string

    constructor(name: string) {
        this._name = name

    }
    //setter
    set name(newName) {
        this._name = newName
    }
    //getter
    get name() {
        return this._name
    }
}
const p = new Person("why")
p.name = "shier"
console.log(p.name);
export { }