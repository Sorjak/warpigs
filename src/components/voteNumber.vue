<template>
  <div className="main-container">
    <h1>Bet for your best number and win huge amounts of Ether</h1>
    <div className="block">
      <h4>Timer:</h4> &nbsp;
      <span ref="timer"> {{timer}}</span>
    </div>
    <div className="block">
      <h4>Last winner:</h4> &nbsp;
      <span ref="last-winner">{{lastWinner}}</span>
    </div>
    <hr/>
    <h2>Vote for the next number</h2>
    <ul>
      <li><button @click="voteNumber(1)">1</button></li>
      <li><button @click="voteNumber(2)">2</button></li>
      <li><button @click="voteNumber(3)">3</button></li>
      <li><button @click="voteNumber(4)">4</button></li>
      <li><button @click="voteNumber(5)">5</button></li>
      <li><button @click="voteNumber(6)">6</button></li>
      <li><button @click="voteNumber(7)">7</button></li>
      <li><button @click="voteNumber(8)">8</button></li>
      <li><button @click="voteNumber(9)">9</button></li>
      <li><button @click="voteNumber(10)">10</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Web3 from 'web3';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'VoteNumber',
    props: {
      msg: String,
    },
    data() {
      return {
        lastWinner: 0,
        timer: 0
      };
    },
    computed: {
      ...mapGetters([
        'web3',
        'contractInstance'
      ]),
    },
    methods: {
      voteNumber(num: number) {
        console.log(this.contractInstance);
        if (this.contractInstance) {
          const amount = .1;
          this.contractInstance.bet(num, {
            gas: 300000,
            from: this.web3.eth.accounts[0],
            value: this.web3.toWei(amount, 'ether')
          }, (err, result) => {
            console.log(err);
          });
        }
      },
    },
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
    font-family: 'open sans';
    margin: 0;
}
ul{
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex: 1;
}
li button {
    padding: 40px;
    border: 2px solid rgb(30,134,255);
    margin-right: 5px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #FFF;
}
li button:hover{
    background-color: rgb(30,134,255);
    color: white;
}
li button:active{
    opacity: 0.7;
}
*{
   color: #444444;
}
.main-container{
  padding: 20px;
}
.block{
   display: flex;
   align-items: center;
}
.number-selected{
   background-color: rgb(30,134,255);
   color: white;
}
.bet-input{
   padding: 15px;
   border-radius: 10px;
   border: 1px solid lightgrey;
   font-size: 15pt;
   margin: 0 10px;
}
</style>
