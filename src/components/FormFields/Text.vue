<template>
  <div>
    <label :for="config.id">{{ config.label }}</label>
    <input
      type="text"
      :id="config.id"
      v-model="data"
      @input="validateFullName"
    />
    <p class="error" v-if="errors">{{ errors }}</p>
  </div>
</template>

<script>
import { mapDynamicFields } from "@/mapDynamicFields.js";

export default {
  props: ["config", "id"],
  data() {
    return {
      errors: null,
    };
  },
  computed: {
    ...mapDynamicFields(["formData[].data"], "indexArray"),
    indexArray() {
      return this.id;
    },
  },
  methods: {
    validateFullName() {
      if (!this.data) {
        this.errors = "Full Name is required.";
      } else if (this.data.length < 3) {
        this.errors = "Response must be at least 3 characters.";
      } else {
        this.errors = null;
      }
    },
  },
};
</script>