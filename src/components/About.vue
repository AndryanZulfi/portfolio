<template>
    <section>
        <div class="main main-about main-content">
            <div class="title">
                <h2>About Me</h2><hr>
            </div>
            <div class="content">
                <div class="img-">
                    <ImageMe src="/src/assets/img-me-2.jpeg" alt="My About Picture" :customStyle="{top: '-50%', left: '-38%'}"/>
                </div>
                <div class="description">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis alias, sint soluta similique vitae eaque id? Excepturi eligendi, nemo optio molestias consequatur dignissimos asperiores. Tenetur voluptatibus maiores voluptatum magni natus, a nostrum ratione excepturi at illo? Officiis excepturi expedita assumenda aperiam blanditiis quaerat, tenetur rem nemo quisquam, eveniet nisi.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur corrupti officia qui ipsa, voluptas veritatis voluptatum nam reprehenderit molestiae velit assumenda id omnis cupiditate sunt magni. Debitis provident quia odio!
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .main-about{
        flex-direction: column;
        gap: 2.5rem;
    }
    .main-about .title h2{
        font-size: 3rem;
    }
    .main-about .title hr {
        width: 40%;
    }
    .main-about .content{
        display: flex;
        gap: 5rem;
        flex-wrap: wrap;
        justify-content: center;
    }
    .main-about .description{
        display: flex;
        align-items: center; 
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }
</style>


<script>
import ImageMe from './ImageMe.vue';

export default{
    components: {
        ImageMe
    }
}
</script>