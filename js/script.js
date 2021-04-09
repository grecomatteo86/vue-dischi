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
        // ASSEGN0 i dati server al mio NUOVO array albums
        this.albums = response.data.response;
        //con il forEach mi prendo i genre dall'array albums e li pusho nel NUOVO array genres
        this.albums.forEach((item) => {
          // console.log(item.genre);
          if (!this.genres.includes(item.genre)) {
            this.genres.push(item.genre);
          }
        });
        //ordino gli albums secondo lo year
        this.albums.sort((a,b) => (a.year > b.year) ? 1 : -1);
      });
    }
  }
)
