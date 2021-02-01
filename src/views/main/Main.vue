<template>
  <div>
    <!-- 背景轮播图 -->
    <swiper-back></swiper-back>
    <div class="main">
      <div v-if="bool">
        <login-info ref></login-info>
      </div>
      <div v-else>
        <register-info ref></register-info>
      </div>
      <div class="reg_btn">
        <button ref="doClick" class="change_btn" @click="getUrl">——点击注册——</button>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperBack from "@/components/common/swiper.vue";
import LoginInfo from "@/views/login/Login.vue";
import RegisterInfo from "@/views/register/Register.vue";
export default {
  name: "Mian",
  data() {
    return {
      bool: true
    };
  },
  components: { SwiperBack, LoginInfo, RegisterInfo },
  methods: {
    // 路径切换
    getUrl() {
      this.bool = this.bool ? false : true;
      return this.bool;
    }
  }
};
</script>

<style lang="less" scoped>
html,
body {
  position: relative;
}
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
    .change_btn {
      padding: 5px 10px;
      background-color: #8ae78a;
    }
  }

  .login {
    height: 400px;
    .login_form {
      padding: 70px 0 0 100px;
    }
  }
  .el-input {
    width: 70%;
  }
  .el-form-item__error {
    font-size: 18px !important;
  }
}
</style>