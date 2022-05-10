<template>
  <TheContainer :option="headerOption">
    <div>
      <p>선택한 계좌로 국내주식 거래 서비스 신청을 진행하시겠습니까?</p>
    </div>
    <form @change="selectAccount">
      <label v-for="(account, idx) in accounts" :key="idx">
        {{ account.number }}
        <input :id="account.id" type="radio" name="account" />
      </label>
    </form>
    <FixedButton v-if="account" @click.native="applyService"
      >서비스 신청하기</FixedButton
    >
  </TheContainer>
</template>

<script>
import FixedButton from "../../components/FixedButton.vue";
import TheContainer from "../../layouts/TheContainer.vue";
export default {
  components: { TheContainer, FixedButton },
  data() {
    return {
      account: null,
      headerOption: {
        content: "닫기",
      },
      accounts: [
        {
          id: "1",
          number: 123213213,
        },
        {
          id: "2",
          number: 567657565,
        },
        {
          id: "3",
          number: 345345353,
        },
      ],
    };
  },
  methods: {
    selectAccount(e) {
      this.account = this.accounts.find((item) => e.target.id === item.id);
    },
    applyService() {
      // 등록 아이디가 복수인 경우

      // 아닌 경우
      this.$router.push("service-terms");
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>