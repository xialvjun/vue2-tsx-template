import Vue from "vue";
import CompositionApi, { h } from "@vue/composition-api";
import router from "./router";
// import App from "./App.vue";
// 有重名时, 竟然打包的是 .vue 而不是 ts, 很奇怪
import App from './App.tsx';

(window as any).h = h;
Vue.config.productionTip = false;
Vue.use(CompositionApi);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
