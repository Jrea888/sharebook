<template>
  <div>
    <div class="top-info">
      <div class="title-com">
        <span>个人图书共享系统</span>
      </div>
      <div class="right">
        <div @click="showSelect">
          <img src="@/assets/image/top-login.jpg" alt="用户" />
          <span>点击查看</span>
        </div>
        <div class="person">
          <ul v-show="showInfo">
            <li>
              <a href="javascript:;" @click="psersonTo">个人信息</a>
            </li>
            <li>
              <a href="javascript:;" @click="upDatePass">修改密码</a>
            </li>
            <li>
              <a href="javascript:;" @click="loginOut">退出</a>
            </li>
          </ul>
        </div>
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
      showInfo: false,
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
    },
    showSelect() {
      if (!this.showInfo) {
        this.showInfo = true;
      } else {
        this.showInfo = false;
      }
    },
    psersonTo() {
      this.$router.push("/personinfo");
    },
    upDatePass() {
      this.$router.push("/modifypassword");
    },
    loginOut() {
      // 退出 清除token 并 返回 登录页
      window.sessionStorage.removeItem("token");
      this.$router.push("/main");
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
    right: 5%;
    top: 50%;
    cursor: pointer;
    transform: translate(-50%, -50%);
    img {
      width: 50px;
      border-radius: 25%;
      height: 40px;
    }
    span {
      display: inline-block;
      margin: 0 10px;
      font-size: 20px;
      font-weight: bold;
      color: white;
    }
    .person {
      position: absolute;
      width: 100px;
      vertical-align: middle;
      background-color: #fbf7f7;
      margin: 15px 10px;
      li {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        &:hover {
          background-color: #333;
          a {
            display: inline-block;
            width: 100%;
            &:hover {
              color: white;
            }
          }
        }
      }
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