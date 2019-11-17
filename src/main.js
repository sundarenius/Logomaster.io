import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    const config = {
      apiKey: 'AIzaSyCsmvd3kxXgLErZ4IKnHx3wcbHrHqsY9yo',
      authDomain: 'logogenerator-a799f.firebaseapp.com',
      databaseURL: 'https://logogenerator-a799f.firebaseio.com',
      projectId: 'logogenerator-a799f',
      storageBucket: 'logogenerator-a799f.appspot.com',
      messagingSenderId: '562810272646'
    }
    firebase.initializeApp(config)
  }
}).$mount('#app')
