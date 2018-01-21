<template>
  <div class="result-wrap">
    <h1>Your results</h1>
    <div class="results">
      <h4>Correct: {{correct}}</h4>
      <h4>Fail: {{fail}}</h4>
    </div>
    <button class="btn btn-primary" @click="repeatGame">Repeat</button>
    <button class="btn btn-primary" @click="onNextLevel">Next level</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: {
      correct: Number,
      fail: Number,
      endOfTheGame: Number
  },
  methods: {
    repeatGame(){
      this.$emit('repeatGame');
    },
    onNextLevel(){
      this.$emit('onNextLevel');
    }
  }
}
</script>

<style lang="scss">
.result-wrap{
  padding-bottom: 20px;
}
</style>
