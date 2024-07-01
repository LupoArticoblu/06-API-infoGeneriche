const { createApp } = Vue;

console.log(axios);

createApp({
  data() {
    return {
      msg:'BENVENUTO AJAX',
      numero: '',
    };
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    //risposta DI Callback (usare le arrow function perchè altrimenti Vue va in conflitto utilizzando this come per le funzioni interval)
    .then((response) => {
      console.log(response.data);
      //valorizzo numero con la risposta per stamparla in pagina
      this.numero = response.data.response;
    })
    //nel caso in vui l'indirizzo cambi o ci siano altri errori usiamo catch per riconoscerli e gestirli
    .catch((error) => {
      console.log(error.code);
    })
  },
  methods: {
  }
}).mount('#app');