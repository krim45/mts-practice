<template>
  <ul class="menu-container">
    <li
      class="menu"
      v-for="(menu, idx) in menus"
      :key="idx"
      @click="menu.click"
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
  methods: {},
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
  padding: 25px 25px;
  list-style: none;
}
</style>
