<template>
  <div>
    <div>
      <label :for="config.id">{{ config.label }}</label>
      <textarea
        :id="config.id"
        v-model="data"
        @input="validateDescription"
      ></textarea>
      <p :class="{ error: errors }">
        {{ 500 - data.length }} characters remaining
      </p>
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
    validateDescription() {
      if (this.data.length > 500) {
        this.errors = "Description must be less than 500 characters.";
      } else {
        this.errors = null;
      }
    },
  },
};
</script>
