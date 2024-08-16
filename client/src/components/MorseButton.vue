<template>
<div>
<input type="button" :value="msg" @mousedown="$emit('down')" @mouseup="$emit('up')"/>
</div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  msg: String,
});
const { msg } = toRefs(props);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
