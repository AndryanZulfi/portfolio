<template>

  <!-- <LoadingLoad :isLoading="isLoading"/> -->
  <Main />

</template>


<script>
  import Main from './components/Main.vue'
  import LoadingLoad from './components/elements/loaders/LoadingLoad.vue'

  export default{
    data(){
      return {
        isLoading: true
      }
    },
    components: {
      Main,
      LoadingLoad
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