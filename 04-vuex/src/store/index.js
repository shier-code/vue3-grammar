import {
    createStore
} from 'vuex';
import axios from "axios"
import home from './modules/home';
const store = createStore({
    state: {
        counter: 1,
        name: "shier",
        age: 19,
        arr: []
    },
    mutations: {
        increament(state, payload) {
            state.counter += payload.n
        },
        decreament(state, payload) {
            state.counter -= payload.n
        },
        getBanner(state, payload) {
            state.arr = payload
        }
    },
    actions: {
        increaseAction(context, payload) {
            context.commit('increament', payload)
        },
        promiseAction(context) {
            return new Promise((resolve, reject) => {
                axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
                    context.commit('getBanner', res.data.data.banner.list)
                    resolve({
                        name: "sheir"
                    })
                    console.log("============", context);
                }).catch(err => {
                    reject(err)
                })
            })
        }
    },
    modules: {
        home
    }
})
export default store