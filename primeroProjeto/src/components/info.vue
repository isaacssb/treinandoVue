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
    <p>Acesse o link <a v-bind:href="link" target="_blank">aqui</a></p>
    <Picture />
  </div>
</template>
<script>
import Picture from "./Picture.vue"
export default {
  name: 'Info',
  components: {
    Picture
  },
  data() {
    return{
      esta_trabalhando: false,
      mostrar_email: true,
      email: 'isaacssb@gmail.com',
      link: 'https://google.com'
    }
  }
}
</script>