import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/main.css";

app = new Vue({
   router,
   store,
}).$mount("#app");
