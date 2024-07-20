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

  nav {
    background-color: #333;
    /* 背景色 */
    padding: 1em;
    /* 內邊距 */
  }

  nav a {
    color: #fff;
    /* 文字顏色 */
    font-size: 1.2em;
    /* 字體大小 */
    text-decoration: none;
    /* 移除下劃線 */
    margin-right: 1em;
    /* 右外邊距 */
  }

  nav a:hover {
    color: #ffd700;
    /* 滑鼠懸停時的文字顏色 */
  }

  nav a.active {
    font-weight: bold;
    /* 當前頁面的連結加粗 */
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