import Vue from 'vue'
import App from './App.vue'
import StartPage from './components/StartPage';
import QuestionPage from './components/QuestionPage';
import MessagePage from './components/MessagePage';
import ResultPage from './components/ResultPage';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

import vueSlider from 'vue-slider-component'

Vue.component('StartPage', StartPage);
Vue.component('QuestionPage', QuestionPage);
Vue.component('MessagePage', MessagePage);
Vue.component('ResultPage', ResultPage);
Vue.component('vueSlider', vueSlider);


new Vue({
  el: '#app',
  render: h => h(App)
})
