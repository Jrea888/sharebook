<template>
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

      <el-form-item label="用户名" prop="username">
        <el-input v-model="RegisterForm.username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="RegisterForm.pass"
          placeholder="请输入密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="RegisterForm.checkPass"
          placeholder="请输入确认密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="通讯邮箱" prop="email">
        <el-input v-model="RegisterForm.email" placeholder="请输入邮箱" clearable></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="mobile">
        <el-input v-model="RegisterForm.mobile" placeholder="请输入电话" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <div>
          <el-button type="success" @click="register">注册</el-button>
          <el-button type="danger" @click="reset">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Register",
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
      imageUrl: ""
    };
  },
  components: {},
  methods: {
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
    reset() {
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
.register_from {
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
</style>  