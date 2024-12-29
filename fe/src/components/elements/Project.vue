<template>
     <section id="projects">
        <div class="title">
                <Title title="My Projects"/>
         </div>
        <div 
            class="main main-projects" 
            v-for="(project, i) in projects" 
            :key="project.id"
            :style="{top: fixedTop[i] + '%'}" 
            >
            <div class="description">
                <div class="title-description">
                    <h3>{{project.title}}</h3>
                    <p>{{project.description}}</p>
                </div>
                <div class="btn-visit">
                    <ButtonVisit text="Visit" :link="project.link"></ButtonVisit>
                </div>
               
            </div>
            <div class="detail">
                <div 
                    class="image-for-project"
                    :style="{'background-image': `url(@/assets/projects/${project.id}.png)`}"
                >
                </div>
                <div class="situation">
                    <div class="status">
                        <p>Status</p>
                        <h4 class="bold">{{project.status}}</h4>
                    </div>
                    <div class="progress">
                        <p>Progress</p>
                        <h4 class="bold">{{project.progress}}%</h4>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Varela+Round&display=swap');  

    *{
        font-family: "Varela Round", sans-serif, "Pacifico", cursive;
    }


    .main-projects{
        width: 85%;
        height: 80vh;
        border-radius: 16px;
        position: sticky;
        background-color: rgb(51, 51, 51);
        border: 1px solid white;
    }

    .main-projects .description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        gap: 20px;
    }

    .main-projects .description p{
        overflow: scroll;
        height: 34vh;
    }

    .main-projects .description p::-webkit-scrollbar{
        display: none;
    }

    .main-projects .description .title-description h3{
        font-size: 4vw;
        margin-bottom: 12px;
    }

    .main-projects .description,
    .main-projects .detail{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 2rem 2rem 2rem 2rem;
        
    }
    
    

    .main-projects .situation{
        display: flex;
    }


    .image-for-project {
        flex: 3;
        background-size: cover;
        background-position: center;
        border-radius: 14px;
    }

    .situation {
        flex: 1;
    }


    .main-projects .detail .status,
    .main-projects .detail .progress{
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin: 10px;
        gap: 10px;
        flex: 50%;
        
    } 
       
    .main-projects .detail img{
        width: 100%;
    }

    .bold {
        font-size: 1.5rem;
        font-weight: bold;
    }
   
    .btn-visit{
        display: flex;
        margin-bottom: 20px;
    }


    @media only screen and (max-width: 950px) {
        .main-projects{
            flex-direction: column;
        }

        .main-projects .description {
            flex: 1;
            padding-bottom: 0;
        }

        .main-projects .detail {
            flex: 2;
        }

        .main-projects .description p{
            overflow: scroll;
            height: 15vh;
        }
        .main-projects .detail {
            padding-top: 0;
        }
        .btn-visit{
            margin-bottom: 40px;
         }

        .main-projects .description .title-description h3{
            font-size: 1.5rem;
        }

    }

</style>

<script>
    import Title from './Title.vue';
    import ButtonVisit from './buttons/ButtonVisit.vue';
    import { useProjectsStore } from '../../stores/projects';

    export default {
        data(){
            return{
                styleTopProject: [],
                fixedTop: this.projects.map((acc, i) => (12 + (i *2)))
            }
        },
        setup() {
            const projectsStore = useProjectsStore();
            return {
                projects: projectsStore.projects
            }
        },
        components: {
            ButtonVisit,
            Title
        }
    }
</script>