<!--  -->
<template>
  <div class="">
    <child v-slot="slotProps">罗大狗：{{slotProps.title}}</child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  components: { Child },
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
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
</style>