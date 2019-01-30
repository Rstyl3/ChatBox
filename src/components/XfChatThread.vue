<template>
  <div class="thread">
    <div class="message-box">
      <h3>{{chatThread.author}} <span>{{chatThread.date}}</span></h3>
      <p>{{chatThread.text}}</p>
    </div>

    <div class="reply-box" v-for="reply in replyChat" :key="reply.id">
      <h3>{{reply.author}} <span>{{reply.date}}</span></h3>
      <p>{{reply.text}}</p>
    </div>
    <button class="reply-btn" v-show="!replybtn" @click="hdlbtn">Reply</button>
    <xf-chat-input :chatInput.sync="replyInput" v-show="replybtn" @btnClick="hdlReply"/>
  </div>
</template>

<script>
import XfChatInput from './XfChatInput.vue'

export default {
  components: {
    XfChatInput,
  },
  props: ['chatThread'],
  data() {
    return {
      replyChat: [],
      replybtn: false,
      replyInput: '',
    }
  },
  methods: {
    hdlbtn() {
      this.replybtn = !this.replybtn
    },
    hdlReply(e) {
      this.replybtn = !this.replybtn
      let date = new Date();
      let formatDate = (date.getMonth()+ 1) + '/' + date.getDay() + ' ' +  date.getHours() + ":" + date.getMinutes()
      console.log('this is reply date', formatDate)
      if (this.replyInput === '') {
        console.log('write a message', this.replyInput)
      } else {
        this.replyChat.push({
          text: this.replyInput,
          author: 'you',
          date: formatDate,
          reply: false
        })

        this.replyInput = ''
      }      
    },
  },
}
</script>

<style scope>
.thread {
  margin-bottom: 5px;
  overflow: hidden;
  background-color: #ffffff;
}
.message-box{
  text-align: left;
  padding-left: 10px;
}
.reply-box{
  text-align: left;
  background-color: #f6f6f6
}
.message-box span, .reply-box span{
 font-weight: normal;
 font-size: 15px;
}
.reply-box p, .reply-box h3{
  margin:0;
  padding: 5px 5px 5px 20px;
}
.reply-btn{
  
}
</style>
