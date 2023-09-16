<template>
  <div>
    <label :for="config.label">{{ config.label }}</label>
    <input type="text" :id="config.id" v-model="data" />
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
    validateTelephone() {
      if (!/^\d+$/.test(this.telephone)) {
        this.errors.telephone = "Telephone Number must only contain numbers.";
      } else {
        delete this.errors.telephone;
      }
    },
  },
};
</script>