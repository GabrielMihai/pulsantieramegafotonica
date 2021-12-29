import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCT7vj79ya-ET8qyl7QlLzKlpIIYQ-ibqM",
  authDomain: "pulsantieramegafotonica-dbd1e.firebaseapp.com",
  projectId: "pulsantieramegafotonica-dbd1e",
  storageBucket: "pulsantieramegafotonica-dbd1e.appspot.com",
  messagingSenderId: "1092690990323",
  appId: "1:1092690990323:web:49d2ffcc9ea1201ec1d386",
  measurementId: "G-NKV8JNG846",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
