<template>
  <div>
    <h1>Bader Rutter</h1>
    <h2>Example of a Successful Job Application</h2>

    <!--Currently, fields are not dynamic. using vuex to store form data requires vuex-map-fields, which currently doesn't support dynamic field ids-->
    <form @submit.prevent="submitForm">
      <div v-for="field in getFormConfig" :key="field.id">
        <component
          :is="field.component + 'Field'"
          :name="field.id"
          :config="field"
          :id="field.id"
        ></component>
      </div>
      <button>Submit</button>
    </form>

    <hr />

    <!---
    
    <form @submit.prevent="submitForm">
      <div>
        <label for="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          v-model="fullName"
          @input="validateFullName"
        />
        <p v-if="errors.fullName">{{ errors.fullName }}</p>
      </div>

      <div>
        <label for="telephone">Telephone Number</label>
        <input
          type="tel"
          id="telephone"
          v-model="telephoneNumber"
          @input="validateTelephone"
        />
        <p v-if="errors.telephone">{{ errors.telephone }}</p>
      </div>

      <div>
        <label for="interest">Interest</label>
        <select id="interest" v-model="interest" @change="validateInterest">
          <option disabled value="">Please select an interest</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <p v-if="errors.interest">{{ errors.interest }}</p>
      </div>

      <div>
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          @input="validateDescription"
        ></textarea>
        <p>{{ 500 - description.length }} characters remaining</p>
      </div>

      <div>
        <label>Reference</label>
        <div v-for="option in referenceOptions" :key="option">
          <input type="checkbox" :value="option" v-model="reference" />
          <label>{{ option }}</label>
        </div>
        <p v-if="errors.reference">{{ errors.reference }}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
    -->
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
  data() {
    return {
      errors: {},
    };
  },
  computed: {
    ...mapGetters(["getFormConfig"]),
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
    color: red;
    font-size: 12px;
  }
}
</style>
