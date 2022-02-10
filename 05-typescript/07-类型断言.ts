//类型断言
const el = document.getElementById("whuy") as HTMLImageElement
el.src = "url"
//person 是student的父类
class Person {

}
class Student extends Person {
    studying() {

    }
}
function sayHello(p: Person) {
    (p as Student).studying()
}
const stu = new Student()
stu.studying()

//非空类型断言
function printmessageLength(message?: string) {
    //! 表示message一定有值，跳过ts编译阶段的检测
    console.log(message!.length);
}
printmessageLength()