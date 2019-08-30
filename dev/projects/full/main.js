import Vue from "vue";
import VueFormGenerator from "../../../src";
import draggable from "vuedraggable";

Vue.use(draggable);
Vue.use(VueFormGenerator);

import App from "./app.vue";

new Vue({
	...App
}).$mount("#app");
