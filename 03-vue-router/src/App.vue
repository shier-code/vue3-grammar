<template>
  <div>
    <h2>哈哈哈</h2>
    <!-- props:href -->
    <!-- props:route -->
    <!-- props:navigate -->
    <!-- custom:自定义跳转事件，去除a标签包裹 -->
    <router-link to="/home/shier" v-slot="props" custom>
      <button @click="props.navigate" :class="{'active':props.isActive}">
        {{ props.href }}
      </button>
    </router-link>
    <button @click="handle">about</button>
    <router-view v-slot="props">
      <transition name="why">
        <component :is="props.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {},
  setup() {
    const router = useRouter();
    const handle = () => {
      router.push({
        path: "/about",
        query: {
          age: 19,
        },
      });
    };
    return {
      handle,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.why-enter-from,
.why-leave-to {
  opacity: 0;
}
.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
