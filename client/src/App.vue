<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="container vw-100">
    <Navbar />
    <div class="row">
      <div v-if="$route.name == 'shop'" class="col-2">
        <Sidebar />
      </div>
      <div class="col-10">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
