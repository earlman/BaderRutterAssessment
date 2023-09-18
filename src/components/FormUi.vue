<template>
  <main>
    <Modal />

    <h1>Bader Rutter</h1>
    <h2>Example of a Successful Job Application</h2>
    <form @submit.prevent="submitForm">
      <h3>My Beautiful Form</h3>
      <p>All fields are required.</p>
      <div v-for="field in getFormConfig" :key="field.id">
        <component
          :is="field.component + 'Field'"
          :name="field.id"
          :config="field"
          :id="field.id"
        ></component>
      </div>
      <button v-if="!formHasError && formDataIsComplete" @click="submitForm">
        Submit
      </button>
    </form>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TextField from "./FormFields/Text.vue";
import PhoneField from "./FormFields/Phone.vue";
import CheckboxGroupField from "./FormFields/CheckboxGroup.vue";
import SelectField from "./FormFields/Select.vue";
import TextAreaField from "./FormFields/TextArea.vue";
import Modal from "./Modal.vue";

export default {
  computed: {
    ...mapGetters([
      "getFormData",
      "getFormConfig",
      "formDataIsComplete",
      "formHasError",
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
    Modal,
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Fraunces Variable";
  color: rgb(72, 80, 116);
}

main {
  padding-top: 5rem;
  display: flex;
  margin: auto;
  max-width: 400px;
  flex-direction: column;
  align-content: center;

  h1,
  h2,
  h3 {
    font-weight: 500;
    margin: 0;
  }

  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    margin-top: 0;
  }
  h3 {
    font-weight: 600;
  }
}

::v-deep form {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 2rem;
  }

  label {
    display: block;
    font-weight: 500;
  }
  input,
  select,
  textarea {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
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
