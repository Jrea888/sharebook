<template>
  <div class="main">
    <!-- 占位符 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <router-link to="/login">点击登录</router-link>
    <router-link to="/register">点击注册</router-link>
  </div>
</template>

<script>
export default {
  name: "Mian",
  components: {}
};
</script>

<style scoped>
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  background-color: rgb(138, 231, 138);
}
</style>