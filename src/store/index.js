import Vue from "vue";
import Vuex from "vuex";

// vuex-map-fields links state with form fields within components
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

const formConfig = [
   {
      component: "Text",
      label: "Full Name",
      id: "fll",
   },
   {
      component: "Phone",
      label: "Telephone Number",
      id: "tlp",
   },
   {
      component: "Select",
      label: "Interest",
      options: ["Option 1", "Option 2", "Option 3"],
      id: "ntr",
   },
   {
      component: "TextArea",
      label: "Description",
      id: "dsc",
   },
   {
      component: "CheckboxGroup",
      label: "Reference",
      id: "rfr",
   },
];

export default new Vuex.Store({
   state: {
      formData: {
         fullName: "",
         telephoneNumber: "",
         interest: "",
         description: "",
         reference: [],
      },
      formConfig: formConfig,
   },
   getters: {
      getField,
      getFormConfig: (state) => {
         return state.formConfig;
      },
   },
   mutations: {
      updateField,
   },
});
