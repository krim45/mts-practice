<template>
  <div>
    {{ detail }}
    <div>
      <h2>{{ detail.name }}</h2>
      <h1>{{ detail.price }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      detail: this.$store.state.stock.find((item) => item.id === this.id),
    };
  },
};
</script>
<style>
</style>