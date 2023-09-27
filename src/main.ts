import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import BaseButton from './components/common/button/BaseButton.vue';
import BaseInput from './components/common/input/BaseInput.vue';
import { initializeApp } from 'firebase/app';
import { authConfig } from '../src/auth/firebaseConfig';

initializeApp(authConfig);

createApp(App)
  .use(createPinia())
  .use(router)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .use(ElementPlus)
  .mount('#app');
