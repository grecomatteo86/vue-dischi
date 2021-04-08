var app = new Vue (
  {
    el:"#app",
    data:{
      albums:[

      ]
    },
    mounted:function(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        // console.log(response.data.response);
        this.albums = response.data.response;
      });
    }
  }
)
