import Vue from "vue";
import Vuex from "vuex";

// vuex-map-fields links state with form fields within components
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

const formConfig = [
   {
      type: "text",
      label: "Full Name",
      id: "fll",
   },
   {
      type: "phone",
      label: "Telephone Number",
      id: "tlp",
   },
   {
      type: "select",
      label: "Interest",
      options: ["Option 1", "Option 2", "Option 3"],
      id: "ntr",
   },
   {
      type: "textarea",
      label: "Description",
      id: "dsc",
   },
   {
      type: "checkboxgroup",
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
