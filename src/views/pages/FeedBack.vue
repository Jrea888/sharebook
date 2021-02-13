<template>
  <div>
    <Header></Header>
    <curr-locat title="查看反馈"></curr-locat>
    <div class="contain">
      <div>
        <div class="leave-msg">
          <p>如果不是因为她实力不弱，恐怕王圣就要骂人了，吃饭花钱还用说么？谁会给白吃的午餐？不过他自然也看得出，这位新任老大恐怕和唐三一样，也是囊中羞涩。王圣豪气的道：“没事，这样吧，这两天你们的伙食费算我的。唐三，以后大家就是同宿舍的伙伴了，一起去吧。大不了等你有钱再请我就是了。”</p>
          <div class="right-bottom">
            <span>留言日期：2020-12-14</span>
            <span>留言管理员：刘恒容</span>
          </div>
        </div>
        <div class="leave-msg">
          <p>如果不是因为她实力不弱，恐怕王圣就要骂人了，吃饭花钱还用说么？谁会给白吃的午餐？不过他自然也看得出，这位新任老大恐怕和唐三一样，也是囊中羞涩。王圣豪气的道：“没事，这样吧，这两天你们的伙食费算我的。唐三，以后大家就是同宿舍的伙伴了，一起去吧。大不了等你有钱再请我就是了。”</p>
          <div class="right-bottom">
            <span>留言日期：2020-12-14</span>
            <span>留言管理员：张丽德</span>
          </div>
        </div>
        <div class="leave-msg">
          <p>如果不是因为她实力不弱，恐怕王圣就要骂人了，吃饭花钱还用说么？谁会给白吃的午餐？不过他自然也看得出，这位新任老大恐怕和唐三一样，也是囊中羞涩。王圣豪气的道：“没事，这样吧，这两天你们的伙食费算我的。唐三，以后大家就是同宿舍的伙伴了，一起去吧。大不了等你有钱再请我就是了。”</p>
          <div class="right-bottom">
            <span>留言日期：2020-12-14</span>
            <span>留言管理员：彭勇</span>
          </div>
        </div>
      </div>
      <div class="pagin">
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
  name: "FeedBack",
  data() {
    return {
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
.leave-msg {
  padding: 10px;
  border-bottom: 1px solid #c1bcbc;
  p {
    color: #333;
    text-indent: 32px;
    font-size: 16px;
    line-height: 28px;
    font-family: "微软雅黑";
    letter-spacing: 1px;
  }
  .right-bottom {
    text-align: right;
    color: #333;
    span {
      display: inline-block;
      margin: 0 10px;
    }
  }
}
.pagin{
  margin-top: 15px;
}
</style>