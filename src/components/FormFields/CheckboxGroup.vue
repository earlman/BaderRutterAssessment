<template>
  <div>
    <div>
      <label>{{ config.label }}</label>
      <div v-for="o in config.options" :key="option">
        <input type="checkbox" :value="o" v-model="rfr" />
        <label>{{ o }}</label>
      </div>
      <p v-if="errors.reference">{{ errors.reference }}</p>
    </div>

    <label :for="config.label">{{ config.label }}</label>
    <input type="text" :id="config.id" v-model="tlp" />
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
    ...mapFields([`formData.rfr`]),
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