//creiamo un gioco che compie due chiamate API una da utente l'altra da CPU, il numero piu alto vince

const { createApp } = Vue;

console.log(axios);

createApp({
  data() {
    return {
      msg:'AJAX GAME',
      Giocatore_1: '',
      CPU: '',
      //creiamo un loading
      isLoading: false
    };
  },
  methods: {
    //funzione che richiama l'API
    getApi(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then((response) => {
        
        this.Giocatore_1 = response.data.response;
      })
      
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then((response) => {
        
        this.CPU = response.data.response;
        this.isLoading = true;
      })
      
      

    }
  },
  mounted() {
    
    this.getApi();
  },
}).mount('#app');