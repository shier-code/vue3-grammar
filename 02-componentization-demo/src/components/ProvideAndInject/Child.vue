
<template>
  <div class="child">
    <h2>我是child</h2>
    <h3>{{myName.value}}</h3>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  inject: ["myName"],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
</style>