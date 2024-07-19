<script setup lang="ts">

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
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<style>
  body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(#212943 0.6000000000000001px,
        #0f141c 0.6000000000000001px);
    background-size: 12px 12px;
    color: rgb(234, 205, 103);
  }

  .gold-link {
    color: gold;
    font-size: 1.2em;
  }

  #app {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
  }

</style>