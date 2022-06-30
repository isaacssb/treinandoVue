const MyNameApp = {
  data() {
    return {
      name: "Isaac",
      age: 24,
      input_name: ""
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      this.name = this.input_name;
      console.log(this.input_name);
    }
  },
}

// CreateApp -> Criando um app
// .mount -> Montar
Vue.createApp(MyNameApp).mount("#app");