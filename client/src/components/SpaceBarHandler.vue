<template>
<div>
</div>
</template>

<script setup>
import { useKeypress } from 'vue3-keypress'

const emit = defineEmits(['up', 'down']);

useKeypress({
  keyEvent: "keydown",
  keyBinds: [
    {
      keyCode: "space",
      success: () => emit('down'),
    },
  ]
})

useKeypress({
  keyEvent: "keyup",
  keyBinds: [
    {
      keyCode: "space",
      success: () => emit('up'),
    },
  ]
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
