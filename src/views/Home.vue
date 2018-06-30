<template>
  <div class="home">
    <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar>
            <div class="md-toolbar-section-start">
                <span class="md-title">Warpigs</span>
            </div>
            <div class="md-toolbar-section-end" layout="row">
                <span>{{userInfo}}</span>
            </div>
        </md-app-toolbar> 
        <md-app-drawer md-persistent="mini">
            <md-toolbar class="md-transparent" md-elevation="0">
                Navigation
            </md-toolbar>

            <md-list>
                <md-list-item>
                    <md-button to="/">
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Home</span>
                    </md-button>
                </md-list-item>

<!--                 <md-list-item>
                    <md-icon>send</md-icon>
                    <span class="md-list-item-text">Sent Mail</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>delete</md-icon>
                    <span class="md-list-item-text">Trash</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>error</md-icon>
                    <span class="md-list-item-text">Spam</span>
                </md-list-item> -->
            </md-list>
        </md-app-drawer>
        <md-app-content>
            <send-eth/>
        </md-app-content>
    </md-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Nav from '@/components/mainNav.vue'; // @ is an alias to /src
import sendEth from '@/components/sendEth.vue'; // @ is an alias to /src

export default Vue.extend({
    name: 'home',
    components: {
        'main-nav': Nav,
        'send-eth': sendEth
    },
    computed: {
      ...mapGetters([
        'web3'
      ]),

      userInfo() {
        return this.web3.eth.accounts[0];
      }
    },
    mounted() {
        console.log(this.web3);
    }
});
</script>
