<template>
  <div class="question-wrap alert">
    <h3>{{x}} + {{y}} = ?</h3>

    <div class="buttons">
        <button class="btn btn-success"
                v-for="number in answers"
                :key="number"
                @click="onAnswer(number)"
        >{{number}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      x: mtRand(this.settings.from, this.settings.to),
      y: mtRand(this.settings.from, this.settings.to)
    }
  },
  props: ['settings'],
  computed: {
    good(){
      return this.x + this.y;
    },
    answers(){
      let res = [this.good];

      while(res.length < this.settings.variants){
        let num = mtRand(this.good - this.settings.range, this.good + this.settings.range);
        if(res.indexOf(num) === -1){
            res.push(num);
        }
      }

      return res.sort(function(){
        return Math.random() > 0.5;
      });
    }
  },
  methods: {
    onAnswer(num){
      if(num == this.good){
        this.$emit('success');
      }else {
        this.$emit('error', `You\'ve made a mistake - correct answer is: ${this.good}`);
      }
    }
  }
}

function mtRand(min, max){
  let diff = max - min;
  return Math.floor(Math.random() * (diff + 1)) + min;
}

</script>

<style lang="scss">
.question-wrap{
  padding: 20px;
  h1{
    padding-bottom: 30px;
  }
  .vue-slider-component .vue-slider{
    background-color: #ff8a8a;
  }
}
.buttons{
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
}
</style>
