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
      formError: false,
      formSubmission: {},
   },
   mutations: {
      updateField,
      SET_FORM_SUBMISSION: (state, payload) => {
         state.formSubmission = payload;
      },
      SET_FORM_ERROR: (state, payload) => {
         state.formError = payload;
      },
   },
   getters: {
      getField,
      getFormConfig: (state) => {
         return state.formConfig;
      },
      formDataIsComplete: (state) => {
         // check that all objects

         const formDataIsComplete = Object.values(state.formData).every((field) => {
            if (Array.isArray(field.data)) {
               return field.data.length > 0;
            } else if (typeof field.data === "string") {
               return field.data.trim() !== "";
            }
            return false;
         });

         return formDataIsComplete;
      },
      formHasError: (state) => {
         return state.formError;
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
      setError({ commit }, data) {
         commit("SET_FORM_ERROR", data);
      },
   },
});
