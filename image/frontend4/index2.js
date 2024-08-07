const app = Vue.createApp({});

app.component('WordCount', {
  template: `<div>
    <h3>Word Count</h3>
    <textarea v-model="content"></textarea>
    <p>你輸入了 {{ count }} 個字</p>
  </div>`,
  data() {
    return {
      content: '',
    };
  },
  computed: {
    count() {
      return this.content.trim().length;
    },
  },
});

const vm = app.mount('#app');
