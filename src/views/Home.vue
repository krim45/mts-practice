<template>
  <div>
    <TheContainer :option="headerOption">
      <h2>홈</h2>
      <Navigations :menus="menus" />
      <section>
        <ItemList :option="itemOption" />
      </section>
    </TheContainer>
    <ModalYesOrNo :option="modalOption" />
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";
import ModalYesOrNo from "../components/ModalYesOrNo.vue";
import Navigations from "../components/Navigations.vue";
import TheContainer from "../layouts/TheContainer.vue";

export default {
  name: "home",
  components: { Navigations, TheContainer, ItemList, ModalYesOrNo },
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
          validation: true,
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
            price: 19431,
            percentage: 22.87,
            src: "https://kr.vuejs.org/images/logo.png",
          },
          {
            name: "카카오뱅크",
            price: 19431,
            percentage: 22.87,
            src: "https://kr.vuejs.org/images/logo.png",
          },
          {
            name: "카카오뱅크",
            price: 19431,
            percentage: 22.87,
            src: "https://kr.vuejs.org/images/logo.png",
          },
        ],
      },
      modalOption: {
        content: "카카오뱅크 계좌가 필요한 메뉴입니다.",
        type: "01",
        path: "/application",
        textOfYes: "계좌 만들기",
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
