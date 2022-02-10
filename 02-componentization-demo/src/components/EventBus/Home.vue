<template>
  <div class="hello">
    <h2>我是home</h2>
    <button @click="btnClick">send</button>
    <child></child>
  </div>
</template>

<script>
import Child from "./Child.vue";
import emitter from "./eventBus.js";
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
  methods: {
    btnClick() {
      emitter.emit("why", { name: "why", age: 19 });
    },
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
