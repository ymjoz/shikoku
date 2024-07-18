<template>
  <span>
    <slot />
  </span>
</template>


<script>
  export default {
    name: 'AlertVue',
    props: {
      type: {
        type: String,
        default: 'info'
      }
    }
  }

</script>
