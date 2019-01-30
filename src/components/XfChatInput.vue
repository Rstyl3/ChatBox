<template>
  <div class="x-input">
    <input type="text" :value="chatInput" @input="$emit('update:chatInput', $event.target.value)" >
    <button @click="$emit('btnClick')">Send</button>
  </div>
</template>

<script>
export default {
  props: ['chatInput'],
  data() {
    return {
      message: '',
    }
  },
}
</script>

<style scoped>
.x-input,
input {
  width: 100%;
}
.x-input {
  position: relative;
  border: 1px solid darkgrey;
  display: inline-block;
}
input {
  box-sizing: border-box;
  border: none;
  bottom: 0;
  left: 0;
  margin: 0;
  outline: none;
  padding: 0 8px;
  height: 22px;
}
button {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
