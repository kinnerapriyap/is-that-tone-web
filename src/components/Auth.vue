<template>
  <h1>Welcome to is-that-tone-web</h1>
  <div id="firebaseui-auth-container"></div>
  <div id="loader">Loading...</div>
</template>

<script setup>
import firebase from "firebase/app";
import "firebaseui";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css";

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      return false;
    },
    uiShown: function () {
      document.getElementById("loader").style.display = "none";
    },
  },
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};
ui.start("#firebaseui-auth-container", uiConfig);
</script>
