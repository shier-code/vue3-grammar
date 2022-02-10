<!--  -->
<template>
  <div class="">
    {{ fullname }}
    --{{ age }}

    <button @click="change">修改firstname</button>
    {{ info.name }}
    <button @click="changeInfo">修改info</button>
  </div>
</template>

<script>
import { ref, computed, watchEffect, watch, reactive } from "vue";
export default {
  setup() {
    const firstname = ref("shier");
    const lastname = ref("luoxue");
    const age = ref(18);

    const fullname = computed(() => {
      return firstname.value + lastname.value;
    });
    const change = () => {
      firstname.value = "dagou";
      age.value++;
      if (age.value > 20) {
        stop(); //停止侦听
      }
    };
    //自动搜集所有响应式数据侦听
    const stop = watchEffect((onInvalidate) => {
      onInvalidate(
        () => {
          //在这个函数清楚额外副作用(清除网络请求)
          //request.cancel()
        },
        {
          flush: "post", //dom挂载完再执行回调，需要在当前侦听函数获取dom元素
        }
      );
      console.log("firstname", firstname.value);
    });
    const info = reactive({ name: "why", age: 19 });
    watch(
      () => info.name,
      (newVal, oldVal) => {
        console.log("newval is==", newVal);
        console.log("oldVal is==", oldVal);
      },
      {
        deep: true,
      }
    );
    // watch(
    //   () => {return {...info.name}},
    //   (newVal, oldVal) => {
    //     console.log("newval is==", newVal);
    //     console.log("oldVal is==", oldVal);
    //   }
    // );

    //侦听多个数据源
    watch(
      [() => ({ ...info }), firstname],
      ([newVal, oldVal], [newName, oldName]) => {
        console.log("newval is==", newVal);
        console.log("oldVal is==", oldVal);
        console.log("newval is==", newName);
        console.log("oldVal is==", oldName);
      }
    );

    const changeInfo = () => {
      info.name = "kobe";
    };
    return {
      fullname,
      age,
      info,
      change,
      changeInfo,
    };
  },
};
</script>
<style scoped>
</style>