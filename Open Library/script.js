const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Open library',
      apiUrl: 'http://openlibrary.org/search.json',
      author: '',
      books: [],
      isLoading: false,
      currentPlaceholder: '',
      place: [
        'Manzoni',
        'Dante',
        'Tolstoj',
        'Shakespeare',
        'Hugo',
        'Vonnegut',
      ],
      pIndex: 0,
      pInterval: null,
    };
  },
  methods: {
    // Funzione che richiama l'API
    getApi() {
      this.isLoading = true;
      axios.get(`${this.apiUrl}?author=${this.author}`)
        .then((response) => {
          console.log(response.data.docs);
          this.books = response.data.docs;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });
    },

    // Funzione che cambia il placeholder
    changePlaceholder() {
      this.currentPlaceholder = this.place[this.pIndex];
      this.pInterval = setInterval(() => {
        this.pIndex = (this.pIndex + 1) % this.place.length;
        this.currentPlaceholder = this.place[this.pIndex];
      }, 2000);
    },
    check() {
      clearInterval(this.pInterval);
    }
  },
  mounted() {
    this.changePlaceholder();
  },
  beforeUnmount() {
    this.check();
  },
}).mount('#app');