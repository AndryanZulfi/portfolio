<template>
    <main>
    <Nav />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    <Toggle />
  </main>
  </template>
  
  
  <script>
    import Nav from './elements/Navigation.vue'
    import Home from './Home.vue'
    import About from './About.vue'
    import Skills from './Skills.vue';
    import Projects from './Projects.vue';
    import Contact from './Contact.vue';
    import Footer from './Footer.vue';
    import Toggle from './elements/Toggle.vue';

    export default{
      components: {
        Nav,
        Home,
        About,
        Skills,
        Projects,
        Contact,
        Footer,
        Toggle
      },
    }
  </script>
  
  <style scoped>
    main{
    display: flex;
    flex-direction: column;
  }
  
  </style>