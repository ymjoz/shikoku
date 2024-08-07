const app = Vue.createApp({});

app.component('WordCount', {
  template: `<div>
    <h3>字數計算</h3>
    <textarea v-model="content" placeholder="請輸入任意字"></textarea>
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

app.component('WordCountApp', {
  template: `<div>
    <h1>Word Count App</h1>
    <WordCount />
  </div>`,
});

const vm = app.mount('#app');
