<template>
  <div>
    <div class="top-info">
      <div class="right">
        <img src="@/assets/image/musict.jpg" alt="用户" />
        <span>当前用户：张三</span>
        <button>退出</button>
      </div>
    </div>
    <div class="titile-img">
      <!-- ~assets/image/8.jpg -->
      <img src="@/assets/image/hander.jpg" alt="个人图书共享系统" />
    </div>
    <!-- 导航条 -->
    <div class="nav">
      <li>
        <a href="javascript:;">首页</a>
      </li>
      <li>
        <a href="javascript:;">我的上传</a>
      </li>
      <li>
        <a href="javascript:;">书籍列表</a>
      </li>
      <li>
        <a href="javascript:;">我的共享</a>
      </li>
      <li>
        <a href="javascript:;">我要留言</a>
      </li>
      <li>
        <a href="javascript:;">公告栏</a>
      </li>
      <li>
        <a href="javascript:;">我的反馈</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.top-info {
  position: relative;
  height: 100px;
  width: 100%;
  background-color: #24A6F1;
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
      font-size: 22px;
      font-weight: bold;
      color: white;
    }
    button {
      padding: 5px 15px;
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
  background-color: #24A6F1;
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