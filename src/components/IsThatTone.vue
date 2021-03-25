<template>
  <h2>heylo {{ userEmail.split("@")[0] }}!</h2>

<!-- single row add word, we can cut the option field and just add word here? -->
  <section class="container">
  <h3>Add new word card</h3>
  <div class="row">
    <div class="col-sm-3">
    Language:
      <select v-model="language" class="language-input">
        <option v-for="l in languages" :key="l">{{ l }}</option>
      </select>
      </div>
    <div class="col-sm-3">Word:
      <input v-model.trim="word" placeholder="Enter word" /></div>
    <div class="col-sm-3">
      <button @click="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
  </section>


  <div class="column">
    <div class="row">
      Word:
      <input v-model.trim="word" placeholder="Enter word" />
    </div>
    <div class="row">
      Options:
      <TagInput v-model="options" />
    </div>
    <div class="row">
      Language:
      <select v-model="language" class="language-input">
        <option v-for="l in languages" :key="l">{{ l }}</option>
      </select>
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
const language = ref("tel");
const languages = ["eng", "hin", "jpn", "tel"];

defineProps({
  userEmail: String,
});

var db = firebase.firestore();
const submit = () => {
  db.collection("wordCards")
    .add({
      word: word.value,
      answers: options.value,
      language: language.value,
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
.language-input {
  margin: 5px;
  padding: 5px;
}
</style>
