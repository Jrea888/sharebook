<template>
  <div>
    <div class="top-info">
      <div class="title-com">
        <span>个人图书共享系统</span>
      </div>
      <div class="right">
        <img src="@/assets/image/musict.jpg" alt="用户" />
        <span>欢迎你！张三</span>
        <el-button class="out" type="success">退出系统</el-button>
      </div>
    </div>
    <div class="titile-img">
      <img src="@/assets/image/hander.jpg" alt="个人图书共享系统" />
    </div>
    <!-- 导航条 -->
    <div class="nav">
      <li v-for="(item,index) in pageLists" :key="index">
        <a href="javascript:;" @click="routeTo(item.path)">{{item.name}}</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      pageLists: [
        { name: "首页", id: "0", path: "/home" },
        { name: "我的上传", id: "1", path: "/myupload" },
        { name: "书籍列表", id: "2", path: "/uploadlist" },
        { name: "我的共享", id: "3", path: "/sharebook" },
        { name: "我要留言", id: "4", path: "/leavemessage" },
        { name: "公告栏", id: "5", path: "/announce" },
        { name: "我的反馈", id: "6", path: "/feedback" }
      ]
    };
  },
  methods: {
    OtherPage() {},
    routeTo: function(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="less" scoped>
.top-info {
  position: relative;
  height: 100px;
  width: 100%;
  background-color: #72b2f5;
  .right {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 50px;
      border-radius: 50%;
    }
    span {
      display: inline-block;
      margin: 0 10px;
      font-size: 20px;
      font-weight: bold;
      color: white;
    }
    .out {
      padding: 10px;
    }
  }
  .title-com {
    position: absolute;
    top: 20%;
    left: 5%;
    span {
      font-size: 35px;
      letter-spacing: 10px;
      font-family: "隶书";
      color: #fbf7f9;
      text-shadow: 4px 13px 12px #218bf7;
    }
  }
}
.titile-img {
  height: 200px;
  width: 100%;
  img {
    width: 100%;
    height: 200px;
  }
}
.nav {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  background-color: #24a6f1;
  li {
    width: 100%;
    text-align: center;
    a {
      display: inline-block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: white;
      &:hover {
        color: #000000;
        background-color: #fff;
      }
    }
  }
}
</style>