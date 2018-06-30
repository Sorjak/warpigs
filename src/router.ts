import Vue from 'vue';
import Router from 'vue-router';
import Web3 from 'web3';

import store from './store';
import Home from './views/Home.vue';
import NoMetaMask from './views/NoMetaMask.vue';

Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/nometamask',
      name: 'nometamask',
      component: NoMetaMask,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let web3: any = null;
  if (typeof (window as any).web3 !== 'undefined') {
      web3 = new Web3((window as any).web3.currentProvider);
  }

  if (web3) {
    return store.dispatch('initWeb3', web3).then(() => {
      next();
    });
  }

  next('nometamask');
});

export default router;
