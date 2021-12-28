const app = Vue.createApp({
    data() {
        return {}
        },
        methods:{
          
          
        ToggleNav(){
          document.querySelector('.nav-ul').classList.toggle('show');
          console.log("a")
        }
}})