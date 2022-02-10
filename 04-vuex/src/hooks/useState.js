import {
    computed
} from 'vue';
import {
    mapState,
    useStore,
    createNamespacedHelpers
} from 'vuex';

export function useState(moduleName, mapper) {
    let storeStateFns = mapState(mapper);
    if (typeof moduleName === "string" && moduleName.length > 0) {
        // mapperFn = createNamespacedHelpers(moduleName).mapState
        storeStateFns = createNamespacedHelpers(moduleName).mapState(mapper);
    } else {
        mapper = moduleName
    }
    const store = useStore()
    //获取到对应对象的function ：{name:function,age:function}

    const storeState = {};
    Object.keys(storeStateFns).forEach((fnkeys) => {
        const fn = storeStateFns[fnkeys].bind({
            $store: store
        });
        storeState[fnkeys] = computed(fn);
    });
    return storeState
}