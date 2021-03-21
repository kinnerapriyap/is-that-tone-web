<template>
  <h1>Welcome to is-that-tone-web</h1>
  <div id="firebaseui-auth-container"></div>
  <div id="loader">Loading...</div>
</template>

<script setup>
import firebase from "firebase/app";
import "firebaseui";
import "firebase/auth";

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      document.getElementById("loader").style.display = "none";
    },
  },
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};
ui.start("#firebaseui-auth-container", uiConfig);
</script>
