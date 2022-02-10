<!--  -->
<template>
  <div class="child">
    <h2>我是child</h2>
  </div>
</template>

<script>
import emitter from "./eventBus.js";
export default {
  components: {},
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    emitter.on("why", (info) => {
      console.log(info);
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
</style>