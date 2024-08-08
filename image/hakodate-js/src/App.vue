<script setup>
  // import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import WordCount from './components/WordCount.vue';
  import MessageItem from './components/MessageItem.vue';
  import PropTypes from './components/PropTypes.vue';
  import MessageList from './components/MessageList.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Hakodate! 函館:)" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/tesla">Tesla</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

  <!-- <HelloWorld msg="Hakodate! 函館:)" /> -->
  <!-- <WordCount /> -->
  <!-- <MessageItem msg="Hello, queen!" time="2021-10-10" sender="ROSSI" /> -->
  <!-- <MessageItem msg="是那天早上的國道一嗎" time="2006-01-02" sender="QUEEN" /> -->
  <!-- <MessageItem msg="一切都模糊了" time="2006-01-02" sender="QUEEN" /> -->
  <!-- <PropTypes :num="1789" :bool="true" :obj="{ a: 1, b: 99, c: 123 }" :array="[1, 2, 3]" /> -->
  <MessageList />
</template>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
  }

  body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(#212943 0.6000000000000001px,
        #0f141c 0.6000000000000001px);
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

  h1 {
    margin-bottom: 2em;
  }

  /* 以下是原始的style配置 */
  /* 
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  } */
</style>
