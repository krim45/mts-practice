<template>
  <TheContainer :option="headerOption">
    <form @submit.prevent="onSubmit">
      <ul>
        <li v-for="(item, idx) in list" :key="idx">
          <label @click="() => selectData(idx)">
            <input type="radio" name="investment" />
            {{ item.content }}
            <span>{{ item.small }}</span>
          </label>
        </li>
      </ul>
      <FixedButton v-if="selected">다음</FixedButton>
    </form>
  </TheContainer>
</template>

<script>
import FixedButton from "../../components/FixedButton.vue";
import TheContainer from "../../layouts/TheContainer.vue";
export default {
  components: { TheContainer, FixedButton },
  data() {
    return {
      headerOption: {
        title: "투자성향 제공여부",
        content: "닫기",
      },
      list: [
        {
          data: false,
          content: "제공하지 않겠습니다.",
          small: "제공하지 않아도 이용이 가능합니다.",
        },
        {
          data: true,
          content: "제공하고 권유 받겠습니다.",
          small: "적합한 투자권유를 받을 수 있습니다.",
        },
      ],
      selected: null,
    };
  },
  methods: {
    onSubmit() {
      // 로그인 처리 필요
      this.$store.commit("setLogin", { data: true });
      console.log(this.$store.state.login);
      this.$router.push("/");
    },
    selectData(idx) {
      this.selected = this.list[idx];
    },
  },
};
</script>

<style>
</style>