import Vue from "vue";
import CompositionApi from "@vue/composition-api";
import router from "./router";
// import App from "./App.vue";
import App from './App';

Vue.config.productionTip = false;
Vue.use(CompositionApi);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
