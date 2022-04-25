<template>
  <ul class="menu-container">
    <li
      class="menu"
      v-for="(menu, idx) in menus"
      :key="idx"
      @click="() => validatePath(menu.path)"
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
    validatePath(path) {
      // 계좌 보유 했으면 이동
      if (this.$store.account) {
        return this.$router.push(path);
      }
      // 없으면 모달
      return false;
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
