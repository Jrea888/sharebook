<template>
  <div>
    <!-- 背景轮播图 -->
    <swiper-back></swiper-back>
    <index-info></index-info>
  </div>
</template>

<script>
import SwiperBack from "@/components/common/swiper.vue";
import indexInfo from "../index.vue";
export default {
  name: "Mian",
  data() {
    return {};
  },
  components: { SwiperBack, indexInfo },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>