<template>
  <div class="hello">
    <component :is="curCom"></component>
  </div>
</template>

<script>
import About from "./About.vue";
export default {
  name: "HelloWorld",
  components: { About },
  props: {
    msg: String,
  },
  data() {
    return {
      curCom: "about",
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
