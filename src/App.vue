<template>
  <img alt="Brainstorm" src="./assets/brainstorm.png" width="150" />
  <h1 v-if="isSignedIn">hi {{ userEmail }}</h1>
  <Auth v-else />
</template>

<script setup>
import Auth from "./components/Auth.vue";
import { ref, reactive } from "vue";
import firebase from "firebase/app";
import "firebase/auth";

const isSignedIn = ref(false);
const userEmail = ref("");

//firebase.auth().signOut()
firebase.auth().onAuthStateChanged(
  function (user) {
    userEmail.value = user?.email ?? "";
    isSignedIn.value = !!user;
  },
  function (error) {
    console.log(error);
  }
);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
