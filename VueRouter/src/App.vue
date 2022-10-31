<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

<div id="nav">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/brazil">Brazil</RouterLink>
  <RouterLink to="/hawaii">Hawaii</RouterLink>
  <RouterLink to="/jamaica">Jamaica</RouterLink>
  <RouterLink to="/panama">Panama</RouterLink>
</div>


    
 
  <div class="container">
    <RouterView />
  </div>


</template>

<style >

</style>
