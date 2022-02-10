<!--  -->
<template>
  <div class="">{{ sCounter }}-{{ age }}</div>
</template>

<script>
import { useStore, mapState } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const sCounter = computed(() => store.state.counter);
    //mapState 
    const storeStateFns = mapState(["counter", "name", "age"]);
    const storeState = {};
    Object.keys(storeStateFns).forEach((fnkeys) => {
      const fn = storeStateFns[fnkeys].bind({ $store: store });
      storeState[fnkeys] = computed(fn);
    });
    return {
      sCounter,
      ...storeState,
    };
  },
};
</script>
<style scoped>
</style>