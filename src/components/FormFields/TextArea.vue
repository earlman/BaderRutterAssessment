<template>
  <div>
    <div>
      <label :for="config.label">{{ config.label }}</label>
      <textarea
        :id="config.id"
        v-model="data"
        @input="validateDescription"
      ></textarea>
      <!---
      
        <p>{{ 500 - dsc.length }} characters remaining</p>
        ----->
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
    validateDescription() {
      if (this.description.length > 500) {
        this.errors.description =
          "Description must be less than 500 characters.";
      } else {
        delete this.errors.description;
      }
    },
  },
};
</script>