<template>
  <div>
    <Header></Header>
    <curr-locat title="书籍列表"></curr-locat>
    <div class="contain">
      <div>
        <el-form
          :inline="true"
          :model="searchBook"
          :rules="searchBookRules"
          ref="searchBookRef"
          class="demo-form-inline"
        >
          <el-form-item label="书籍名称：" prop="bookName">
            <el-input v-model="searchBook.bookName" placeholder="请输入书籍名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="row">
        <div class="col-1">书籍名称</div>
        <div class="col-2">书籍分类</div>
        <div class="col-3">上传时间</div>
        <div class="col-4">操作</div>
      </div>
      <div class="row">
        <div class="col-1">奇妙的水</div>
        <div class="col-2">古典文学</div>
        <div class="col-3">2020-12-15</div>
        <div class="col-4">
          <el-button type="success">查看</el-button>
          <el-button type="primary" @click="addShare">添加共享</el-button>
          <el-button type="danger" @click="deleteFile">删除</el-button>
        </div>
      </div>
      <div class="row">
        <div class="col-1">遇不到的陌生人</div>
        <div class="col-2">古典文学</div>
        <div class="col-3">2021-01-24</div>
        <div class="col-4">
          <el-button type="success">查看</el-button>
          <el-button type="primary" @click="addShare">添加共享</el-button>
          <el-button type="danger" @click="deleteFile">删除</el-button>
        </div>
      </div>
      <div class="row">
        <div class="col-1">对你有帮助的人</div>
        <div class="col-2">现代文学</div>
        <div class="col-3">2020-12-23</div>
        <div class="col-4">
          <el-button type="success">查看</el-button>
          <el-button type="primary" @click="addShare">添加共享</el-button>
          <el-button type="danger" @click="deleteFile">删除</el-button>
        </div>
      </div>
      <div class="pag">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "UploadList",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      searchBook: {
        bookName: ""
      },
      searchBookRules: {
        bookName: [
          { required: true, message: "请输入书籍名称", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onSubmit() {
      console.log(this.searchBook.bookName, "submit!");
      this.$refs.searchBookRef.validate(valid => {
        if (valid) { 
          this.$message.success("查询成功！");   
        } else {
          this.$message.error("请先输入关键字！");   
          return false;
        }
      });
    },
    // 删除文件
    deleteFile() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 添加到共享文件
    addShare() {
      this.$message({
        message: "恭喜你，已添加到共享文件！",
        type: "success"
      });
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
  div[class^="col-"] {
    padding: 15px;
  }
  .col-1 {
    flex: 1;
  }
  .col-2 {
    flex: 1;
  }
  .col-3 {
    flex: 1;
  }
  .col-4 {
    flex: 2;
  }
}
.pag {
  margin-top: 20px;
}
</styleles>