<template>
  <div>
    <Header></Header>
    <curr-locat title="我要上传"></curr-locat>
    <div class="contain">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="书籍名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item label="上传日期" required>
          <el-col :span="11">
            <el-form-item prop="uploadTime">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.uploadTime"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="书籍类型" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择书籍类型">
            <el-option label="古典文学" value="Classics"></el-option>
            <el-option label="现代文学" value="modern literature"></el-option>
            <el-option label="外国名著" value="Foreign masterpieces"></el-option>
            <el-option label="时尚阅读" value="Fashion reading"></el-option>
            <el-option label="侦探推理" value="Detective reasoning"></el-option>
            <el-option label="传记纪实" value="Biography documentary"></el-option>
          </el-select>
        </el-form-item>
        <div class="box">
          <div class="upload-1">*&nbsp;选择书籍封面</div>
          <el-upload
            class="switch-block"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCover"
            :on-remove="handleRemoveCover"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisibleCover">
            <img width="100%" :src="dialogImageUrlCover" alt />
          </el-dialog>
        </div>
        <div class="box bottom">
          <div class="upload-2">*&nbsp;选择版权证件</div>
          <el-upload
            class="switch-block"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCopyRight"
            :on-remove="handleRemoveCopyRight"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisibleCopy">
            <img width="100%" :src="dialogImageUrlCopy" alt />
          </el-dialog>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即上传</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "MyUpload",
  data() {
    return {
      ruleForm: {
        name: "",
        author: "",
        region: "",
        uploadTime: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入书籍名称", trigger: "blur" },
          { min: 1, max: 12, message: "长度在 1 到 12 个字符", trigger: "blur" }
        ],
        author: [
          { required: true, message: "请输入作者名称", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        uploadTime: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      // 封面
      dialogImageUrlCover: "",
      dialogVisibleCover: false,
      // 版权
      dialogVisibleCopy: false,
      dialogImageUrlCopy: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 封面
    handleRemoveCover(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCover(file) {
      this.dialogImageUrlCover = file.url;
      this.dialogVisibleCover = true;
    },
    // 版权
    handlePictureCopyRight(file, fileList) {
      console.log(file, fileList);
    },
    handleRemoveCopyRight(file) {
      this.dialogImageUrlCopy = file.url;
      this.dialogVisibleCopy = true;
    }
  }
};
</script>

<style scoped>
.switch-block {
  display: inline-block;
}
div[class^="upload"] {
  margin: 10px 0;
  font-size: 14px;
  color: #606266;
}
.box {
  padding: 0 20px;
}
.bottom{
  margin-bottom: 20px;
}
</style>