<template>
  <button :style="css">
    <slot />
  </button>
</template>

<script>
export default {
  props: ["css"],
};
</script>

<style scoped>
button {
  width: 100%;
  font-size: 17px;
  height: 56px;
  border: 0 solid transparent;
  border-radius: 16px;
  color: #000;
  background: #f9e000;
}
</style>