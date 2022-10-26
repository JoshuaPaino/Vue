let mA = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log('beforeCreate() function called!', this.message) // => This function is created before Vue proxies the data. Output is undefined because this should be undefined 
  },
  created() {
    console.log('Created() function called!', this.message) // => Log data properly because the data has been seen by Vue
  },
  beforeMount() {
    console.log('beforeMount() function called!', this.$el) // => Application doesn't have access to the template yet. Output should be null
  },
  mounted() {
    console.log('mounted() function called!', this.message) // => Application has been fully complied so the message is there
  },
  beforeUpdate() {
    console.log('befoerUpdate() function Called!')
  },
  updated() {
    console.log('updated() function called')
  },
  unmounted() {
    console.log('unmounted() function called')
  },
})
mA.mount('#app')


// set time before the application
// setTimeout(() => {
//   mA.mount('#app')
// }, 300) // => time before application loads