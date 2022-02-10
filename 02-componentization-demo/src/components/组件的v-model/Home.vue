<template>
  <div class="hello">
    <!-- eslint-disable-next-line -->
    <about v-model="message" v-model:title="msg"></about>
    <!-- <about :modelValue="message" @update:modelValue="message = $event"></about> -->
    <h2>{{ message }}</h2>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import About from "./About.vue";
export default {
  name: "HelloWorld",
  components: { About },
  props: {},
  data() {
    return {
      message: "message",
      msg: "title",
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
