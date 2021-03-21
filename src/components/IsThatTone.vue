<template>
  <h1>hi {{ userEmail }}</h1>
  <button @click="submit">Submit</button>
</template>

<script setup>
defineProps({
  userEmail: String,
});
const submit = () => {
  console.log("submitted");
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
