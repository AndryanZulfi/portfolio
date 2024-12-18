<template>
    <section>
        <div class="main main-about main-content">
            <div class="title">
                <Title title="About Me"/>
            </div>
            <div class="content">
                <div class="img-">
                    <ImageMe src="/src/assets/me/img-me-2.jpeg" alt="My About Picture" :customStyle="{top: '-50%', left: '-38%'}"/>
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

    .main-about .content{
        display: flex;
        gap: 5rem;
        justify-content: center;
        flex-wrap: nowrap;
    }
    .main-about .description{
        display: flex;
        align-items: center; 
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        min-width: 30%;
    }

    @media only screen and (max-width: 600px){
        .main-about .content{
            flex-direction: column;
        }
    }

    @media (max-width: 1100px){
        .main-about .content{
            flex-direction: column
        }
    }
</style>


<script>
import ImageMe from './elements/ImageMe.vue';
import Title from './elements/Title.vue';
export default{
    components: {
        ImageMe,
        Title
    }
}
</script>