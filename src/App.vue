<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {}
};
</script>
<style lang="less" scoped>
@import "./assets/css/common.css";
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
