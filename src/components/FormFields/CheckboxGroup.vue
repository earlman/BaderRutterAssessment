<template>
  <div>
    <div>
      <label>{{ config.label }}</label>
      <div v-for="(o, i) in config.options" :key="o">
        <input type="checkbox" :id="i" :value="o" v-model="data" />
        <label :for="i">{{ o }}</label>
      </div>
      <p v-if="errors.reference">{{ errors.reference }}</p>
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
    validateReference() {
      if (!this.reference.length) {
        this.errors.reference = "At least one reference is required.";
      } else {
        delete this.errors.reference;
      }
    },
  },
};
</script>