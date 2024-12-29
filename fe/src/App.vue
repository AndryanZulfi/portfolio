<template>

  <Main />

</template>


<script>
  import Main from './components/Main.vue'

  export default{
    data(){
      return {
        isLoading: true
      }
    },
    components: {
      Main,
    },

    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 3000); 
    },
  }
</script>

<style scoped>


</style>