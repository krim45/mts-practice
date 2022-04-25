<template>
  <div class="btn-container">
    <div>
      <button @click="$router.push(path)">
        <slot />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
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

button {
  width: 100%;
  font-size: 17px;
  height: 56px;
  border: 0 solid transparent;
  border-radius: 16px;
}
</style>
