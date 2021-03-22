<template>
  <h1>hi {{ userEmail }}</h1>
  <div class="column">
    <div class="row">
      Word:
      <input v-model.trim="word" placeholder="Enter word" />
    </div>
    <div class="row">
      Options:
      <TagInput v-model="options" />
    </div>
    <button @click="submit">Submit</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import firebase from "firebase/app";
import "firebase/firestore";
import TagInput from "./TagInput.vue";

const word = ref("");
const options = ref([]);

defineProps({
  userEmail: String,
});

var db = firebase.firestore();
const submit = () => {
  db.collection("wordCards")
    .add({
      word: word.value,
      answers: options.value,
      language: "tl",
    })
    .then((docRef) => {
      console.log("Added with id: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};
</script>

<style scoped>
button {
  margin: 20px;
  height: 30px;
}
input {
  margin: 5px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 50px;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
