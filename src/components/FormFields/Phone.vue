<template>
  <div>
    <label :for="config.label">{{ config.label }}</label>
    <input type="text" :id="config.id" v-model="tlp" />
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
    ...mapFields([`formData.tlp`]),
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