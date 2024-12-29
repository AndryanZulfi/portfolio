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
        background: var(--gradient-title);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    hr {
        width: 40%;
    }
</style>