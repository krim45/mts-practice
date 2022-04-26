<template>
  <ul class="menu-container">
    <li
      class="menu"
      v-for="(menu, idx) in menus"
      :key="idx"
      @click="() => validatePath(menu)"
    >
      {{ menu.content }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
  methods: {
    validatePath({ path, validation }) {
      // 계좌 보유 했으면 이동
      if (!validation || this.$store.state.kakaoAccount) {
        return this.$router.push(path);
      }
      // 없으면 모달
      this.$store.commit("setModalCase", {
        type: "01",
        data: true,
      });
    },
  },
};
</script>

<style scoped>
.menu-container {
  display: flex;
  justify-content: center;
}

.menu {
  border: 1px solid #000;
  background: #fff;
  padding: 30px 50px;
  list-style: none;
}
</style>
