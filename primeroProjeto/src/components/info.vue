<template>
  <div>
    <p v-if="esta_trabalhando">TRABALHANDO</p>
    <p v-else="esta_trabalhando">DESEMPREGADO</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <p v-show="mostrar_email">Mende uma mensagem para : {{ email }}</p>
  </div>
</template>
<script lang='ts'>
export default {
  name: 'Info',
  data() {
    return{
      esta_trabalhando: false,
      mostrar_email: true,
      email: 'isaacssb@gmail.com'
    }
  }
}
</script>