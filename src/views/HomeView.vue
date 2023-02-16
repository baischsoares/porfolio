<template>
  <div>
    <div class="projetos">
      <ListaProjetos v-for="projeto in projetos" :projeto="projeto" :key="projeto.nome"/>
    </div>
  </div>
  

</template>

<script>
import ListaProjetos from '@/components/ListaProjetos.vue'
export default {
  name: 'HomeView',
  components: {
    ListaProjetos
  },
  data(){
    return{
      projetos: [
        {
          nome: "Simulador de Investimentos",
          descricao: "Simulador de investimentos feito com Vue.js. ",
          tecnologias:["HTML", "CSS", "JavaScript", "Vue.js", "API"],
          url: "https://finance-simula.firebaseapp.com/",
          git: "https://github.com/baischsoares/finance-simulator",
        },
        {
          nome: "To do App",
          descricao: "Aplicativo de tarefas feito com Vue.js ",
          tecnologias:["HTML", "CSS", "JavaScript", "Vue.js"],
          url: "https://to-do-app-34222.web.app/",
          git: "https://github.com/baischsoares/to-do-app",
        },
        {
          nome: "Buscador GitHub",
          descricao: "Buscador de perfis e repositórios do GitHub, que utiliza api e desenvolvido com Vue.js ",
          tecnologias:["HTML", "CSS", "JavaScript", "Vue.js"],
          url: "https://teste-lux-one.web.app/",
          git: "https://github.com/baischsoares/lux-one",
        },
        {
          nome: "Encurtador de link",
          descricao: "Projeto de encurtador de link desenvolvido com JavaScript e utilizando API",
          tecnologias:["HTML", "CSS", "JavaScript"],
          url: "https://encurtador-de-link-b2e53.web.app/",
          git: ""
        },
        {
          nome: "Landing Page Bookmark",
          descricao: "Projeto de landing page responsiva",
          tecnologias:["HTML", "CSS", "JavaScript"],
          url: "https://bookmark-4aa85.web.app/",
          git: "https://github.com/baischsoares/bookmark-lp"
        },
        {
          nome: "Landing Page Fylo",
          descricao: "Projeto de landing page responsiva",
          tecnologias:["HTML", "CSS", "JavaScript"],
          url: "https://fylo-9fd5f.web.app/",
          git: "https://github.com/baischsoares/fylo-lp"
        },
        {
          nome: "Landing Page Master",
          descricao: "Projeto de landing page responsiva",
          tecnologias:["HTML", "CSS", "JavaScript"],
          url: "https://master-d44e9.web.app/",
          git: ""
        }
      ]
    }
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 50px;
}
.projetos{
  display: grid;
  grid-template-columns: auto auto;
  gap: 60px 30px;
}
@media(max-width: 900px){
  .projetos{
    display: block;
  }
}
</style>
