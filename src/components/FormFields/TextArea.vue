<template>
  <div>
    <div>
      <label :for="config.label">{{ config.label }}</label>
      <textarea
        :id="config.id"
        v-model="dsc"
        @input="validateDescription"
      ></textarea>
      <p>{{ 500 - dsc.length }} characters remaining</p>
    </div>
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
    ...mapFields([`formData.dsc`]),
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