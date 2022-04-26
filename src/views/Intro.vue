<template>
  <div>
    <div>
      <h2>img</h2>
    </div>
    <div>
      <p>국내주식 거래 시작하기</p>
    </div>
    <FixedButton :path="path">국내주식 둘러보기</FixedButton>
  </div>
</template>

<script>
import FixedButton from "@/components/FixedButton.vue";

export default {
  components: {
    FixedButton,
  },
  data() {
    return {
      path: "/",
    };
  },
};
</script>

<style></style>
