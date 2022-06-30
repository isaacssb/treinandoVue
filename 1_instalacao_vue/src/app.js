const MyNameApp = {
  data() {
    return {
      name: "Isaac",
      age: 24
    }
  }
}

// CreateApp -> Criando um app
// .mount -> Montar
Vue.createApp(MyNameApp).mount("#app");