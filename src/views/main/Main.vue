<template>
  <div class="main">
    <!-- 占位符 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <div class="reg_btn">
      <!-- <router-link to="/login">返回</router-link> -->
      <router-link to="/register">——点击注册——</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mian",
  components: {}
};
</script>

<style lang="less" scoped>
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: rgb(138, 231, 138);
  box-shadow: 0 0px 10px #868383;

  .reg_btn {
    text-align: right;
    font-size: 15px;
  }
}
</style>