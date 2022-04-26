<template>
  <div v-if="this.$store.state[`modalCase${option.type}`]" class="container">
    <div class="modal-container">
      <div class="content-container">
        <p>
          {{ option.content }}
        </p>
      </div>
      <div class="btn-container">
        <button class="btn-no" @click="closeModal">취소</button>
        <button class="btn-yes" @click="goNext">{{ option.textOfYes }}</button>
      </div>
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
      this.$store.commit("setModalCase", {
        type: this.option.type,
        data: false,
      });
    },
    goNext() {
      this.$router.push(this.option.path);
    },
  },
};
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 300px;
  height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.content-container {
  flex: 8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-container {
  display: flex;
  flex: 2;
}

button {
  width: 100%;
}

.btn-no {
  flex: 4;
}

.btn-yes {
  flex: 6;
}
</style>