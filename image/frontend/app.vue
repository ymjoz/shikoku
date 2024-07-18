<script setup>
  import AppHeader from './components/AppHeader.vue';


  useSeoMeta({
    title: 'Meet Shikoku',
    description: 'Shikoku-Island',
    keywords: 'Shikoku-Island',
  })

</script>

<template>
  <div id="app">
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <!-- <AppHeader /> -->
    <NuxtPage />
  </div>
</template>


<style>
  body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(#3853ab 0.6000000000000001px,
        #123e83 0.6000000000000001px);
    background-size: 12px 12px;
    color: white;
  }

  #app {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
  }

</style>