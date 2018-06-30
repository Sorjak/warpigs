<template>
  <div class="main-container">
    <md-field>
      <label>Amount To Send</label>
      <span class="md-prefix">ETH</span>
      <md-input v-model="amountToSend" type="number"></md-input>
    </md-field>
    <md-button class="md-accent" @click="sendEth">Send</md-button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Web3 from 'web3';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'SendEth',
    data: () => ({
      amountToSend: 0
    }),
    computed: {
      ...mapGetters([
        'web3',
        'contractInstance'
      ]),
    },
    methods: {
      sendEth() {
        console.log(this.contractInstance);
        if (this.contractInstance) {
          this.contractInstance.sendEthToContract({
            gas: 300000,
            from: this.web3.eth.accounts[0],
            value: this.web3.toWei(this.amountToSend, 'ether')
          }, (err, result) => {
            console.log(result);
            console.log(err);
          });
        }
      },
    },
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
