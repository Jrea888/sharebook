<template>
  <div>
    <Header></Header>
    <curr-locat title="我的共享"></curr-locat>
    <div class="contain">
      <div class="book-list">
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
        <div class="item">
          <img src="../../assets/image/book1.jpg" alt />
          <div>奇妙的水</div>
        </div>
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
  name: "ShareBook",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
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

<style lang="less" scoped>
.book-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  .item {
    flex-direction: column;
    margin: 26px;
    text-align: center;
    cursor: pointer;
    img{
      width: 180px;
    }
    div{
      font-size: 14px;
      color: #333;
      margin-top: 10px;
    }
  }
}
</style>