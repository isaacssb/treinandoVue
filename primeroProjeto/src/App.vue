<template>
  <PrimeiroComponente />
  <Pessoa />
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import Pessoa from './components/Pessoa.vue'
  export default {
    name: 'App',
    components:{
      PrimeiroComponente,
      Pessoa
    }
  }
</script>