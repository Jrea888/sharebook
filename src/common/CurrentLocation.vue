<template>
  <div class="content-lcoal">
    <strong>当前位置：</strong>
    <span>首页-->{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "CurrentLocation",
  props: {
    title: {
      type: String,
      default: function() {
        return "首页";
      }
    }
  },
  mounted() {},
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>