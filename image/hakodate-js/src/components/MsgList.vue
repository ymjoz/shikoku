<template>
  <div>
    <h1>會一直忘?持續一直練避免忘記..</h1>
    <h2>{{ helloMsg }}</h2>
    <hr>
    <div>
      <div v-if="loading">loading...</div>
      <ul v-else>
        <li v-for="post in posts">{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios';

  const messages = ref([
    { content: 'hello, queen!' },
    { content: '是那天早上的國道一嗎' },
    { content: '一切都模糊了' },
  ])

  const helloMsg = ref('hello, ROSSIBLACK!')
  const posts = ref([])
  const loading = ref(false)


  // axios.get('https://jsonplaceholder.typicode.com/posts')
  onMounted(async () => {
    loading.value = true;

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(response.data.slice(0, 5));
    console.log(response);
    posts.value = response.data.slice(0, 5);
    loading.value = false;
  })
</script>

<style lang="scss" scoped></style>