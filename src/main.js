import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Icon,
  PullRefresh,
  Sticky,
  List,
  Dialog,
  Picker,
  Popup,
  Toast,
  Skeleton,
  ImagePreview
} from "vant";

// import VConsole from "vconsole/dist/vconsole.min.js";

// new VConsole();
Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Icon);
Vue.use(PullRefresh);
Vue.use(Sticky);
Vue.use(List);
Vue.use(Dialog);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(Skeleton);
Vue.use(ImagePreview);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
