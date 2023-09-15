import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

const app = new Vue({
   router,
   store,
   render: (h) => h(App),
   beforeMount() {
      // if (user) {
      //    // set user in Vuex if they exist
      //    store.commit("SET_USER", user);
      //    const p1 = store.dispatch("fetchUserConfig").then(() => {
      //       console.log("main.js: user config loaded");
      //    });
      //    const p2 = store.dispatch("fetchAppConfig").then(() => {
      //       console.log("main.js: app config loaded");
      //    });
      //    Promise.all([p1, p2]).then(() => {
      //       this.$forceUpdate();
      //    });
      // }
   },
}).$mount("#app");
