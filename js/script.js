
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// **Bonus**
// Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.


const { createApp } = Vue

createApp({
  data() {
    return {
      email: ''
    }
  },
  methods: {
    getApi() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
      .then( risultato => {
        console.log(risultato.data);
        this.email = risultato.data.response;
      })
      .catch( error =>  {
        console.log(error);
      })
    }
  },
  mounted(){
    this.getApi();
    console.log('montata');
  }
}).mount('#app')