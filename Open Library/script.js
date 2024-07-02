const { createApp } = Vue;

console.log(axios);

createApp({
  data() {
    return {
      title: 'Open library',
      apiUrl: 'http://openlibrary.org/search.json',
      author: 'Zlatan Ibrahimovic',
      books: [],
      isLoading: false
    };
  },
  methods: {
    //funzione che richiama l'API
    getApi(){
      this.isLoading = false;
      axios.get(this.apiUrl + '?author=' + this.author) 
      .then((response) => {
        console.log(response.data.docs);
        this.books = response.data.docs;
        this.isLoading = true;
      })
    }
  },
  mounted() {
    
    this.getApi();
  },
}).mount('#app');