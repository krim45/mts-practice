<template>
  <TheContainer :option="haederOption">
    <form @submit="onSubmit" action="http://localhost:8080/terms/cdd-edd">
      <div>
        <p>
          <label>
            <input type="checkbox" @change="checkAll" />
            <span>모두 동의합니다.</span>
          </label>
        </p>
      </div>
      <ul>
        <li v-for="(term, idx) in termsList" :key="idx">
          <label>
            <input
              type="checkbox"
              @click="() => checkTerms(idx)"
              :checked="term.checked"
              :name="term.content"
            />
            <span>{{ term.content }}</span>
          </label>
          <span>
            <a :href="term.href" target="_black">
              <img src="@/assets/icon-go.svg" alt="약관 디테일" />
            </a>
          </span>
        </li>
      </ul>
      <FixedButton>다음</FixedButton>
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
      haederOption: {
        title: "서비스신청 및 약관동의",
        content: "닫기",
      },
      allChecked: false,
      termsList: [
        {
          checked: false,
          content: "위험 고지",
          required: true,
          href: "https://www.naver.com/",
        },
        {
          checked: false,
          content: "이용약관",
          required: true,
          href: "https://www.naver.com/",
        },
        {
          checked: false,
          content: "제공 동의",
          required: true,
          href: "https://www.naver.com/",
        },
        {
          checked: false,
          content: "선택 제공 동의",
          required: false,
          href: "https://www.naver.com/",
        },
      ],
    };
  },
  methods: {
    checkAll() {
      this.allChecked = !this.allChecked;
      this.termsList.forEach((term) => {
        term.checked = this.allChecked;
      });
    },
    checkTerms(idx) {
      this.termsList[idx].checked = !this.termsList[idx].checked;
    },
    onSubmit() {
      // this.$router.push("cdd-edd");
    },
  },
};
</script>

<style scoped>
</style>