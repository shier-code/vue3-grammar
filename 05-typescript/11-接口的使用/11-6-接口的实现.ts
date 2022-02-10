interface ISwim {
    swimming: () => void
}
interface IEat {
    eating: () => void
}
class Animal {

}
class Fish extends Animal implements ISwim, IEat {
    swimming() {

    }
    eating() {

    }
}
class Persoon implements ISwim {
    swimming() { }
}
function swimAction(swimable: ISwim) {
    swimable.swimming()
}

//1、所有实现了接口的类对应的对象，都可以传入
swimAction(new Fish())
swimAction(new Persoon())
export { }