<script setup>
import { ref } from 'vue';
import Content from './components/Content.vue'
import NavBar from './components/NavBar.vue'
import CircleMenu from './components/CircleMenu.vue'

let active = ref(false)

function rotate() {
  active.value = !active.value
  console.log('first')
}
</script>

<template>
  <Content :active="active" />
  <CircleMenu :rotate="rotate" :active="active" />
  <NavBar :active="active" />
</template>

<style scoped> .logo:hover {
   filter: drop-shadow(0 0 2em #646cffaa);
 }

 .logo.vue:hover {
   filter: drop-shadow(0 0 2em #42b883aa);
 }
</style>
