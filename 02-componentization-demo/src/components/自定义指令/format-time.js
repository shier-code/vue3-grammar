export default function (app) {
    app.directive("format-time", {
        mounted(el) {
            console.log('el===', el);
        },
    })
}