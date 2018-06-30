import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        web3: {
            isInjected: false,
            web3Instance: null,
            networkId: null,
            coinbase: null,
            balance: null,
            error: null
        },
        contractInstance: null
    },
    mutations: {

    },
    actions: {
        initWeb3({ state }, web3: any) {
            return new Promise((resolve, reject) => {
                state.web3.web3Instance = web3;
                state.web3.isInjected = true;

                const MyContract = web3.eth.contract(config.ABI_INTERFACE);
                state.contractInstance = MyContract.at(config.CONTRACT_ADDRESS);
                resolve();
            });
        }
    },
    getters: {
        web3: (state) => {
            console.log('grabbing state');
            return state.web3.web3Instance;
        },
        contractInstance: (state) => state.contractInstance,
    }
});
