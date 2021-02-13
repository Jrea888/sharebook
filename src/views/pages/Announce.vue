<template>
  <div>
    <Header></Header>
    <curr-locat title="公告栏"></curr-locat>
    <div class="contain">
      <h2>书籍共享须知</h2>
      <div class="sub-title">
        <span>管理员：刘恒羽</span>
        <span>发布时间：2021-01-25</span>
      </div>
      <div class="author-contant">
        <p>墨痕道：“明天是开学典礼。后天开始正式上课，一年级在教学楼一层一班上课，后天你们准时上课就行了。从后天开始，你们再正常进行工作。我会不定期抽查。好了，你们先休息吧。王圣，这里你最大，把规矩都和他们说说</p>
        <p>一边说着，她的目光终于落在唐三手中的铺盖上，“唐三，我们商量一下怎么样？” 唐三愣了一下，心中明白，小舞恐怕是看上自己手中的铺盖了。他到不是小气的人，但这铺盖是大师刚刚送给他的，心中多少有些不舍。但小舞又是女孩子。</p>
        <p>唐三下意识的把自己的床推到小舞床边。小舞接过他手中的被褥，先把褥子铺在床上。这被褥是成年人用的，确实很大，虽然无法铺满两张床，但也都能覆盖百分之七十以上。小舞把自己的包袱放在两张床拼起来的床缝处，“把你的包袱也放过来，以后这就是边界。你要是越界，可别怪我不客气哦。”</p>
        <p>王圣和其他工读生面面相觑，苦笑道：“我们工读生能吃什么好的？在食堂里随便买点便宜的饭菜凑或一下就是了。”唐三摇了摇头，道：“你们去吧，我就不去了。”家里穷的叮当响，唐昊的钱都换酒喝了，为了不饿肚子，他特意带了一些干粮，是他自己做的粗饼。简单果腹还是没问题的。后天开始工作后就有工资拿了。</p>
        <p>如果不是因为她实力不弱，恐怕王圣就要骂人了，吃饭花钱还用说么？谁会给白吃的午餐？不过他自然也看得出，这位新任老大恐怕和唐三一样，也是囊中羞涩。王圣豪气的道：“没事，这样吧，这两天你们的伙食费算我的。唐三，以后大家就是同宿舍的伙伴了，一起去吧。大不了等你有钱再请我就是了。”</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "Announce"
};
</script>

<style lang="less" scoped>
.contain {
  h2 {
    text-align: center;
    color: #333;
  }
  .sub-title {
    height: 50px;
    line-height: 50px;
    text-align: right;
    padding: 0 20px;
    span {
      color: #333;
      display: inline-block;
      padding: 0 10px;
    }
  }
}
.author-contant {
  p {
    color: #333;
    text-indent: 32px;
    font-size: 16px;
    line-height: 28px;
    font-family: "微软雅黑";
    letter-spacing: 1px;
  }
}
</style>