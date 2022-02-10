type directives = "left" | "right"

interface ISwim {
    swimming: () => void
}
interface IFly {
    flying: () => void
}
type mytype1 = ISwim | IFly
type mytype2 = ISwim & IFly

const obj2: mytype2 = {
    swimming() { },
    flying() { }
}
export { }