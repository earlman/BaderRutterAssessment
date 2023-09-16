<template>
  <div v-show="getModal" class="modal-overlay">
    <div class="modal">
      <div>
        <button @click="closeModal">Close</button>
      </div>
      <p>{{ getModal.content }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getModal"]),
  },
  methods: {
    ...mapActions(["closeModal"]),
  },
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-family: sans-serif;
  }
}
</style>
