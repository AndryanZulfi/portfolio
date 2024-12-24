<template>
  <main>
  <Nav />
  <Home />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</main>
</template>


<script>
  import 'ionicons/dist/ionicons/ionicons.esm.js';
  import Nav from './components/elements/Navigation.vue'
  import Home from './components/Home.vue'
  import About from './components/About.vue'
  import Skills from './components/Skills.vue';
  import Projects from './components/Projects.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue';
  export default{
    components: {
      Nav,
      Home,
      About,
      Skills,
      Projects,
      Contact,
      Footer
    }
  }
</script>

<style scoped>
  main{
  display: flex;
  flex-direction: column;
  gap: 10rem;
}

</style>