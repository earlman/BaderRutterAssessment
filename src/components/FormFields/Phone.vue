<template>
  <div>
    <label :for="config.id">{{ config.label }}</label>
    <input
      type="text"
      :id="config.id"
      v-model="data"
      @input="validateTelephone"
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
    validateTelephone() {
      if (!/^\d+$/.test(this.data)) {
        this.errors = "Telephone Number must contain numbers and only numbers.";
      } else {
        this.errors = null;
      }
    },
  },
};
</script>