<template>
    <main>
		<section >
			<div >
				<div class="linea1">
                    <div class="titulos">
                        <img class="logo" src="../../assets/presto.png">
                    </div>
				</div>
				<div class="linea2">
					<div class="boton">
						<button class="i" @click="Login">Iniciar Sesión </button>
					</div>
					<div class="boton">
						<button class="r" @click="Register">Registrarse</button>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	name: 'TheInicio',
    methods: {
		async Login(){
			try {
				this.$router.push('/login');
			} catch (error) {
				// Mensaje de error
			}
		},
		async Register(){
			try {
				this.$router.push('/register')
			} catch (error) {
				
			}
		}
	}
}
</script>

<style scoped>

*{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	
}
/*encabezzado*/

body{
	background: rgb(255, 255, 255);
	display: flex;
	align-items: center;
	justify-content: center;

}
.linea1{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	height:400px;
}
.linea2{
	display: flex;
	justify-content: center;
	align-items:  center;


}
button{
	width: 150px;
	height: 60px;
	font-family: 'Open Sans', sans-serif;
	font-size: 20px;
	outline: none;
	border: none;
	margin-left: -5px;
	margin-top: -5px;
	cursor: pointer;
	  box-shadow: 0 0 6px 0 rgba(0,0,0,.5);
}
.boton{
	width: 150px;
	height: 60px;
	margin-left: 10px;
	background: #000;
}

.r{
	background: 	#FF0000;


}
.i{
	background: #069CCC ;
}
.logo{
	margin-top: 80px;
	width: 400px;
	height:200px;
}


</style>