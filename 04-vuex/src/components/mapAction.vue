<!--  -->
<template>
  <div class="">
    {{ sCounter }} <button @click="add({ n: 2 })">按钮</button>
  </div>
</template>

<script>
import { mapActions, useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  setup() {
    const store = useStore();
    const sCounter = computed(() => store.state.counter);
    const actions = mapActions({
      add: "increaseAction",
      decrease: "decreament",
    });
    onMounted(() => {
      const promise = store.dispatch("promiseAction");
      promise
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    return {
      sCounter,
      ...actions,
    };
  },
};
</script>
<style scoped>
</style>