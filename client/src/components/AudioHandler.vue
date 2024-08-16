<template>
<div>
  <input type="button" :disabled="isInitialized" value="Initialize Tones" @mouseup="handleInitButtonPress" />
  <input type="button" :disabled="!isInitialized" :value="msg" @mousedown="handleMorseButtonDown" @mouseup="handleMorseButtonUp" />
  <SpaceBarHandler @down="handleMorseButtonDown" @up="handleMorseButtonUp" />
</div>
</template>

<script setup>
import SpaceBarHandler from './SpaceBarHandler.vue'
import * as Tone from "tone";
import { toRefs, ref } from 'vue';

const oscillator = new Tone.Oscillator(440, "sine").toDestination();
let isInitialized = ref(false);

const props = defineProps({
  msg: String,
});
const { msg } = toRefs(props);

function handleInitButtonPress() {
  Tone.start().then(() => {
    isInitialized.value = true;
  });
}

function handleMorseButtonDown() {
  if (isInitialized.value)
    oscillator.start();
}

function handleMorseButtonUp() {
    oscillator.stop();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
