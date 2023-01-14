<template>
  <div class="projeto">
    <div>
      <h2>{{ projeto.nome }}</h2>
      <p>{{ projeto.descricao }}</p>
    </div>
    
    <ul>
      <li v-for="tecnologia in projeto.tecnologias">{{ tecnologia }}</li>
    </ul>
    <div>
      <div class="links"><span>URL: </span> <a :href="projeto.url">{{ projeto.url }}</a></div>
      <div class="links" v-if="projeto.git"><span>Repositório: </span> <a :href="projeto.git">{{ projeto.git }}</a></div>
    </div>
   
  </div>
  
</template>

<script>
export default {
  name: 'MainHeader',
  props: ["projeto"]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projeto{
  display: grid;
  grid-gap: 15px;
  box-shadow: 0px 4px 8px rgba(20,40,60,.2); 
  padding: 10px;
}
.projeto:hover{
  transform: scale(1.05);
}
h2{
  color: #456086;
}
p{
  color: #999;
}

ul{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
}
li{
  padding: 5px 10px;
  background-color:#844685;
  color: white;
  font-weight: 500;
  border-radius: 5px
};
.links{
  margin-top: 5px;
}

@media(max-width: 900px){
  .projeto{
    margin-bottom: 20px;
  }
  .links{
    margin-top: 15px;
  }
}

</style>
