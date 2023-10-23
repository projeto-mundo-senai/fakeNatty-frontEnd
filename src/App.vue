<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PaginaInicial from './components/PaginaInicial.vue';

</script>

<template>

  <div class="container">

    <div class="row">

      <div class="col">

    <RouterView> 
      
    </RouterView>

      </div>

    </div>

  </div>
 
</template>


<style>

body{

 background-color: #1E181C !important; 
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(255, 255, 255) !important;

}

</style>