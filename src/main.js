import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyCokzK5EgduVCsjXbyj-91K3akmCijEjgs',
  authDomain: 'diet-check-a7b23.firebaseapp.com',
  databaseURL: 'https://diet-check-a7b23.firebaseio.com',
  projectId: 'diet-check-a7b23',
  storageBucket: '',
  messagingSenderId: '225019931771',
  appId: '1:225019931771:web:5f06830a9472124b'
};

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
