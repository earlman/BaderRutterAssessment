import Vue from "vue";
import Vuex from "vuex";

export default new Vuex.Store({
   state() {
      return {
         count: 0,
      };
   },
   mutations: {
      increment(state) {
         state.count++;
      },
   },
});
