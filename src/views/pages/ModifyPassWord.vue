<template>
  <div>
    <Header></Header>
    <curr-locat title="修改密码"></curr-locat>
    <div class="contain">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="row">
          <div class="col-1"></div>
          <div class="col-2">
            <el-form-item label="新密码：" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-2">
            <el-form-item label="确定新密码：" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-2">
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "ModifyPassWord",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log(formName,"123");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #a29a9a;
  color: #333;
  font-size: 16px;
  .col-1 {
    flex: 1;
    padding: 20px;
  }
  .col-2 {
    flex: 4;
    padding: 20px;
  }
}
</style>