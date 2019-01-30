import Vue from 'vue'
import App from './App.vue'
import ChatBox from '@/components/ChatBox.vue'

Vue.component('chat-box',  ChatBox )

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
