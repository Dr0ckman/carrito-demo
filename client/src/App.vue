<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="container vw-100">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
