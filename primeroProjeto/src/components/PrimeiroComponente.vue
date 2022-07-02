<template>
  <h1>ola eu sou o {{ nome }} {{sobrenome}}</h1>
</template>

<script>
  export default {
    name: 'PrimeiroComponente',
    data() {
      return {
        nome: 'isaac',
        sobrenome: 'barreto'
      }
    }
  }

</script>