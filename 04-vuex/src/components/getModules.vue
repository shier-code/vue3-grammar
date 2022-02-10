<!--  -->
<template>
  <div class="">
    {{ $store.state.home.homeCounter }}
    <h2>{{ $store.getters["home/doubleHomeCounter"] }}</h2>
    <button @click="increament">按钮</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  setup() {
    const storeMutation = mapMutations("home", ["increament"]);
    return {
      ...storeMutation,
    };
  },
};
</script>
<style scoped>
</style>