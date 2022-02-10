interface ILength {
    length: number
}
function getLength<T extends ILength>(args: T) {
    return args.length
}
getLength("abc")
export { }
