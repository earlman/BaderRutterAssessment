import Vue from "vue";
import Vuex from "vuex";
import formConfig from "./formConfig";

// vuex-map-fields links state with form fields within components
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      formConfig: formConfig.config,
      formData: formConfig.initialFormData,
      formSubmission: {},
   },
   getters: {
      getField,
      getFormConfig: (state) => {
         return state.formConfig;
      },
   },
   mutations: {
      updateField,
      SET_FORM_SUBMISSION: (state, payload) => {
         state.formSubmission = payload;
      },
   },
   actions: {
      async validateForm({ state }) {
         return false;
      },
      submitForm({ state, dispatch, commit }) {
         dispatch("validateForm").then((r) => {
            console.log(r);

            if (r == true) {
               commit("SET_FORM_SUBMISSION");
            } else {
               window.alert("Please correct the errors");
            }
         });
      },
   },
});
