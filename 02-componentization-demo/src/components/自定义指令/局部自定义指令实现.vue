<!--  -->
<template>
  <div class="">
    <input type="text" v-focus="cusValue"  v-format-time/>
  </div>
</template>

<script>
export default {
  // directives: {
  //   focus: {
  //     // eslint-disable-next-line
  //     mounted(el, bindings, vnode, preVnode) {
  //       el.focus(); //bindings.value获取i定义指令传入的参数cusValue
  //     },
  //   },
  // },
};
</script>
<style scoped>
</style>