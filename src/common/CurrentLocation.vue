<template>
  <div class="content">
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
        return "";
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
.content{
    height: 45px;
    line-height: 45px;
    font-size: 16px;
}
</style>