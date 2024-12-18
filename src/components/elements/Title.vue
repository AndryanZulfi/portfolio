<template>
    <h2>{{ title }}</h2><hr>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "Title"
            }
        }
    }
</script>

<style scoped>
    h2{
        font-size: 3rem;
    }
    hr {
        width: 40%;
    }
</style>