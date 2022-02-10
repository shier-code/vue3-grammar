//通常用来定义常量
enum Direction {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}
function turnDirection(direction: Direction) {
    switch (direction) {
        case Direction.LEFT:
            console.log("left");
            break;
        case Direction.RIGHT:
            console.log("right");
            break;
        case Direction.TOP:
            console.log("right");
            break;
        case Direction.BOTTOM:
            console.log("right");
            break;
        default:
            const foo: never = direction;
            break
    }
}
turnDirection(Direction.LEFT)