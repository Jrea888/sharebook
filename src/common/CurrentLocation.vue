<template>
  <div class="content-lcoal">
    <strong>当前位置：</strong>
    <span class="index" @click="returnIndex">首页</span>
    -->{{title}}
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
  },
  methods: {
    returnIndex() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.index {
  cursor: pointer;
}
</style>