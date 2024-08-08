<template>
  <div>
    <p>
      {{ num }} - {{ typeof num }}<br>
      {{ bool }} - {{ typeof bool }}<br>
      {{ obj }} - {{ typeof obj }}<br>
      {{ array }} - {{ array.constructor.name }}<br>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'PropTypesVue',
    props: ['num', 'bool', 'obj', 'array']
  }

</script>

<style scoped>
  div {
    display: grid;
    grid-template-areas:
      "sender time"
      "msg msg";
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    padding: 1em;
    width: 250px;
  }
</style>