<template>
  <div class="login">
    <el-form class="login_form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
      <el-form-item label prop="username">
        <p class="lable_p">用户名</p>
        <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>
      <el-form-item label prop="password">
        <p class="lable_p">密码</p>
        <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <div>
          <el-button type="success" @click="login">登录</el-button>
          <el-button type="danger" @click="reset">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          { min: 6, max: 15, message: "密码长度至少6个字符", trigger: "blur" }
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
html,
body {
  position: relative;
  height: 100%;
}
.login {
  height: 400px;
  .login_form {
    padding: 70px 0 0 100px;
  }
  .lable_p {
    display: inline-block;
    text-align: right;
    width: 100px;
    padding: 0 10px 0 0;
    margin-left: -100px;
    font-size: 16px;
  }
}
.el-input {
  width: 70%;
}
.el-form-item__error {
  font-size: 18px !important;
}
</style>