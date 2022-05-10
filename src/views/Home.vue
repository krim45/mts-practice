<template>
  <TheContainer :option="headerOption">
    <Swiper></Swiper>
    <Navigations :menus="menus" />
    <section>
      <List :option="listOption" />
    </section>
    <ModalYesOrNo :option="modalOption" />
  </TheContainer>
</template>

<script>
import TheContainer from "../layouts/TheContainer.vue";
import List from "../components/List.vue";
import ModalYesOrNo from "../components/ModalYesOrNo.vue";
import Navigations from "../components/Navigations.vue";
import Swiper from "../components/Swiper.vue";

export default {
  name: "home",
  components: { Navigations, TheContainer, List, ModalYesOrNo, Swiper },
  data() {
    return {
      menus: this.$store.state.login
        ? [
            {
              content: "주식 검색",
              click: () => this.$router.push("/search"),
            },
            {
              content: "주문내역",
              click: () => this.$router.push("/search"),
            },
            {
              content: "이체내역",
              click: () => this.$router.push("/search"),
            },
          ]
        : [
            {
              content: "주식 검색",
              click: () => this.$router.push("/search"),
            },
            {
              content: "서비스 신청",
              click: () => {
                // 계좌 보유 했으면 이동
                if (this.$store.state.kakaoAccount) {
                  return this.$router.push("/terms");
                }
                // 없으면 모달
                this.$store.commit("setModalCase", {
                  data: true,
                });
              },
            },
          ],
      headerOption: {
        title: "서비스 둘러보기",
        content: "닫기",
      },
      listOption: {
        title: "수익률 BEST 10",
        standard: true,
        list: [
          {
            id: 1,
            name: "카카오뱅크1",
            price: 19431,
            percentage: 22.87,
            src: "https://kr.vuejs.org/images/logo.png",
          },
          {
            id: 2,
            name: "카카오뱅크2",
            price: 19431,
            percentage: 22.87,
            src: "https://kr.vuejs.org/images/logo.png",
          },
          {
            id: 3,
            name: "카카오뱅크3",
            price: 19431,
            percentage: 22.87,
            src: "https://kr.vuejs.org/images/logo.png",
          },
        ],
      },
      modalOption: {
        type: "01",
        content: "카카오뱅크 계좌가 필요한 메뉴입니다.",
        textOfYes: "계좌 만들기",
        click: () => this.$router.push("/terms"),
      },
    };
  },
};
</script>

<style scoped>
</style>
