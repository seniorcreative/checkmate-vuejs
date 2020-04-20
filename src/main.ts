import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import './registerServiceWorker';
import config from '../config.json';
import './assets/sass/main.scss';

const firebaseConfig = {
  apiKey: config.FIREBASE_KEY,
  authDomain: 'checkmate-9b25c.firebaseapp.com',
  databaseURL: 'https://checkmate-9b25c.firebaseio.com',
  projectId: 'checkmate-9b25c',
  storageBucket: 'checkmate-9b25c.appspot.com',
  messagingSenderId: '396888193139',
  appId: '1:396888193139:web:d623ada216c452d90b5206',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
