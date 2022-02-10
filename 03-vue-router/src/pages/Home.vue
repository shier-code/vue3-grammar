<!--  -->
<template>
  <div class="">
    Home
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  components: {},
  data() {
    return {};
  },
  setup() {
    const route = useRoute();
    console.log(route.params.userName);
  },
};
</script>
<style scoped>
</style>