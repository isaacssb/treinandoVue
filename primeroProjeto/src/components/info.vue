<template>
  <div>
    <p v-if="esta_trabalhando">TRABALHANDO</p>
    <p v-else="esta_trabalhando">DESEMPREGADO</p>
    <ul>
      <li v-for="(technology, index) in backend_technologies" v-bind:key="index">{{technology}}</li>
    </ul>
    <p>List front end</p>
    <ul>
      <li v-for="technology in frontend_technologies">
        {{technology.language}}
      </li>
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
      link: 'https://google.com',
      backend_technologies: ["JS","PHP","Phython"],
      frontend_technologies: [
        {id: 1, language: 'HTML'},
        {id: 2, language: 'CSS'},
        {id: 3, language: 'VUE'}
      ]
    }
  }
}
</script>