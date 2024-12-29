<template>
    <section id="about">
        <div class="title">
                <Title title="About Me"/>
        </div>
        <div class="main main-about main-content">
            <div class="content">
                <div class="img">
                    <ImageMe 
                        imageUrl="/src/assets/me/img-me-3.jpeg"
                        customPosition="0rem -4rem"
                        borderColor="#8a8a8a"
                        customSize="100%"
                    />
                </div>
                <div class="description">
                    <p>
                        Hi, I'm Andryan Zulfi Rahmat Tri Saputra, you can call me Andryan, I'm a student of State Vocational High School 1 Gantiwarno majoring in Computer Engineering and Networking. Currently, I'm studying full-stack web development with a focus on modern technology. I have experience in building applications such as To-Do List App, a web-based task-logging application that uses Express.js and MongoDB for the backend and Vue.js for the frontend.
                    </p>
                    <p>
                        In my learning journey, I mastered front-end development using Vue.js, HTML, CSS, and JavaScript, as well as back-end development with Node.js, Express.js, and MongoDB. I also understand the application deployment process using Vercel for the frontend and Railway for the backend. With a strong foundation in Computer Engineering and Networking, I have the ability to install and configure local networks.
                    </p>
                    <p>
                        I continue to learn independently through online platforms and actively participate in bootcamps to hone my skills. I believe that technology is a powerful tool to create innovative solutions and help others, and I am excited to continue working in this field.
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
import ImageMe from './elements/ImageMe.vue';
import Title from './elements/Title.vue';
export default{
    components: {
        ImageMe,
        Title
    }
}
</script>