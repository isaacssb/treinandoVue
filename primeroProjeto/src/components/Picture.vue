<template>
  <img :src="avatar" :alt="descricao">
</template>
<script>
  export default {
    name: 'Picture',
    data() {
      return {
        avatar: "/img/teste.png",
        descricao: "Matheus"
      }
    }
  }
</script>