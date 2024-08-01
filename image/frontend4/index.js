const playList = {
  data() {
    return {
      rossiValue: 100,
      playlist: ['命運交響曲', '小夜曲', 'Blinding Lights', 'Shape of You', 'Cello Suite No. 1 in G Major, BWV 1007', 'Clair de Lune', ],
      searchTerm: '',
    }
  },

  computed: {
    filteredPlaylist() {
      if (this.searchTerm) {
        return this.playlist.filter((song) => {
          return song.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      } else {
        return this.playlist;
      }
    },
    testFunc() {
      return this.rossiValue;
    }
  },

}

Vue.createApp(playList).mount('#app');

