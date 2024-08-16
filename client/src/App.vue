<template>
  <AudioHandler msg="Morse Button" />
</template>

<script>
import AudioHandler from './components/AudioHandler.vue';
export default {
  name: 'App',
  components: {
    AudioHandler
  }
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
