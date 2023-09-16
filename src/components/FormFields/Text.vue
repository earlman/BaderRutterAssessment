<template>
  <div>
    <label :for="config.label">{{ config.label }}</label>
    <input type="text" :id="config.id" v-model="data" />
    <p v-if="errors.fullName">{{ errors.fullName }}</p>
  </div>
</template>

<script>
import { mapDynamicFields } from "@/mapDynamicFields.js";

export default {
  props: ["config", "id"],
  data() {
    return {
      errors: {},
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
      if (!this.fullName) {
        this.errors.fullName = "Full Name is required.";
      } else if (this.fullName.length < 3) {
        this.errors.fullName = "Full Name must be at least 3 characters.";
      } else {
        delete this.errors.fullName;
      }
    },
  },
};
</script>