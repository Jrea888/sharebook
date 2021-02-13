<template>
  <div>
    <Header></Header>
    <curr-locat title="书籍列表"></curr-locat>
    <div class="contain">
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="bookNmae" label="书籍名称" width="180"></el-table-column>
          <el-table-column prop="uptime" label="上传时间" width="180"></el-table-column>
          <el-table-column prop="other" label="操作"></el-table-column>
        </el-table>
      </div>
      <div>
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
      tableData: [
        {
          bookNmae: "奇妙的水",
          uptime: "2016-05-02",
          other: "上海市普陀区金沙江路 1518 弄"
        },
        {
          bookNmae: "奇妙的水",
          uptime: "2016-05-04",
          other: "上海市普陀区金沙江路 1517 弄"
        },
        {
          bookNmae: "奇妙的水",
          uptime: "2016-05-01",
          other: "上海市普陀区金沙江路 1519 弄"
        },
        {
          bookNmae: "奇妙的水",
          uptime: "2016-05-03",
          other: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
</style>