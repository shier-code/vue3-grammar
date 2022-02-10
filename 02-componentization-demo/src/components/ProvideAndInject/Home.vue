<template>
  <div class="hello">
    <h2>我是home</h2>
    <button @click="name = 'luoxue'">按钮</button>
    <child></child>
  </div>
</template>

<script>
import { computed } from "vue";
import Child from "./Child.vue";
export default {
  name: "HelloWorld",
  components: { Child },
  props: {
    msg: String,
  },
  data() {
    return {
      name: "shier",
    };
  },
  provide() {
    return {
      // myName: this.name//仅仅是一次性赋值
      myName: computed(() => this.name),  //provide响应式
    };
  },
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
