<template>
  <div>
    <Header></Header>
    <curr-locat title="个人信息"></curr-locat>
    <div class="contain">
      <div class="row">
        <div class="col-1">个人头像：</div>
        <div class="col-2">
          <img src="../../assets/image/musict.jpg" width="150" alt />
        </div>
      </div>
      <div class="row">
        <div class="col-1">姓名：</div>
        <div class="col-2">张三</div>
      </div>
      <div class="row">
        <div class="col-1">密码：</div>
        <div class="col-2">123456789</div>
      </div>
      <div class="row">
        <div class="col-1">邮箱：</div>
        <div class="col-2">1944452034@qq.com</div>
      </div>
      <div class="row">
        <div class="col-1">联系电话：</div>
        <div class="col-2">18142422763</div>
      </div>
      <div class="row">
        <div class="col-1">操作</div>
        <div class="col-2">
          <el-button type="success" @click="dialogFormVisible = true">修改个人信息</el-button>
          <el-dialog title="修改个人信息" :visible.sync="dialogFormVisible" @close="addDialogClosed" >
            <el-form :model="modifyPersonForm" :rules="modifyPersonRules" ref="modifyPersonFormRef">
              <el-form-item label="名称：" prop="name" :label-width="formLabelWidth">
                <el-input v-model="modifyPersonForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：" prop="email" :label-width="formLabelWidth">
                <el-input v-model="modifyPersonForm.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="电话：" prop="phone" :label-width="formLabelWidth">
                <el-input v-model="modifyPersonForm.phone" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="modifyInfo">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "PersonInfo",
  data() {
    //  自定义校验 邮箱和手机号
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])/;
      if (regEmail.test(value)) {
        // 为 true 就是合法邮箱
        return cb();
      }
      cb(new Error("请输入合法的邮箱！"));
    };
    var checkPhone = (rule, value, cb) => {
      const regMobail = /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobail.test(value)) {
        // 为 true 就是合法邮箱
        return cb();
      }
      cb(new Error("请输入合法的电话号码！"));
    };
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        email: "",
        phone: ""
      },
      formLabelWidth: "120px",
      modifyPersonForm: {
        name: "",
        email: "",
        phone: ""
      },
      modifyPersonRules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            validator: checkEmail,
            trigger: "blur"
          }
        ],
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 修改用户信息
    modifyInfo() {
      // 表单的预校验  和  发送网络请求
      this.$refs.modifyPersonFormRef.validate(async valid => {
        console.log(valid);
        if (!valid) return;
        // 发送网络请求 和 刷新用户列表信息
        // const { data: res } = await this.$http.post("/users", this.addUserForm);
        // if (res.meta.status !== 201) {
        //   this.$message.error("添加用户失败！");
        // }
        // 隐藏 弹出框
        this.dialogFormVisible = false;
        // // 刷新用户列表
        // this.getUserList();
      });
    },
    // 关闭添加信息 对话框的选中
    addDialogClosed() {
      this.$refs.modifyPersonFormRef.resetFields();
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
    flex: 2;
    padding: 20px;
  }
}
</style>