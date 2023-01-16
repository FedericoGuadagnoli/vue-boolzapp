const dt = luxon.DateTime;

const app = Vue.createApp({
    data() {
        return {
            user: {
                name: 'federico',
                avatar: '_4'
            },
            contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                  }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Marco',
                  avatar: '_4',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Simone',
                  avatar: '_5',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: "A me piace più l'Xbox",
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Anche a me soprattutto perchè ha il GamePass :)',
                    status: 'received'
                  },
                  ],
                },
                {
                  name: 'Luisa',
                  avatar: '_6',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Usciamo stasera?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Uffa!! Non hai mai voglia di fare niente!!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Antonio',
                  avatar: '_7',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Pizza birra e Roma stasera??',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Vieni da me!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Lorenzo',
                  avatar: '_8',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'O fe senti, ma ci sei già andato da Tj??',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: "E' si che devo prendere qualche resistenza e un liquido fruttato nuovo!",
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:49:00',
                    text: "No ancora no! Vuoi venire anche te?",
                    status: 'received'
                  },
                  ],
                },
                {
                  name: 'Anita',
                  avatar: '_6',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Amore bisogna andare a comprare la bambola del gas',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: "E non rompermi le scatole co st'ansiaaaaaaaaaaaaa tutti i mesi",
                    status: 'received'
                  },
                  {
                    date: '10/01/2020 15:51:00',
                    text: 'OHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH :(',
                    status: 'sent'
                  },
                  ],
                },
                {
                  name: 'Antonio',
                  avatar: '_7',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Pizza birra e Roma stasera??',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Vieni da me!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Lorenzo',
                  avatar: '_8',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'O fe senti, ma ci sei già andato da Tj??',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: "E' si che devo prendere qualche resistenza e un liquido fruttao nuovo!",
                    status: 'received'
                  }
                  ],
                },
              ],

              currentIndex: 0,
              newMessage : '',
              filterValue: ''
        }
    },

    computed: {
      filteredContacts() {
        return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.filterValue.toLowerCase()));
        },
    },

    methods : {
        setCurrentIndex(index){
            this.currentIndex = index;
        },

        sortByDate(a, b) {
            return new Date(a.date) - new Date(b.date);
        },

        getCurrentMoment() {
          return dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
        },

        addMessage() {
          let NewMessageObject = {
            // date: new Date(),
            text : this.newMessage,
            status : 'sent',
            date : this.getCurrentMoment()
          }
          if (this.newMessage){
            this.contacts[this.currentIndex].messages.push(NewMessageObject);
            this.newMessage = '';
            setTimeout(() => {
              let automaticMessage = {
              text : 'Ok',
              status : 'received',
              date :  this.getCurrentMoment()
            }
            this.contacts[this.currentIndex].messages.push(automaticMessage);
            }, 1000)
          }   
        }
      } 
})

app.mount('#root');