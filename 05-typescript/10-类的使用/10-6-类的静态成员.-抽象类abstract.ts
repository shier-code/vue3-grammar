//静态成员/类成员/类属性：通过类直接访问
class Student {
    static time: string = "20:00"

}
console.log(Student.time);

//抽象类
function makeArea(shape: Shape) {
    return shape.getArea()
}
//抽象类不能实例化，抽象方法必须被子类实现
abstract class Shape {
    abstract getArea()
}
class Rectangle extends Shape {
    private width: number
    private heigjt: number
    constructor(width: number, heigjt: number) {
        super()
        this.width = width
        this.heigjt = heigjt
    }
    getArea() {
        return this.width * this.heigjt
    }
}
class Circle extends Shape {
    private r: number

    constructor(r: number) {
        super()
        this.r = r
    }
    getArea() {
        return this.r * this.r * 3.14
    }
}


const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)
makeArea(rectangle)
makeArea(circle)
export { }