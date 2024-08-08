<template>
  <div>
    <h1>字數統計App :)</h1>
    <input type="text" v-model="content" placeholder="輸入任意word">
    <p>
      Word Count: {{ count }}
    </p>
  </div>
</template>

<!-- <script>
  import { ref, computed } from 'vue'
  export default {
    name: 'WordCountVue2',
    setup() {
      const content = ref('')
      const count = computed(() => content.value.length)
      return { content, count }
    }
  } 
</script> -->

<script setup>
  import { ref, computed } from 'vue'
  const content = ref('')
  const count = computed(() => content.value.length)

</script>

<script>
  export default {
    name: 'WordCountVue2',
  }
</script>

<style scoped>

  input {
    padding: 8px 14px;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    outline: none;
    background: hsl(280deg, 50%, 30%, 0.2);
    color: rgb(75, 7, 7);
  }

  p {
    margin-top: 1em;
    margin-bottom: 2em;
  }


</style>