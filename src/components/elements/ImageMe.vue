<template>
    <div class="img"><img :src="src" :alt="alt" :style="customStyle"></div>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                default: "Image"
            },
            customStyle: {
                type: Object,
                default: () => ({})
            }
        }
    }
</script>


<style scoped>

    .img{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        margin: auto;
    }

   

    .img img{
        width: 500px;
        top: -60%;
        left: -50%;
        position: absolute;
    }
</style>

