<template>
  <TheContainer :option="headerOption">
    <form @submit="onSubmit" action="http://localhost:8080/terms/research">
      <ul>
        <li v-for="(item, idx) in list" :key="idx">
          <span>{{ item.label }}</span>
          <select @change="(e) => select(e, idx)" :name="item.name">
            <option
              v-for="(value, index) in item.options"
              :key="index"
              :value="value"
              :disabled="index === 0"
              :selected="index === 0"
            >
              {{ value }}
            </option>
          </select>
        </li>
      </ul>
      <FixedButton v-if="isAllSelected">다음</FixedButton>
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
        title: "고객정보 확인",
        content: "닫기",
      },
      valueArr: [null, null, null, null],
      list: [
        {
          label: "직업",
          name: "job",
          options: ["직업선택", "1", "2"],
        },
        {
          label: "자금출처",
          name: "money",
          options: ["자금출처 선택", "1", "2"],
        },
        {
          label: "투자목적",
          name: "proposal",
          options: ["투자목적 선택", "1", "2"],
        },
        {
          label: "우편번호",
          name: "zipCode",
          options: ["우편번호 선택", "1", "2"],
        },
      ],
    };
  },
  computed: {
    isAllSelected() {
      return this.valueArr.every((v) => v !== null);
    },
  },
  methods: {
    select(e, idx) {
      this.valueArr = this.valueArr.map((value, index) => {
        if (index == idx) {
          return e.target.value;
        }
        return value;
      });
    },
    onSubmit(e) {
      // this.$router.push("research");
    },
  },
};
</script>

<style>
</style>