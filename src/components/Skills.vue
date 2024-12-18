<template>
    <section>
        <div class="main main-skills">
        <div class="title">
            <Title title="My Skills"/>
        </div>
        <div class="content">
                <div class="img-">
                    <ImageMe src="/src/assets/img-me-2.jpeg" alt="My About Picture" :customStyle="{top: '-50%', left: '-38%'}"/>
                </div>
                <div class="list-skills">
                    <ul>
                        <li v-for="skill in skills"><img :src="'/src/assets/skills/'+skill.type+'.png'" :alt="skill.type"><span>{{ skill.name }}</span></li>
                    </ul>
                </div>
        </div>
        </div>
    </section>
    
</template>


<style scoped>
    * {
        /* border: 2px solid white; */
    }
    .main-skills{
        flex-direction: column;
        gap: 20px
    }

    .main-skills .content .list-skills ul{
        display: flex;
        /* border: 2px solid white; */
        flex-wrap: wrap;
    }
   .main-skills .content .list-skills ul li{
       border: 2px solid white;
       padding: 1rem;
       margin: 1rem;
       border-radius: 10px;
       list-style: none;
       text-align: center;
       flex: 30%;
       display: flex;
       justify-content: center;
       gap: 12px;
       font-size: 1.3rem;
       font-weight: bold;
   }
   .main-skills .content .list-skills ul li img{
        width: 2rem;
        filter: drop-shadow(0 0 0.2rem white);
   }


   @media(max-width: 1100px){
    .main-skills .content .list-skills ul li{
        flex: 45%;
        
    }
    }

   @media only screen and (max-width: 600px){
    .main-skills .content .list-skills ul li{
        flex: 100%;
    }
   }

 


</style>


<script>
import Title from './elements/Title.vue';
    export default {
        data(){
            return {
                skills: [
                    {type: 'html', name: 'HTML'},
                    {type: 'css', name: 'CSS'},
                    {type: 'js', name: 'JavaScript'},
                    {type: 'vue', name: 'Vue Js'},
                    {type: 'react', name: 'React Js'},
                    {type: 'nodejs', name: 'Node Js'},
                    {type: 'python', name: 'Python'},
                    {type: 'git', name: 'Git'},
                    {type: 'github', name: 'Git Hub'}
                ]
            }
        },
        components: {
            Title
        }
    }

</script>