<!--  -->
<template>
  <div class="">
    {{ counter }}
    {{ doubleCounter }}
    <button @click="increament">+1</button>
  </div>
</template>

<script>
import useCounter from "./hooks/useCounter";
export default {
  setup() {
    const { counter, doubleCounter, increament } = useCounter();
    return {
      counter,
      doubleCounter,
      increament,
      // ...useCounter
    };
  },
};
</script>
<style scoped>
</style>