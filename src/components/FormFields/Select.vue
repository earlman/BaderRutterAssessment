<template>
  <div>
    <div>
      <label :for="config.label">{{ config.label }}</label>
      <select id="interest" v-model="ntr" @change="validateInterest">
        <option disabled value="">Please select an interest</option>
        <option v-for="o in config.options" :key="o">{{ o }}</option>
      </select>
      <p v-if="errors.interest">{{ errors.interest }}</p>
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
    ...mapFields([`formData.ntr`]),
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