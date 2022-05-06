<template>
  <div class="wrapper">
    <div class="swiper-container">
      <div
        class="swiper"
        ref="swiper"
        @mousedown="touchStart"
        @mouseup="touchEnd"
        @touchstart="touchStart"
        @touchend="touchEnd"
      >
        <h1 :style="{ width: `${width}px` }">1</h1>
        <h1 :style="{ width: `${width}px` }">2</h1>
        <h1 :style="{ width: `${width}px` }">3</h1>
        <h1 :style="{ width: `${width}px` }">4</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      innerwidth: null,
      width: null,
      startX: null,
      curPage: 0,
    };
  },
  mounted() {
    window.addEventListener("resize", this.applyWidth); // Throttle 적용하기
    this.applyWidth();
  },
  methods: {
    applyWidth() {
      const innerwidth = window.innerWidth;
      this.innerwidth = innerwidth;
      this.width = innerwidth * 0.95;
    },
    touchStart(e) {
      this.startX = e.pageX || e.touches[0].pageX;
    },
    touchEnd(e) {
      const endX = e.pageX || e.changedTouches[0].pageX;

      if (this.startX < endX && this.curPage > 0) {
        this.curPage = this.curPage - 1;
      } else if (this.startX > endX && this.curPage < 3) {
        this.curPage = this.curPage + 1;
      }
    },
  },
  watch: {
    curPage() {
      this.$refs.swiper.style.transform = `translate(${
        this.curPage * this.innerwidth * -0.975
      }px, 0)`;
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.applyWidth);
  },
};
</script>
<style scoped>
.wrapper {
  padding: 0 2.5vw;
  background: pink;
}
.swiper-container {
  width: 100%;
  height: 300px;
  position: relative;
  margin: 20px 0;
  overflow: hidden;
}

.swiper {
  width: 95vw;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
  transform: translate(0, 0);
}

h1 {
  flex-shrink: 0;
  background: green;
  padding: 100px 0;
  margin-right: 2.5vw;
  text-align: center;
}
</style>