<template>
  <div id="app">
    <div class="swiper-container" style="width: 100%; height: 100%;">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./assets/image/8.jpg" height="976" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="./assets/image/9.jpg" height="976" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="./assets/image/10.jpg" height="976" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="./assets/image/11.jpg" height="976" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="./assets/image/12.jpg" height="976" width="100%" />
        </div>
      </div>
    </div>
    <Mian />
  </div>
</template>
<script>
import Mian from "./views/main/Main";
export default {
  name: "App",
  components: {
    Mian
  }
};
</script>
<style>
@import "./assets/css/common.css";
</style>
