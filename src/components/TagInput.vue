<!-- https://learnvue.co/2020/01/build-a-custom-vuejs-tag-input-in-under-10-minutes/ -->

<template>
  <div class="tag-input">
    <div v-for="(tag, index) in options" :key="tag" class="tag-input__tag">
      <span @click="removeTag(index)">x</span>
      {{ tag }}
    </div>
    <input
      type="text"
      placeholder="Enter an option"
      class="tag-input__text"
      @keydown.enter="addTag"
      @keydown.delete="removeLastTag"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";

const options = reactive([]);

defineProps({
  modelValue: Array,
});

const emit = defineEmit(["update:modelValue"]);

const addTag = (event) => {
  event.preventDefault();
  var val = event.target.value.trim();
  if (val.length > 0) {
    options.push(val);
    event.target.value = "";
  }
  emit("update:modelValue", options);
};

function removeTag(index) {
  options.splice(index, 1);
  emit("update:modelValue", options);
}

const removeLastTag = (event) => {
  if (event.target.value.length === 0) {
    removeTag(options.length - 1);
  }
};
</script>

<style scoped>
.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
  margin: 5px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>
