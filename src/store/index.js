import Vue from "vue";
import Vuex from "vuex";

// vuex-map-fields links state with form fields within components
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      formData: {
         fullName: "",
         telephoneNumber: "",
         interest: "",
         description: "",
         reference: [],
      },
   },
   getters: {
      getField,
   },
   mutations: {
      updateField,
   },
});
