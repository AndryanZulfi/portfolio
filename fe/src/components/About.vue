<template>
    <section id="about">
        <div class="title">
                <Title title="About Me"/>
        </div>
        <div class="main main-about main-content">
            <div class="content">
                <div class="img">
                    <ImageMe 
                        imageUrl="/me/img-me-3.jpeg"
                        customPosition="0rem -4rem"
                        borderColor="var(--border)"
                        customSize="100%"
                    />
                </div>
                <div class="description">
                    <p>
                        Hi, I'm Andryan Zulfi Rahmat Tri Saputra, you can call me Andryan. I am a student of SMKN 1 Gantiwarno majoring in Computer and Network Engineering (TKJ) who is passionate about learning web development, especially in the front-end field.                    </p>
                    <p>
                        With self-learning experience through free online platforms, I have developed applications using the Vue.js framework and built backends with Express and MongoDB.                    </p>
                    <p>
                        I am always open to new challenges, have good adaptability, and continue to improve my skills through projects, bootcamps, and scholarship                    </p>
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
        text-indent: 2rem;
        text-align: justify;
        align-items: center; 
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        min-width: 30%;
    }
    .main-about .content .img{
        margin: auto;
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
import ButtonDownload from './elements/buttons/ButtonDownload.vue';
import ImageMe from './elements/ImageMe.vue';
import Title from './elements/Title.vue';
export default{
    components: {
        ImageMe,
        Title,
        ButtonDownload
    }
}
</script>