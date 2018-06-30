import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Web3 from 'web3';

// import { MdButton, MdContent, MdTabs, MdToolbar,
//          MdIcon, MdDrawer, MdList, MdField, MdInput } from 'vue-material/dist/components';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css'; // This line here

Vue.config.productionTip = false;

// Vue.use(MdButton);
// Vue.use(MdContent);
// Vue.use(MdTabs);
// Vue.use(MdToolbar);
// Vue.use(MdIcon);
// Vue.use(MdDrawer);
// Vue.use(MdList);
// Vue.use(MdField);
// Vue.use(MdInput);
Vue.use(VueMaterial);

// let colorPrimary = {
//   color: 'green',
//   hue: 700,
//   hexa: '#42b883'
// }

// let colorAccent = {
//   color: 'blue',
//   hue: 600,
//   hexa: '#35495e'
// }

// Vue.material.registerTheme('default', {
//   primary: colorPrimary,
//   accent: colorAccent,
//   warn: colorPrimary,
//   background: 'white'
// })

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
