<template>
  <div class="login">
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form">
      <el-form-item label="用户名称" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="login">登录</el-button>
        <el-button type="danger" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="box">
      <p class="p_a">我的主页</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: ""
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset() {
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login {
}
.box {
  p {
    color: red;
    font-size: 20pxs;
  }
}
</style>