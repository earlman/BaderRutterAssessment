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
    ...mapDynamicFields(["formData[].data"], "index"),
    index() {
      return this.id;
    },
  },
  methods: {
    validateDescription() {
      if (this.data.length > 500) {
        this.errors = "Response must be less than 500 characters.";
        this.$store.dispatch("setError", true);
      } else {
        this.errors = null;
        this.$store.dispatch("setError", false);
      }
    },
  },
};
</script>
