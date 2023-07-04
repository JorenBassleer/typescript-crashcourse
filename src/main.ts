import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import BaseButton from './components/common/button/BaseButton.vue';
import BaseInput from './components/common/input/BaseInput.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJHy0Hin7gYrhdAHkBeCguVcfHa6HyWiU",
  authDomain: "avreservationtool.firebaseapp.com",
  projectId: "avreservationtool",
  storageBucket: "avreservationtool.appspot.com",
  messagingSenderId: "298008457799",
  appId: "1:298008457799:web:fc0e0dcabd5242dd08f762",
  measurementId: "G-GRXE682Z19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App)
  .use(createPinia())
  .use(router)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .mount('#app');
