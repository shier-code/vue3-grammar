
<script>
import { h } from "vue";
export default {
  render() {
    return h("div", { class: "title" }, [
      h("div", null, "下面是插槽"),
      this.$slots.default
        ? this.$slots.default()
        : h("span", null, "我是默认值"),
    ]);
  },
};
</script>
<style scoped>
</style>