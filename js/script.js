// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// **Bonus**
// Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.


const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'my best friends',
      emails: [],
      isLoaded: false
    }
  },
  methods: {
    getApi() {
      for (let i = 1; i <= 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( result => {
        console.log(result.data.response);
        this.emails.push(result.data.response);
      })
    }
  },
},
  mounted(){
    this.getApi();
    console.log('montata');
  }
}).mount('#app')