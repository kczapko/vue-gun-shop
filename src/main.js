import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("money", (value) => {
  var p = value.toString();
  var pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(p)) p = p.replace(pattern, "$1 $2");

  return p;
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
