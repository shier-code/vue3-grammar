
<script>
import { ref, h } from "vue";
import Child from "./render函数基本使用.vue";
export default {
  setup() {
    const counter = ref(0);
    return {
      counter,
    };
  },
  render() {
    return h("div", { class: "app" }, [
      h("h2", null, `当前计数：${this.counter}`),
      h(
        "button",
        {
          onClick: () => this.counter++,
        },
        `+1`
      ),
      h(
        "button",
        {
          onClick: () => this.counter--,
        },
        `-1`
      ),
      h(Child, null, {
        default: () => h("span", null, "我是插入子组件的内容"),
      }),
    ]);
  },
};
</script>
<style scoped>
</style>