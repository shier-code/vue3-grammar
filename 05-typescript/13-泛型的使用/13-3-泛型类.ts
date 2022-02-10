class Point<T> {
    x: T
    y: T
    z: T
    constructor(x: T, y: T, z: T) {
        this.x = x
        this.y = y
        this.z = z
    }
}
const p = new Point<string>("1,2", "2.30", "22") //最好使用类型推导

const name1: string[] = ["1"]
const name2: Array<string> = ["1"]
export { }
