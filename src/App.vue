<template>
  <Nav />
  <Home />
  <About />
</template>


<script>
  import Nav from './components/Navigation.vue'
  import Home from './components/Home.vue'
  import About from './components/About.vue'
  export default{
    components: {
      Nav,
      Home,
      About
    }
  }
</script>

<style scoped>

</style>