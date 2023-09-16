<template>
  <div>
    <label :for="config.label">{{ config.label }}</label>
    <input type="text" :id="config.id" v-model="fll" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  props: ["config"],
  data() {
    return {
      errors: {},
    };
  },
  computed: {
    ...mapFields([`formData.fll`]),
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