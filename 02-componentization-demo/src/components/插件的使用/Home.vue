<!--  -->
<template>
  <div class=""></div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log("option =====", this.$name);
  },
  setup() {
    const instance = getCurrentInstance();
    console.log(
      "setup =====",
      instance.appContext.config.globalProperties.$name
    );
  },
};
</script>
<style scoped>
</style>