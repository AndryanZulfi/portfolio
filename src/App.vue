<template>
  <Nav />
  <Home />
  <About />
  <Skills />
  <Projects />
</template>


<script>
  import Nav from './components/elements/Navigation.vue'
  import Home from './components/Home.vue'
  import About from './components/About.vue'
  import Skills from './components/Skills.vue';
  import Projects from './components/Projects.vue';
  export default{
    components: {
      Nav,
      Home,
      About,
      Skills,
      Projects
    }
  }
</script>

<style scoped>

</style>