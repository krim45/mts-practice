<template>
  <div>
    <p>
      {{ option.content }}
    </p>
    <div class="btn-container">
      <button @click="closeModal">취소</button>
      <button @click="goNext">{{ textOfYes }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("openModal", {
        number: "01",
        data: false,
      });
    },
  },
};
</script>

<style scoped>
</style>