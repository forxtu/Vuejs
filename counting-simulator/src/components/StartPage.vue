<template>
  <div class="start__wrap alert">
    <h1>Are you ready?</h1>
    <button class="btn btn-success" 
            @click="onStart"
    >Start game
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    onStart(){
      this.$emit('onStartGame');
    }
  }
}
</script>

<style lang="scss">
.start__wrap{
  padding: 20px;
  h1{
    text-align: center;
  }
  button{
    display: block;
    margin: 32px auto 0 auto;
  }
}
</style>
