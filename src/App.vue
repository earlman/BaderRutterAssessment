<template>
  <div>
    <h1>Bader Rutter</h1>
    <h2>Example of a Successful Job Application</h2>
    <form @submit.prevent="submitForm">
      <div v-for="field in getFormConfig" :key="field.id">
        <component
          :is="field.component + 'Field'"
          :name="field.id"
          :config="field"
          :id="field.id"
        ></component>
      </div>
      <button v-if="!formHasError && formDataIsComplete" button>Submit</button>
    </form>
    <hr />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import TextField from "./components/FormFields/Text.vue";
import PhoneField from "./components/FormFields/Phone.vue";
import CheckboxGroupField from "./components/FormFields/CheckboxGroup.vue";
import SelectField from "./components/FormFields/Select.vue";
import TextAreaField from "./components/FormFields/TextArea.vue";

export default {
  computed: {
    ...mapGetters(["getFormConfig", "formDataIsComplete", "formHasError"]),
    ...mapFields([
      "formData.fullName",
      "formData.telephoneNumber",
      "formData.interest",
      "formData.description",
      "formData.reference",
    ]),
  },
  methods: {
    ...mapActions(["submitForm"]),
  },
  components: {
    CheckboxGroupField,
    PhoneField,
    SelectField,
    TextField,
    TextAreaField,
  },
};
</script>

<style lang="scss" scoped>
::v-deep form {
  width: 300px;
  margin: 0 auto;

  label {
    display: block;
    margin-top: 10px;
  }
  input,
  select,
  textarea {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
  }

  p {
    font-size: 12px;

    &.error {
      color: red;
    }
  }
}
</style>
