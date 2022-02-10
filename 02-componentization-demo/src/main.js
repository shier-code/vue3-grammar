import {
    createApp
} from 'vue'
import App from './App.vue'
import moduleName from './components/自定义指令/format-time';
import pluginObject from './components/插件的使用/01-plugin-object';
const app = createApp(App)
app.use(pluginObject)
moduleName(app)
app.directive("focus", {
    // eslint-disable-next-line
    mounted(el, bindings, vnode, preVnode) {
        el.focus();
    },
}, )
app.mount('#app')