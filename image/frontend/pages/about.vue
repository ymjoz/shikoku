<template>
  <div>
    <div>
      <p>
        hola About.
      </p>
      <p>
        {{ foo }}
      </p>
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

  const foo = useFoo()

</script>