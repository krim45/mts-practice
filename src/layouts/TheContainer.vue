<template>
  <div>
    <TheHeader :option="option" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";

export default {
  components: { TheHeader },
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
main {
  margin-top: 100px;
}
</style>