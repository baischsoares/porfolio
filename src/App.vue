<template>
  <div class="id">
    <Header />
    <div class="main container">
      <nav>
        <router-link class="menu-lateral" to="/">Projetos</router-link>
        <router-link class="menu-lateral" to="sobre">Sobre</router-link>
      </nav>
      <router-view/>
    </div>
    
  </div>

</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
  
}


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

*{
  box-sizing: border-box;
}

body, p, h1, h2, h3, ul{
  margin: 0px;
  padding: 0px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif
}
h1, h2, p, a{
  word-break: break-all;
}
ul{
  list-style: none;
}
img{
  max-width: 100%;
  display: block;
}
.container{
  max-width: 90%;
  margin: 0 auto;
}
.main{
  display: grid;
  grid-template-columns: 300px auto;
  gap: 40px;
  margin-top: 60px;
}
.id{
  margin-bottom: 50px;
}
.menu-lateral{
  display: block;
  text-decoration: none;
  color: #456086;
  font-size: 1.25rem;
  text-align: center;
  padding: 20px 0px;
  border-bottom: 1px solid #456086;
}
.menu-lateral:hover{
  background: #456086;
  color: #fff
}
.router-link-active{
  background: #456086;
  color: #fff
}

@media(max-width: 900px){
  .main{
    display: block;
  }
  nav{
    margin-bottom: 40px;
  }
}

</style>
