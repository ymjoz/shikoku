<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- <p>
      show me: {{ count }}
    </p>
    <button @click="increment">add me.</button>
    <hr> -->
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TeslaVue',
    data() {
      return {
        msg: 'Tesla Auto',
        count: 100,
        posts: [],
      }
    },
    methods: {
      increment() {
        this.count++
      },

      async fetchPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postsData = await response.json()
        // this.posts = postsData.slice(0, 10)

        // 隨機選取 6 筆資料
        const randomPosts = [];
        const indices = new Set();
        while (indices.size < 6) {
          const randomIndex = Math.floor(Math.random() * postsData.length);
          indices.add(randomIndex);
        }
        indices.forEach((index) => randomPosts.push(postsData[index]));

        console.log(randomPosts);
        this.posts = randomPosts;

      },
    },

    created() {
      this.fetchPosts()
    }
  }
</script>

<style lang="scss" scoped></style>