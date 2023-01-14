<template>
  <div class="full-width">
    <header class="container">
    <div class="infos">
      <img src="../assets/profile.jpg" alt="">
      <div>
        <h1>Luis Augusto Baisch Soares</h1>
        <p>Estudante de Análise e Desenvolvimento de Sistemas, com foco em Front-End</p>
      </div>
    </div>
    <div class="redes">
      <ul>
        <li><a href=""><img class="logo" src="../assets/github.png" alt=""></a></li>
        <li><a href=""><img class="logo" src="../assets/linkedin.png" alt=""></a></li>
        <li><a href=""><img class="logo" src="../assets/whatsapp.png" alt=""></a></li>
      </ul>
    </div>
  </header>
  </div>
  

</template>

<script>
export default {
  name: 'MainHeader',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full-width{
  width: 100%;
  box-shadow: 0px 4px 8px rgba(20,40,60,.2);
}
header{
  padding: 15px 10px;
  
}
header, .infos, ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
.infos img{
  height: 120px;
  border-radius: 15px;
}
.logo{
  height: 30px;
}
.logo:hover{
  transform: scale(1.1);
}
</style>
