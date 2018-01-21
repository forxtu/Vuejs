<template>
  <div class="main-wrap">
    <h1>Counting simulator - Level {{level + 1}}</h1>
    <div class="progress">
      <div class="progress-bar" :style="progressStyles"></div>
    </div>
    <div class="box">
      <transition name="fade" mode="out-in">
        <start-page v-if="state == 'start-page'" 
                    @onStartGame="onStart"
        >
        </start-page>
        <question-page v-else-if="state == 'question-page'"
                       @success="onQuestionSuccess"
                       @error="onQuestionError"
                       :settings="levels[level]"
        >
        </question-page>
        <message-page v-else-if="state == 'message-page'"
                      :messageType="message.type"
                      :messageText="message.text"
                      @continueQuestion="continueQuestion"
        >
        </message-page>
        <result-page v-else-if="state == 'result-page'"
                     :correct="stats.successAnswer"
                     :fail="stats.failAnswer"
                     @repeatGame="repeatGame"
                     @onNextLevel="onNextLevel"
        >
        </result-page>
        <h1 v-else>Unknown page</h1>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start-page',
      message: {
        type: '',
        text: ''
      },
      stats: {
        successAnswer: 0,
        failAnswer: 0
      },
      questionsMax: 3,
      level: 0,
      levels: [
        {
          from: 10,
          to: 20,
          range: 5,
          variants: 2
        },
        {
          from: 100,
          to: 200,
          range: 20,
          variants: 4
        },
        {
          from: 500,
          to: 900,
          range: 40,
          variants: 6
        }
      ]
    }
  },
  computed: {
    questionsDone(){
      return this.stats.successAnswer + this.stats.failAnswer;
    },
    progressStyles(){
      return {
        width: this.questionsDone / this.questionsMax * 100 + '%'
      };
    }
  },
  methods: {
    onStart(){
      this.state = 'question-page';
    },
    onQuestionSuccess(){
      this.state = 'message-page';
      this.message.text = 'Good Job!'
      this.message.type = 'success';
      this.stats.successAnswer++;
    },
    onQuestionError(msg){
      this.state = 'message-page';
      this.message.text = msg;
      this.message.type = 'warning';
      this.stats.failAnswer++;
    },
    continueQuestion(){
      this.state = 'question-page';
      if(this.questionsDone == this.questionsMax){
        this.state = 'result-page';
      }
    },
    repeatGame(){
      this.state = 'start-page';
      this.stats.successAnswer = 0;
      this.stats.failAnswer = 0;
    },
    onNextLevel(){
      this.state = 'question-page';
      this.stats.successAnswer = 0;
      this.stats.failAnswer = 0;
      this.level++;
    }
  }
}
</script>

<style lang="scss">
.main-wrap{
  width: 700px;
  margin: 32px auto;
  background-color:lightgrey;
  text-align: center;
  h1{
    text-align: center;
    padding: 20px;
  }
  button{
    cursor: pointer;
  }
}
.progress{
  width: 90%;
  margin: 20px auto;
}

// .fade-enter,
// .fade-leave{
// }
.fade-enter-active{
  animation: fadeIn 0.2s linear;
}
.flifadep-leave-active{
  animation: fadeOut 0.2s linear;
}
@keyframes fadeIn {
  from{opacity: 0;}
  to{opacity: 1;}
}
@keyframes fadeOut {
  from{opacity: 1;}
  to{opacity: 0;}
}
</style>
