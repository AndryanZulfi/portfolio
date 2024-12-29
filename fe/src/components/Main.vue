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
    import Nav from './elements/Navigation.vue'
    import Home from './Home.vue'
    import About from './About.vue'
    import Skills from './Skills.vue';
    import Projects from './Projects.vue';
    import Contact from './Contact.vue';
    import Footer from './Footer.vue';
  
    export default{
      components: {
        Nav,
        Home,
        About,
        Skills,
        Projects,
        Contact,
        Footer,
      },
    }
  </script>
  
  <style scoped>
    main{
    display: flex;
    flex-direction: column;
    /* gap: 10rem; */
  }
  
  </style>