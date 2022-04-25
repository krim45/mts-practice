<template>
  <header>
    <button class="go-back-btn" v-show="option.icon" @click="$router.go(-1)">
      <img src="@/assets/icon-back.svg" alt="go-back-icon" />
    </button>
    <h2 class="title">{{ option.title }}</h2>
    <button class="close-btn" v-show="option.content" @click="$router.go(-1)">
      {{ option.content }}
    </button>
  </header>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
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

button {
  position: absolute;
}

.go-back-btn {
  left: 30px;
}

.close-btn {
  right: 30px;
}
</style>