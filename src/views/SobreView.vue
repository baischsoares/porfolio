<template>
  <div>
   <h2 >Sobre mim </h2>
   <p>Sou estudante de Análise e Desenvolvimento de Sitemas e tenho focado meus estudos no desenvolvimento Front-End, em especial no framework Vue.js</p>
   <p>Atualmente sou estagiário de desenvolvimento na Positivo Tecnologia</p>
   <p>Meu objetivo profissional é me aprofundar no desenvolvimento front-end para oferecer as melhores soluções para os problemas levantados.</p>
   <h3>Tecnologias conhecidas</h3>
   <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Vue.Js</li>
    <li>Wordpress</li>
    <li>Github</li>
    <li>Firebase</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'SobreView',
}
</script>

<style scoped>
p{
  margin-top: 10px;
  width: 70%;
}
h3{
  margin: 20px 0px;
}
ul{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
li{
  padding: 10px 15px;
  background: #844685;
  color: #fff;
  font-size: 1.125rem;
  border-radius: 10px;
}
</style>
