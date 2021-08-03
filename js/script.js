var app = new Vue (
  {
    el:"#app",
    data:{
      albums:[],
      selected:'',
      genres:[],
    },
    mounted:function(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.albums = response.data.response;
        this.albums.forEach((item) => {
          if (!this.genres.includes(item.genre)) {
            this.genres.push(item.genre);
          }
        });
        this.albums.sort((a,b) => (a.year > b.year) ? 1 : -1);
      });
    }
  }
)
