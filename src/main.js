import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// Supports weights 100-900
import "@fontsource-variable/fraunces/full.css";

const app = new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount("#app");
