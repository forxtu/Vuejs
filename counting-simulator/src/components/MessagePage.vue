<template>
  <div class="message-wrap" :class="'alert-' + messageType">
    <h3>{{messageText}}</h3>
    <button class="btn btn-success" @click="continueQuestion">Continue</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: {
      messageType: String,
      messageText: String
  },
  methods: {
    continueQuestion(){
      this.$emit('continueQuestion');
    }
  }
}
</script>

<style lang="scss">
.message-wrap{
  padding: 20px;
  h3{
    margin-bottom: 32px;
  }
}
</style>
