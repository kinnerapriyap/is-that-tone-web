import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase/app";

firebase.initializeApp(firebaseConfig);
createApp(App).mount("#app");
