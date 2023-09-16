<template>
  <div>
    <div>
      <label :for="config.id">{{ config.label }}</label>
      <select id="config.id" v-model="data" @change="validateInterest">
        <option disabled value="">Please select an interest</option>
        <option v-for="o in config.options" :key="o">{{ o }}</option>
      </select>
      <p class="error" v-if="errors">{{ errors }}</p>
    </div>
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
    validateInterest() {
      if (!this.data) {
        this.errors = "Interest is required.";
      } else {
        this.errors = null;
      }
    },
  },
};
</script>