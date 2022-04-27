<template>
  <TheContainer :option="option">
    <div class="img">
      <p>
        img <br />
        국내주식 서비스 신청을 위해 아래 내용에 동의해 주세요.
      </p>
    </div>
    <ul>
      <li @click="goToDis">
        <span>
          <input
            type="checkbox"
            name="necssary_terms"
            @click.stop="clickBox"
            v-model="isChecked"
          />
          <label for="necssary_terms">필수 동의</label>
        </span>
        <div>
          <p>
            금융거래정보 제공 동의서(국내주식 서비스)<br />
            제공대상: 증권사명<br />
            제공목적: 설명이 들어갑니다.
          </p>
        </div>
      </li>
    </ul>
    <FixedButton
      v-if="isChecked"
      @click.native="$router.push('account-selection')"
    >
      다음
    </FixedButton>
  </TheContainer>
</template>

<script>
import FixedButton from "../../components/FixedButton.vue";
import TheContainer from "../../layouts/TheContainer.vue";

export default {
  components: { TheContainer, FixedButton },
  data() {
    return {
      option: {
        title: "금융거래정보제공",
        content: "취소",
      },
      isChecked: this.$route.query.check || false,
    };
  },
  methods: {
    clickBox() {
      if (this.isChecked) {
        this.isChecked = false;
      } else {
        this.goToDis();
      }
    },
    goToDis() {
      this.$router.replace("discription");
    },
  },
};
</script>

<style scoped>
div.img {
  height: 200px;
  background: gray;
}

h2 {
  text-align: center;
}

li {
  background: red;
}
</style>