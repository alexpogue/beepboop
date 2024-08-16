<template>
  <MorseButton msg="Morse Button" @down="handleMorseButtonDown" @up="handleMorseButtonUp" />
  <SpaceBarHandler @down="handleMorseButtonDown" @up="handleMorseButtonUp" />
</template>

<script>
import MorseButton from './components/MorseButton.vue'
import SpaceBarHandler from './components/SpaceBarHandler.vue'
import { Oscillator} from "tone";
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    MorseButton,
    SpaceBarHandler
  },
  setup() {
    const oscillator = new Oscillator(440, "sine").toDestination();
    let isPressed = ref(false);

    const handleMorseButtonDown = () => {
      isPressed = true;
      oscillator.start();
    }

    const handleMorseButtonUp = () => {
      isPressed = false;
      oscillator.stop();
    }

    return { handleMorseButtonDown, handleMorseButtonUp, oscillator, isPressed };
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
