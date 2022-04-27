<template>
  <TheContainer :option="headerOption">
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <FixedButton @click.native="$router.replace(path)">확인</FixedButton>
  </TheContainer>
</template>

<script>
import FixedButton from "../../components/FixedButton.vue";
import TheContainer from "../../layouts/TheContainer.vue";

export default {
  components: { TheContainer, FixedButton },
  data() {
    return {
      path: {
        path: "/terms",
        query: {
          check: true,
        },
      },
      headerOption: {
        icon: true,
        title: "약관 설명서",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
header {
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0;
  background: gray;
}

.go-back-btn {
  position: absolute;
  left: 30px;
}
</style>