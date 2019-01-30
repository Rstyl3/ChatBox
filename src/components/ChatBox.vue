<template>
  <div class="chat-box">
    <div class="text-area">
      <xf-chat-thread :chatThread="chat" v-for="chat in chatThread" :key="chat.id" />
    </div>
    <xf-chat-input :chatInput.sync="chatInput" @btnClick="hdlReply"/>
  </div>
</template>

<script>
import XfChatInput from './XfChatInput.vue'
import XfChatThread from './XfChatThread.vue'

export default {
  name: 'chat-box',
  components: {
    XfChatInput,
    XfChatThread,
  },
  data() {
    return {
      chatThread: [
        {
          text: 'Hi There!',
          author: 'Bob',
          date: '1/1 10:00',
          reply: false,
        },
      ],
      chatInput: '',
    }
  },
  methods: {
    hdlReply(){
      let date = new Date();
      let formatDate = (date.getMonth()+ 1) + '/' + date.getDay() + ' ' +  date.getHours() + ":" + date.getMinutes() 
      if (this.chatInput === '') {
        console.log('write a message', this.chatInput)
      } else {
        this.chatThread.push({
          text: this.chatInput,
          date: formatDate,
          author: 'you',
          reply: false
        })

        this.chatInput = ''
      }  
    }
  },
}
</script>

<style scoped>
.chat-box {
  width: 400px;
  margin: 0 auto;
}
.text-area {
  border: 1px solid black;
  max-height: 400px;
  padding: 10px;
  overflow: auto;
  background-color: #ebebeb;
}
</style>
