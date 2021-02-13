<template>
  <div class="home">
    <Header></Header>
    <div class="main">
      <div class="content">
        <div class="swiper">
          <img src="../../assets/image/left1.jpg" alt />
        </div>
        <div class="introduce">
          <h3>背景</h3>
          <p>随着信息技术的日益成熟,以及高等院校图书馆信息化建设的不断完善,未来高等院校图书馆必然朝着信息资源共建共享的方向发展.现阶段,高等院校图书馆在信息共建共享服务中存在着诸多问题,例如资源共享意识淡薄,管理体制滞后,馆员素质偏低,信息安全和版权问题等.这些问题制约着高等院校图书馆信息共建共享服务的发展.对于"共享图书"这类课题，可以有效促进高等院校图书馆信息共建共享的发展。</p>
        </div>
      </div>
      <div class="development clearfix">
        <div class="title-sub">
          <h3>共享图书发展史</h3>
        </div>
        <div class="de-con-info">
          <h3>1.建设全民阅读共享空间是满足全民阅读需求多样化的需要</h3>
          <p>民众在参与全民阅读活动中，很容易激发潜在的阅读兴趣，产生多样化的阅读需求，如在阅读纸本图书的时候,想要拥有相应图书的电子版;在阅读经典的时候希望看到有关书评;在阅读疲惫的时候，想要拥有视听版图书;读了一本推荐的书，想要阅读类似的更多图书等。要避免全民阅读活动流于形式或成为单纯的政绩工程,必须让全民阅读活动取得的成果可以分享，让被激发了阅读需求的人民群众的多样化阅读需求得到充分满足，从这一点来说，建设全民阅读共享空间不仅可行，而且必要，通过营造一个融入人民群众生活、学习、工作中的阅读环境即全民阅读共享空间，使阅读活动能够突破传统的物理场所、载体限制，向信息化、网络化、智能化方面有效延伸，让人民群众在阅读中充分汲取、分享、传播知识，提升素质，陶冶情操，升华品格。</p>
          <h3>2.建设全民阅读共享空间是调动阅读推广中坚力量积极性、创造性的需要</h3>
          <p>
            作为一项建民心、启民智的希望工程，但是在实际发展中，作为中坚力量的图书馆和民间组织团体的积极性和创造性并没有被有效激发，主要表现在:
          </p>
          <p>
            1)民间组织团体如中华经典读书会、红泥巴网、读者俱乐部、民间基金会等多为自发开展全民阅读推广活动，由于与政府和专业机构缺少合作、沟通和互动，在全民阅读推广中的作用没有完全显现。
          </p>
          <p>
            2)图书馆尤其是一些基层、社区图书馆受到资源、馆舍、人员等条件制约，在全民阅读活动中存在边缘化的趋势，而实际上基层、社区图书馆应该是全民阅读活动的主要阵地。建设全民阅读共享空间可以将民间团体组织和公共图书馆尤其是基层、社区图书馆有效纳入阅读服务体系，发挥其在全民阅读活动中的影响和积极作用。通过经费支持、活动指导、布局规划等方式，有效促进民间团体组织活动开展和基层社区图书馆合理布局。
          </p>
        </div>
        <div class="img-info">
          <img src="../../assets/image/right2.jpg" alt />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script> 
export default {
  name: "Home",
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.main{
  width: 1200px;
  height: auto;
  margin: 10px auto;
  box-shadow: 0px 4px 10px 0px #949494;
}
.content {
  padding: 10px;
  display: flex;
  div {
    flex: 1;
    height: 400px;
  }
  .swiper {
    img {
      width: 100%;
      height: 400px;
      border: 1px solid #c3c3c3;
    }
  }
  .introduce {
    padding: 35px 45px;
    background: url("../../assets/image/bg-text.jpg") no-repeat;
    background-size: 100%;
    margin: 0 10px;
    h3 {
      text-align: center;
      color: #333;
      letter-spacing: 8px;
      margin: 50px 0 20px 0;
    }
    p {
      color: #333;
      text-indent: 32px;
      font-size: 16px;    
      line-height: 28px;
      font-family: "微软雅黑";
      letter-spacing: 2px;
    }
  }
}
.development {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  .title-sub {
    width: 1200px;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    border-bottom: 1px solid #c3c3c3;
    h3{
      color: #333;
    }
  }
  .de-con-info {
    width: 50%;     
    float: left;
    padding: 20px;
    p{
      color: #333;
      text-indent: 32px;
      font-size: 16px;    
      line-height: 28px;
      font-family: "微软雅黑";
      letter-spacing: 1px;
    }
    h3{
      color: #333;
    }
  }
  .img-info {
    float: right;
    width: 50%; 
    img {    
      width: 97%;
      height: 750px;
      padding: 10px;
      border: 1px solid #c3c3c3;
      margin: 10px;
    }
  }
}
</style>
