<template>
<div class="w3-container w3-center w3-animate-top">
    <!-- <div class="container"> -->
    <!-- <img src="../../richard.jpg" alt=""> -->
        <div class="modal-container">
            <!-- <div class="modal modal-close"> -->
                <!-- <span class="close"> <i class="fab fa-times"></i></span> -->
                <button @click.prevent="inicio" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                    <!--Contenedor principal-->
                <div class="contenedor_prinSesion">	
                    <!--Formulario-->
                    <form class="formularioSesion">
                    <img  src="../../assets/presto.png" class="logoSesion" >
                        <p class="tituloIniciar"><strong>Iniciar</strong></p>
                        <h1 class="titulo1Sesion">
                            Inicia sesión para continuar en <br />
                            <p class="tituloSesion1"><strong>PRESTO</strong></p>
                        </h1>
                        <input v-model="login.email" style="border-left: none;border-top:0px solid 	#FF0000; border-right: none;border-bottom: 4px solid #007bff;margin-bottom: 20px; margin-left: 14px;width: 70%;
                        height: 42px;background: #F5F5F5;outline: none; background-image: url(../../5.png); background-position: 0px 0px;background-repeat: no-repeat; " class="usuarioo" type="text" placeholder="Email" name="">
                        <input v-model="login.password" type="password" placeholder="Contraseña" name="">
                        <h1 class="wSesion">
                            
                            <button class="btn btn-primary" @click.prevent="loginUser" type="submit">continuar</button>
                        
                            <p class="ttNoCuentaS">¿No tienes una cuenta? <a href="/register" @click.prevent="register" class="linkRegistro">registrate</a></p>

                        </h1>
                        <div class="imgSesionIzq" style="text-align: left;">
                            <img class="" src="../../assets/3.png" alt="" width="230">
                        </div>
                        <div class="imgSesionDer" style="text-align: left;">
                            <img  class="" src="../../assets/4.png" alt="" width="100"
                            height="180">
                        </div>
                    </form>
                    <!--Fin formulario-->
                </div>
                <!--Fin contenedor principal-->				
            <!-- </div> -->
            <!-- <pre>
                {{ login.email }}
                {{ login.password }}
            </pre> -->
        </div>
    <!-- </div> -->
</div>
</template>

<script>
import swal from 'sweetalert';

export default {
    name: 'TheLogin',
    data(){
        return{
            login:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        async loginUser(){
            try{
                let response = await this.$http.post('/api/auth/login', this.login)
                console.log(response.data)
                let token = response.data.accessToken;
                let user = response.data.user;
                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));
                if(token){
                    swal("Éxito","Login Correcto", "success");
                    this.$router.push('/home');
                }
            }
            catch(e){
                swal("Oops", e.response.data.error ,"error")
                
            }
        },
        async inicio(){
            this.$router.push('/');
        },
        async register(){
            this.$router.push('/register');
        }
    }
}
</script>

<style scoped>

/********************Inicio sesion*******************************/
.logoSesion{
	width: 200px;
	height: 100px;
    align-content: center;
    align-items: center;
    position: relative;
}

/**Contenedor principal**/
.contenedor_prinSesion{
    /* display: inline-block; */
	justify-content: center;
	display: flex;
	align-items: center;
	width: 90%;
	height: 90%;
    margin-top:-60px;
    border-radius: 1cm;
}
 
/**Formulario**/
.formularioSesion {
    margin-top: 50px;
    display: inline-block;
    background-color: #F5F5F5;
    width: 100%;
    height: 100%;
    padding: 0px;
    box-shadow: 10px 10px #E5E4E4;
    border-radius: 0.7cm;
}

/**Titulo del formulario**/
.titulo1Sesion {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 0px;
    padding: 3px;
}
.tituloSesion1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 15px;
    padding: 3px;
}
.tituloIniciar {
	padding: 3px;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #0499D8;
}

input[type=password] {
	font-family: 'Open Sans', sans-serif; 
	font-size: 25px; 
	border-left: none;
	border-top:0px solid #FF0000; 
	border-right: none;
	border-bottom: 4px solid #007bff;
	margin-bottom: 20px;
	margin-left: 14px;
	width: 75%;
	height: 44px;
	background: #F5F5F5;
	outline: none;


}
.formularioSesion input[type=password] {
  width: 70%;
  background-image: url("../../assets/6.png");
  background-position: 0px 0px;
  background-repeat: no-repeat ;
  padding-left: 40px ;
}
.usuarioo {
	font-family: 'Open Sans', sans-serif;
	font-size: 20px; 
	background-image: url("../../assets/6.png");
  	background-position: 0px 0px;
  	background-repeat: no-repeat;
  	padding-left: 40px 
}
.boton_sesion{
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    background-color: #0499D8;
    border: none;
    color: white;
    padding: 10px 32px;
    text-decoration: none;
    margin: 4px 2px;
    font-weight: bold;
    outline: none;
    cursor: pointer;

}
.wSesion {
    display: center;
    margin-top: 10px;
}
.ttNoCuentaS {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    margin-top: 5px;
   	margin-bottom: 0px; 
    padding: 3px;

}
.linkRegistro{
	color: #0499D8;

  cursor: pointer;

}
.imgSesionIzq
{
	margin-top: -120px;
	margin-left: -30px
}
.imgSesionDer
{
	margin-top: -220px;
	margin-left: 480px
}
::placeholder {

     font-family: 'Open Sans' sans-serif;
     font-size: 18px;
     font-weight: 300;
     color: #9B9A9A;

    } 
/********************Registro*******************************/

/*Tipo de usuarios */

.principalU{
  font-family: 'Open Sans', sans-serif;
  font-size: 25px;
  font-weight: 300;

}
/*imagenes */
.contenedorU{
  text-align: center;
  width: 100%;


}
.contenedor-2U{
 
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
 width: 100%;

  
}
.tipoU{
  margin-top: 20px;
  padding: 10px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  background: #F8FBFD;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
 
}

.cont-imgU{
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  background: #fff;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.imgU{
  width: 100px;
  height: 100px;
}

/*texto*/

.contenedor-22U{
 
 display: flex;
 justify-content: space-around; 
 flex-wrap: wrap;
 width: 100%;
 margin-bottom: 20px;



}
.nombreU{
 
  padding: 10px;
  width: 200px;
  height: 40px;
  overflow: hidden;
  background:#FDAD30 ;
  text-align: center;
  cursor: pointer;

}

.txt_imagen{
  font-family: 'Open Sans', sans-serif;
   font-size: 15px;
  font-weight: 700;
}
/*link*/
.linkU{
  font-family: 'Open Sans', sans-serif;
  color:#009BCE;
  font-size: 15px;
  font-weight: 300;

}
.registroU{
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 300;
  background: #fff;

}
/*prueba ocultatr*/
.modal-container_intercambio{
  opacity: 1;
  visibility:visible;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgb(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalI{
  /* background-size: cover; */
  width: 70%;
  height: 90%;
  background: white;
  
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  /* transition: transform 1s; */
  transform: translateY(0%);
  border-radius: 10px;
  /*overflow: hidden;*/
  
}
.closeI{
  position: absolute;
  top: 5px;
  right: 5px;
  display: inline-block;
  width: 20px;
  height:20px;
  color: #000;
  
  border-radius: 50%;

  cursor: pointer;
}
.modal-closeI{
  transform: translateY(-200%);
}


/*modal formulario*/
.par1{
  margin-top: 20px;
  background: #F8FBFD;
}
.par2{
  /* visibility:hidden; */
  margin-top: 20px;
  background: #069CCC ;
  position: fixed;
  z-index: 9;
}
.par3{
  /* visibility:hidden; */
  margin-top: 20px;
  background: #FDAD30;
  position: fixed;
  z-index: 10;
}

/*modal sesion*/
.modal-container{
  /* opacity: 1;
  visibility:visible; */
  position: relative;
  /* z-index: 9; */
  width: 50%;
  height: 550px;
  top: 10px;
  left: 25%;
  background: rgb(245, 239, 239);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7cm;
  border: black;
}
.modal{
  background-size: cover;
  width: 40%;
  height: 90%;
  background: white;
  
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  transition: transform 1s;
  transform: translateY(0%);
  border-radius: 10px;
  overflow: hidden;
  
}
.close{

  position: absolute;
  top: 5px;
  right: 5px;
  display: inline-block;
  width: 20px;
  height:20px;
  color: #000;
  border-radius: 50%;
  cursor: pointer;
}
.modal-close{
  transform: translateY(-200%);
}

</style>