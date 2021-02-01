<template>
  <div class="login">
    <el-form class="login_form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
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
          this.$router.push("/home");
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
</style>