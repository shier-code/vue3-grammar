//父类引用（类型）指向子类对象，在方法中，相同的类型（父类类型），执行方法表现的形态不同（执行子类自己的方法）

class Animal {
    action() { }
}
class Dog extends Animal {
    action() {
        console.log("dog running");
    }
}
class Fish extends Animal {
    action() {
        console.log("fish swimming");
    }
}

function makeAction(animal: Animal[]) {
    animal.forEach(item => {
        item.action()
    })
}
makeAction([new Fish(), new Dog()])
export { }