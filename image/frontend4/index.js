
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
      
      searchTerm: '',
    };
  },

  computed: {
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
      return this.showAnswer ? 'Hide Answer' : 'Show Answer';
    },
  },

})


app.mount('#app');

