<template>
  <div>
    <!-- Image and text -->
    <nav class="navbar texto-superior barra-superior">
      <img src="../assets/logo.png" width="100" height="100" class="d-inline-block align-top" alt="" loading="lazy">
      <h1 class="navbar-brand" href="#">
        {{ user.NAME }} <hr> {{ user.email }}
      </h1>
      <form class="form-inline my-2 my-lg-0">
        <!-- <div class="bg-info clearfix">
          <button type="button" @click.prevent="logOut" class="btn btn-secondary float-right">Salir</button>
        </div> -->
        <button 
          class="btn btn-outline-success my-2 my-sm-0" 
          type="button"
          @click.prevent="logOut"
          >Salir
        </button>
      </form>
    </nav>
    <div class="container">
      <!-- <p>
        {{ user.username }}
      </p>
      <p>
        {{ user.email }}
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            user:{}
        }
    },
    methods:{
        getUserDetails(){
          let user = localStorage.getItem('user');
          let token = localStorage.getItem('jwt');

          if(token){
            this.user =JSON.parse(user);
          }
        },
        logOut(){
          localStorage.removeItem('jwt');
          localStorage.removeItem('user');
          this.$router.push('/');
        }
    },
    created(){
        this.getUserDetails();
    }
}
</script>

<style>

.navbar-brand{
  /* margin-right: 74%; */
  line-height: initial;
}

.barra-superior{
  background: #0c6088;
  color: aliceblue;
  box-shadow: 0px 5px #243755;
}

.texto-superior{
  color: aliceblue;
}

/* img{
  border-style: groove;
} */

/* img:hover{
  transform: scale(1.2);
} */

.btn-outline-success{
  color: antiquewhite;
  border-color: antiquewhite;
}

</style>