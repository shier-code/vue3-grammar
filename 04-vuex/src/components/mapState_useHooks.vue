<!--  -->
<template>
  <div class="">{{ homeCounter }}</div>
</template>

<script>
import { useState } from "../hooks/useState";
export default {
  setup() {
    const storeState = useState("home", ["homeCounter"]);
    return {
      ...storeState,
    };
  },
};
</script>
<style scoped>
</style>