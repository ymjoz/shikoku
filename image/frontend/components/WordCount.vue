<template>
  <div>
    <p>Word Count 🇺🇸 vs 🇯🇵</p>
    <!-- <input v-model="countWords" type="text" /> -->
    <textarea v-model="countWords"></textarea>
    <p>輸入了 {{ count }} 個字</p>
  </div>
</template>

<script>
  export default {
    name: 'WordCountVue',
    data() {
      return {
        countWords: '',
        test: 'Shikoku-Island'
      }
    },
    computed: {
      count() {
        return this.countWords.length
      }
    },
  }
</script>

<style scoped>


  input {
    padding: 8px 14px;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    outline: none;
    background: hsl(280deg, 50%, 30%, 0.2);
    color: rgb(244, 242, 238);
  }

  textarea {
    padding: 8px 14px;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    outline: none;
    background: hsl(280deg, 50%, 30%, 0.2);
    color: rgb(244, 242, 238);
    height: 110px;
  }

  p {
    margin-top: 1em;
    margin-bottom: 2em;
  }



</style>