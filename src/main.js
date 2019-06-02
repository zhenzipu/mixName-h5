import Vue from "vue";
import { router } from "./router/index";
import store from "./store/index";
import 'iview/dist/styles/iview.css';
import iView from 'iview';
import App from "./app.vue";

import "@/styles/font-awesome/css/font-awesome.min.css";
import util from "./libs/util";
import  "./libs/rem";
import api from "./libs/API";

Vue.use(iView)
// 全局添加工具方法
window.util = util;

// vue实例添加api对象
Vue.prototype.$api = api;

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => h(App),
  data: {},
  mounted() {},
  created() {}
});
