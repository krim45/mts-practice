<template>
  <div class="btn-container">
    <div>
      <Button :css="css">
        <slot />
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  props: ["css"],
};
</script>

<style scoped>
.btn-container {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}

.btn-container > div {
  padding: 0 20px 18px;
}
</style>
