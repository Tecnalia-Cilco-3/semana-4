<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TheHome></TheHome>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHome from '@/components/TheHome.vue'

export default {
  name: 'Home',
  components: {
    TheHome
  }
}
</script>
