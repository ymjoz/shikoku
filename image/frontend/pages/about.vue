<template>
  <div>
    <!-- <section>
      <p>
        This is a page about us.
      </p>
    </section> -->
    <div>
      <p>
        hello About.
      </p>
      <NuxtLink to="/" class="gold-link">Home</NuxtLink>
    </div>

  </div>

</template>


<style scoped>

  p {
    font: 2.8em sans-serif;
    font-family: Helvetica, Arial, sans-serif;
  }
</style>

<script setup lang="ts">
  definePageMeta({
    layout: 'skk-base-layout',
  })
</script>