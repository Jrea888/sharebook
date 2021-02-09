<template>
  <div class="footer">
    <!-- Copyright © 2020 - 2021 西安航空学院  -->
    <p>Copyright &copy; 2020&nbsp;-&nbsp;2021&nbsp;&nbsp;西安航空学院</p>
    <p>学&nbsp;院：计算机学院</p>
    <p>专&nbsp;业：计算机科学与技术</p>
    <p>联系方式：029-23564259</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
  padding: 10px 0;
  background-color: rgb(36, 166, 241);
  p {
    height: 35px;
    line-height: 35px;
    color: white;
    font-size: 18px;
    font-family: "微软雅黑";
  }
}
</style>