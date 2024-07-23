<template>
  <div>
    <h1>Admin Dashboard(IT God)</h1>

    <p>
      bar value is: {{ foo }}
    </p>
    <p>
      API_URL: {{ config_data.public.apiBaseUrl }}
    </p>
    <p>
      API_KEY: {{ config_data.public.apiKey }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import { useRuntimeConfig } from '#app';

  definePageMeta({
    layout: 'admin-dashboard',
  })

  const foo = useFoo()
  const config_data = useRuntimeConfig()

</script>

<style lang="scss" scoped></style>