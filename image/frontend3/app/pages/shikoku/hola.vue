<script setup lang='ts'>
  import ToDo from '~/components/ToDo.vue'
</script>

<template>
  <div class="card">
    <h1>2024 Paris</h1>
    <h2>Hola - Blueprint</h2>
    <p>Use this page to start from scratch and place your custom content !</p>
    <p>
      測試 docker build 一個 docker image
    </p>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
    <div>
      <ToDo text="Work in Progress" />
    </div>
  </div>
</template>

<style scoped></style>
