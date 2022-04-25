<template>
  <TheContainer :option="headerOption">
    <h2>홈</h2>
    <Navigations :menus="menus" />
    <section>
      <ItemList :option="itemOption" />
    </section>
  </TheContainer>
</template>

<script>
import ItemList from "../components/ItemList.vue";
import Navigations from "../components/Navigations.vue";
import TheContainer from "../layouts/TheContainer.vue";

export default {
  name: "home",
  components: { Navigations, TheContainer, ItemList },
  data() {
    return {
      menus: [
        {
          content: "주식 검색",
          path: "/search",
        },
        {
          content: "서비스 신청",
          path: "/application",
        },
      ],
      headerOption: {
        icon: true,
        title: "서비스 둘러보기",
        content: "닫기",
      },
      itemOption: {
        title: "수익률 BEST 10",
        standard: true,
        list: [
          {
            name: "카카오뱅크",
            price: "19431",
            percentage: "22.87",
            src: "https://kr.vuejs.org/images/logo.png",
          },
          {
            name: "카카오뱅크",
            price: "19431",
            percentage: "22.87",
            src: "https://kr.vuejs.org/images/logo.png",
          },
          {
            name: "카카오뱅크",
            price: "19431",
            percentage: "22.87",
            src: "https://kr.vuejs.org/images/logo.png",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 50px 0;
}
</style>
