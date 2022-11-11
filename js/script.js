
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// **Bonus**
// Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.


const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Email List',
      email1: '',
      email2: '',
      email3: '',
      email4: '',
      email5: '',
      email6: '',
      email7: '',
      email8: '',
      email9: '',
      email10: '',
      isLoaded: false
    }
  },
  methods: {
    getApi() {
      this.isLoaded = false;
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
      .then( result => {
        console.log(result.data);
        this.email1 = result.data.response;
      })
      .catch( error =>  {
        console.log(error); 
      }),
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
      .then( result => {
        console.log(result.data);
        this.email2 = result.data.response;
      })
      .catch(error => {
        console.log(error);
      }),
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
      .then( result => {
        console.log(result.data);
        this.email3 = result.data.response;
      })
      .catch(error => {
        console.log(error);
      }),
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
      .then(result => {
        console.log(result.data);
        this.email4 = result.data.response;
      })
      .catch(error => {
        console.log(error);
      }),
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
       .then(result => {
        console.log(result.data)
        this.email5 = result.data.response;
       })
       .catch(error => {
        console.log(error);
       }),
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
        .then(result => {
          console.log(result.data)
          this.email6 = result.data.response;
        })
        .catch(error => {
          console.log(error);
         }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
          .then(result => {
            console.log(result.data);
            this.email7 = result.data.response;
          })
          .catch(error => {
              console.log(error)
          }),
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
          .then(result => {
            console.log(result.data);
            this.email8 = result.data.response;
          })
          .catch(error => {
            console.log(error)
          }),
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
          .then(result => {
            console.log(result.data);
            this.email9 = result.data.response;
          })
          .catch(error => {
            console.log(error)
          }),
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail?title=numero')
          .then(result => {
            console.log(result.data);
            this.email10 = result.data.response;  
            this.isLoaded = true;
          })
          .catch(error => {
            console.log(error)
         
          })
          
    },
      
  },
  mounted(){
    this.getApi();
    console.log('montata');
  }
}).mount('#app')