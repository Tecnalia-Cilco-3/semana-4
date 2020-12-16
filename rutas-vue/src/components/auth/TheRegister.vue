<template>
    <div class="w3-container w3-center w3-animate-top">
        <div class="container">
            <!-- <span class="closeI"> <i class="fas fa-times"></i></span> -->
            <button @click.prevent="inicio" type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="divImagen">
                <img src="../../assets/9.png" alt="" class="imgRegistroIzq">
                <img src="../../assets/presto.png" class="logoRegistros">
                <img src="../../assets/10.png" alt="" class="imgRegistroDer">
            </div>
            <div class="contenedor_prinRegistro">
                <form class="formularioRegistro">
                    <div class="txt_regis">
                        <p class="tituloRegistrar"><strong>Registrar</strong></p>
                        <p class="titulo1Registro">
                            Registrate para ingresar  -<strong> PRESTO</strong>
                        </p>
                    </div>
                    <div class="datos">
                        <div class="form_d">
                            <div class="div_datos">
                                <input v-model="register.name" type="text" placeholder="Nombre de Usuario" class="entrada" style="background-image: url(../../assets/5.png); background-position: 0px 0px;background-repeat: no-repeat;
				    		 padding-left: 40px ;
				    		">
                                <input v-model="register.rol" type="text" placeholder="Rol" class="entrada">
                            </div>
                            <div class="div_datos">
                                <input v-model="register.email" type="text" placeholder="Correo Electronico" class="entrada">
                                <input v-model="register.password" type="password" placeholder="Contraseña" class="entrada" style="background-image: url(../../assets/6.png); background-position: 0px 0px;background-repeat: no-repeat;
				    		 padding-left: 40px ;
				    		">
                            </div>
                        </div>
                        <div class="imgRegistroDer2">
                            <img src="../../assets/11.png" alt="" width="100" height="300">
                        </div>
                    </div>
                    <div class="wRegistro">
                        <div class="bt_regis">
                            <button @click.prevent="registrarse" class="btn btn-primary" type="submit">Registrarse</button>
                        </div>
                        <p class="ttNoCuenta">¿Ya tiene una cuenta?<a href="/login" @click.prevent="login" class="linkRegistro2">Iniciar Sesión</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>

import swal from 'sweetalert';
export default {
    name: "TheRegister",
    data(){
        return{
            register:{
                name: "",
                password: "",
                email: "",
                rol: ""
            }
        }
    },
    methods: {
        async registrarse(){
            try {
                // if (register.username != "" ){
                    let response = await this.$http.post('/api/auth/register', this.register)
                    console.log(response.data)
                    swal("Éxito","Registro Correcto", "success");
                    this.$router.push('/login');
                // }
                // else{
                    // swal("Fail","Registro Mal", "error")
                // }

            } catch (error) {
                swal("Fail","Registro Incorrecto", "error")
            }
        },
        async login(){
            this.$router.push('/login');
        },
        async inicio(){
            this.$router.push('/');
        }
    }
    
}
</script>

<style scoped>

.container{
    width: 65%;
    height: 550px;
    align-items: center;
    text-align: center;
    /* margin-left: 25%; */
    color: black;
    background-color: rgb(245, 239, 239);
    border-radius: 0.5cm;
}

.divImagen{
	display:flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 10px;
	z-index: 9;
    align-items: center;
}

.logoRegistros{
	width: 200px;
    height: 80px;
    margin-bottom: 30px;
	
}
.imgRegistroIzq{
	width: 135px;
	height: 135px;
	margin-top: 5px;
    margin-left: 50px;
	
}
.imgRegistroDer{
	width: 135px;
	height: 135px;
	margin-top: 40px;
}

/**Contenedor principal**/
.contenedor_prinRegistro{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 636px;
	height: 74%;
	margin-top: -50px;
    margin-left: 130px;
}
/**Formulario**/
.formularioRegistro {

    background-color: #F5F5F5;
    width: 95%;
    height: 95%;
    padding: 15px;
    box-shadow: 10px 10px #E5E4E4;
    margin-top: -30px;
    border-radius: 0.7cm;
}

.tituloRegistrar {
	padding: 3px;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #0499D8;
}
/**Titulo del formulario**/
.titulo1Registro {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 0px;
   	margin-right: 3px;
    padding: 3px;
}
.tituloRegistro1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 15px;
    padding: 3px;
}
.txt_regis{
	margin-bottom: 25px;
}



/******** datos *******/
.datos{
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	
	height: 150px;
	

}
.div_datos{
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.datos input[type=text], input[type=password] {
	font-family: 'Open Sans', sans-serif; 
	font-size: 15px;
	padding: 5px 5px;
	height: 40px;
    border-left: none;
    border-top: 0px solid 	#FF0000;
    border-right: none;
    border-bottom: 4px solid 	#007bff;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-top: 10px;
    width: 250px;
    outline: none;
    background: #F5F5F5;
}
.bt_regis{
	margin-top: 20px;
	 margin-bottom: 5px;
}
.boton_registro{
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    background-color: #0499D8;
    border: none;
    color: white;
    padding: 10px 32px;
    text-decoration: none;
   margin-bottom: 5px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
}
.wRegistroo {
    display: center;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
 	
}

.ttNoCuenta {
    font-family: 'Open Sans', sans-serif;
    font-size:15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 0px;
    padding: 3px;
}

.linkRegistro2{
	color: #0499D8;
	margin-left: 2px;
	font-size:15px;
}
::placeholder {

     font-family: 'Open Sans' sans-serif;
     font-size: 18px;
     font-weight: 300;
     color: #9B9A9A;


    }


</style>