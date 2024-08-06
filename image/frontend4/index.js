
// 定義一個函數來生成隨機8位數字
function getRandomNumber(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}




const app = Vue.createApp({

  data() {
    return {
      newBlog: "", // 使用watch監聽
      blogsCount: 4,
      currentCount: 0,
      countDown: 8,
      timer: null,
      showAnswer: false,
      rossiValue: getRandomNumber(8),
      urltotwogirls: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      // playlist: ['命運交響曲', '小夜曲', 'Blinding Lights', 'Shape of You', 'Cello Suite No. 1 in G Major, BWV 1007', 'Clair de Lune', ],
      playlist: [
        '命運交響曲',
        '小夜曲',
        'Blinding Lights',
        'Shape of You',
        '千里共蟬娟',
        'Clair de Lune',
        '月光',
        'Cello Suite No. 1 in G Major, BWV 1007',
        'Canon in D Major',
        '好口唄',
      ],
      todos: [
        { id: 1, content: '看賈伯斯傳', complete: true },
        { id: 2, content: 'Buy eggs', complete: false },
        { id: 3, content: 'Buy bread', complete: true },
        { id: 4, content: '把項目做完', complete: false },
      ],
      // books: [
      //   '賈伯斯傳',
      //   '芬蘭驚艷',
      //   '蘇菲的世界',
      //   'JavaScript高級程序設計',
      // ],
      books: [
        { id: 1, title: '賈伯斯傳', price: 100 },
        { id: 2, title: '芬蘭驚艷', price: 100 },
        { id: 3, title: '蘇菲的世界', price: 100 },
        { id: 4, title: 'JavaScript高級程序設計', price: 100 },
      ],
      blogPosts: [
        //  'Vue 3.1 正式版发布',
         'Vue 3.3 beta版发布',
         'Vue 2.x vs Vue 3.x', 
         'Nodejs 18x 開發', 
         'React 16.8 正式版发布',
      ],
      
      
      searchTerm: '',
    };
  },

computed: {
    vueBlogs() {
      console.log('調用了vueBlogs計算屬性');
      return this.blogPosts.filter((post) => post.toLowerCase().includes('vue'));

    },
    filteredPlaylist() {
      if (this.searchTerm) {
        return this.playlist.filter((song) => {
          return song.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      } else {
        // return this.playlist;
        return [];
      }
    },
    toggleAnswerVisibility() {
      return this.showAnswer ? 'Hide Answer ' + this.countDown : 'Show Answer';
    },
  },

  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    getVueBlogs() {
      // 每次click button都會執行
      console.log('方法: getVueBlogs()被調用');
      return this.blogPosts.filter((post) => post.toLowerCase().includes('react'));
    }
  },

  watch: {
    showAnswer(newVal, oldVal) {
      if (newVal) {
        this.countDown = 8;
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        this.timer = setInterval(() => {
          this.countDown -= 1;
          if (this.countDown === 0) {
            this.showAnswer = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    // blogPosts: {
    //   handler(newVal, oldVal) {
    //     console.log('blogPosts數據發生了變化');
    //     this.blogsCount = newVal.length;
    //   },
    //   deep: true,
    // },
    newBlog(newVal, oldVal) {
      console.log('newBlog數據發生了變化');
      // 模擬耗時操作
      setTimeout(() => {
        this.blogsCount += 1;
        this.blogPosts.push(newVal);
      }, 3000);
    },
  }

})


app.mount('#app');

