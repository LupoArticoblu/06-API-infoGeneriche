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
    //risposta DI Callback
    .then((response) => {
      console.log(response.data);
      //valorizzo numero con la risposta per stamparla in pagina
      this.numero = response.data.response;
    })
  },
  methods: {
  }
}).mount('#app');