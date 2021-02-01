<template>
  <div class="main">
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
            <el-button type="danger" @click="loginReset">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="register_from">
      <el-form
        class="rehister"
        ref="RegisterFormRef"
        :model="RegisterForm"
        :rules="RegisterFormRules"
      >
        <span class="head_image">上传用户头像：</span>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :on-remove="handleRemove"
        >
          <div class="image_me">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </div>
        </el-upload>
        <el-form-item label prop="username">
          <div>用户名</div>
          <el-input v-model="RegisterForm.username" placeholder="请输入用户名" clearable></el-input>
        </el-form-item>
        <el-form-item label prop="pass">
          <div>密码</div>
          <el-input type="password" v-model="RegisterForm.pass" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label prop="checkPass">
          <div>确认密码</div>
          <el-input type="password" v-model="RegisterForm.checkPass" autocomplete="off" clearable></el-input>
        </el-form-item>

        <el-form-item label prop="email">
          <div>通讯邮箱</div>
          <el-input v-model="RegisterForm.email" clearable></el-input>
        </el-form-item>
        <el-form-item label prop="mobile">
          <div>联系电话</div>
          <el-input v-model="RegisterForm.mobile" clearable></el-input>
        </el-form-item>

        <el-form-item>
          <div>
            <el-button type="success" @click="register">注册</el-button>
            <el-button type="danger" @click="registerReset">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="reg_btn">
      <button ref="doClick" class="change_btn" @click="getUrl">——点击注册——</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mian",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.RegisterForm.checkPass !== "") {
          this.$refs.RegisterFormRef.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.RegisterForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      currentURL: this.$router.history.current.fullPath, // /
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
      },

      RegisterForm: {
        username: "",
        pass: "",
        checkPass: "",
        email: "",
        tel: ""
      },
      RegisterFormRules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "change" },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: "请输入正确的号码格式",
            trigger: "change"
          }
        ]
      },
      imageUrl: "",
      bool: true
    };
  },
  components: {},
  methods: {
    // 路径切换 
    getUrl() {
      let loginBlock = document.querySelector(".login");
      let registerBlock = document.querySelector(".register_from");
      if (!this.bool) {
        loginBlock.style.display = "block";
        registerBlock.style.display = "none";
        this.bool = true; 
        return;
      } else {
        loginBlock.style.display = "none";
        registerBlock.style.display = "block";
        this.bool = false; 
        return;
      } 
    },
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
    loginReset() {
      this.$refs.loginFormRef.resetFields();
    },
    // 注册
    register() {
      this.$refs.RegisterFormRef.validate(valid => {
        if (valid) {
          alert("register submit!");
          this.$router.push("/login");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerReset() {
      this.$refs.RegisterFormRef.resetFields();
    },

    handleAvatarSuccess(res, file) {
      alert("上传成功！");
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      alert("正在上传！");
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
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
    .lable_p {
      display: inline-block;
      text-align: right;
      width: 100px;
      padding: 0 10px 0 0;
      margin-left: -100px;
      font-size: 16px;
    }
  }
  .register_from {
    display: none;
    height: 800px;
    .rehister {
      .head_image,
      .avatar-uploader {
        display: inline-block;
        vertical-align: middle;
        .image_me {
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          &:hover {
            border-color: #409eff;
          }
        }
      }
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-input {
    width: 70%;
  }
  .el-form-item__error {
    font-size: 18px !important;
  }
}
</style>