
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
      // rossiValue: '好口貝。雙子女@@',
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
    testFunc() {
      return this.rossiValue;
    },
  },

})


app.mount('#app');

