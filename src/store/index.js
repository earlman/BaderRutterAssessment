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
      modal: {
         isVisible: false,
         content: null,
      },
   },
   mutations: {
      updateField,
      SET_FORM_SUBMISSION: (state, payload) => {
         state.formSubmission = payload;
      },
      SET_FORM_ERROR: (state, payload) => {
         state.formError = payload;
      },
      SET_MODAL: (state, payload) => {
         state.modal = payload;
      },
   },
   getters: {
      getField,
      getFormConfig: (state) => {
         return state.formConfig;
      },
      getModal: (state) => {
         return state.modal;
      },
      getFormData: (state) => {
         return state.formData;
      },
      formDataIsComplete: (state) => {
         // check that all fields have data
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
      setError({ commit }, data) {
         commit("SET_FORM_ERROR");
      },
      closeModal({ commit }) {
         commit("SET_MODAL", false);
      },
      submitForm({ state, dispatch, commit }) {
         commit("SET_FORM_SUBMISSION", state.formData);
         commit("SET_MODAL", {
            isVisible: true,
            content: state.formData,
         });
      },
   },
});
