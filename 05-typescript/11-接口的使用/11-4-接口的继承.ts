interface ISwim {
    swimming: () => void
}
interface IFly {
    flying: () => void
}
interface IAction extends ISwim, IFly {

}
const actioon: IAction = {
    swimming() {

    },
    flying() { }
}
export { }