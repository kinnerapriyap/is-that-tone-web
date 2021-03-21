import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);
firebase
  .auth()
  .signInAnonymously()
  .then(() => console.log("signed in"))
  .catch((error) => console.error(error));
createApp(App).mount("#app");
