<!-- 
 -->
<template>
  <div class="">
    <child message="222" id="shier">
      <template #default>
        <h2>哈哈哈</h2>
      </template>
    </child>
  </div>
</template>

<script>
import Child from "./03-compositionAPI练习/Index";
export default {
  components: { Child },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>