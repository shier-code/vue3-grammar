<!--  -->
<template>
  <div class="">{{ name }}</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  setup() {
    const storeMutation = mapMutations(["increament"]);
    return {
      ...storeMutation,
    };
  },
};
</script>
<style scoped>
</style>