<template>
  <div>
    <div>
      <label :for="config.label">{{ config.label }}</label>
      <select id="interest" v-model="data" @change="validateInterest">
        <option disabled value="">Please select an interest</option>
        <option v-for="o in config.options" :key="o">{{ o }}</option>
      </select>
      <p v-if="errors.interest">{{ errors.interest }}</p>
    </div>
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
    validateInterest() {
      if (!this.interest) {
        this.errors.interest = "Interest is required.";
      } else {
        delete this.errors.interest;
      }
    },
  },
};
</script>