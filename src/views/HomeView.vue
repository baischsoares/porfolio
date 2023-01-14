<template>
  <div>
   <p>area dos projetos</p>
  </div>
  

</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return{
      projetos: [
        {
          nome: "Buscador GitHub",
          descricao: "Buscador de perfis e repositórios do GitHub, que utiliza api e desenvolvido com Vue.js ",
          tecnologias:["HTML", "CSS", "JavaScript", "Vue.js"]
        },
        {
          nome: "Encurtador de link",
          descricao: "Projeto de encurtador de link desenvolvido com JavaScript e utilizando API",
          tecnologias:["HTML", "CSS", "JavaScript"]
        },
        {
          nome: "Landing Page Bookmark",
          descricao: "Projeto de landing page responsiva",
          tecnologias:["HTML", "CSS", "JavaScript"]
        },
        {
          nome: "Landing Page Fylo",
          descricao: "Projeto de landing page responsiva",
          tecnologias:["HTML", "CSS", "JavaScript"]
        },
        {
          nome: "Landing Page Master",
          descricao: "Projeto de landing page responsiva",
          tecnologias:["HTML", "CSS", "JavaScript"]
        }
      ]
    }
  }

}
</script>

<style scoped>

</style>
