<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <NavBar />
    <div class="min-h-screen">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style>
@import './assets/main.css';

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
