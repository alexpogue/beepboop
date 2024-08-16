<template>
  <MorseButton msg="Morse Button" @down="handleMorseButtonDown" @up="handleMorseButtonUp" />
  <SpaceBarHandler @down="handleMorseButtonDown" @up="handleMorseButtonUp" />
</template>

<script>
import MorseButton from './components/MorseButton.vue'
import SpaceBarHandler from './components/SpaceBarHandler.vue'
import * as Tone from "tone";
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    MorseButton,
    SpaceBarHandler
  },
  setup() {
    const oscillator = new Tone.Oscillator(440, "sine").toDestination();
    let isPressed = ref(false);
    let audioInitialized = ref(false);

    const handleMorseButtonDown = () => {
      isPressed.value = true;
      if (audioInitialized.value == false) {
        Tone.start().then(() => {
          console.log('audio initialized');
          audioInitialized.value = true
        });
      }
      else {
        oscillator.start();
      }
    }

    const handleMorseButtonUp = () => {
      isPressed.value = false;
      if (audioInitialized.value == true) {
        oscillator.stop();
      }
    }

    return { handleMorseButtonDown, handleMorseButtonUp, oscillator, isPressed, audioInitialized};
  },
}
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
