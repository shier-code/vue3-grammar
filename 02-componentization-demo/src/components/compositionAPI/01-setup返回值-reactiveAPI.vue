<!--  -->
<template>
  <div class="">
    {{ message }}
    <h2>{{ state.counter }}</h2>
    <!-- template会对ref对象自动解包，而不用使用name.value ，如果是对象则不能解包-->
    <h3>{{ num }}</h3>
    <button @click="increament">按钮</button>
    <h4>{{ age }}</h4>
    <button @click="updateInfo">按钮</button>
  </div>
</template>

<script>
import { reactive, readonly, ref, toRefs, toRef } from "vue";
export default {
  components: {},
  props: {
    message: {},
  },
  //setup(props,{attrs,slots,emit})
  setup(props, context) {
    console.log(props, context.attrs.id);
    // 定义响应式数据方式1
    const state = reactive({
      counter: 0,
    });
    // 定义响应式数据方式2
    let num = ref(100);
    // readonly
    const info = {
      name: "why",
    };
    const readonlyInfo = readonly(info);
    let updateInfo = () => {
      readonlyInfo.name = "shier";
    };
    //toRefs 响应式数据解构
    const sheir = reactive({
      name: "shier",
      age: 18,
      height: 18,
    });
    let { name, age } = toRefs(sheir);
    let height = toRef(sheir, "height"); //单个属性解构
    const increament = () => {
      state.counter++;
      num.value++;
      age.value++;
    };
    return {
      title: "标题",
      state,
      num,
      name,
      age,
      height,
      updateInfo,
      increament,
    };
  },
};
</script>
<style scoped>
</style>