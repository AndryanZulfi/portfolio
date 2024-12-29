<template>
    <section id="skills">
        <div class="title">
                <Title title="My Skills"/>
        </div>
        <div class="main main-skills">
            <div class="content">
                <div class="list-skills">
                    <ul>
                        <li 
                            v-for="(skill, i) in skills" 
                            :key="i" 
                            @mouseover="showSpan(i)" 
                            @mouseleave="hideSpan(i)"
                            class="skill-item"
                        >
                            <img :src="'@/assets/skills/'+skill.type+'.png'" :alt="skill.type">
                            <transition name="fade">
                                <span v-if="skill.condition" class="skill-name">
                                    {{ skill.name }}
                                </span>
                            </transition>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>

    
    .main-skills{
        flex-direction: column;
        gap: 20px;
        width: 85%;
    }

    .main-skills .content .list-skills ul{
        display: flex;
        flex-wrap: wrap;
    }
   
    .main-skills .content .list-skills ul li {
        border: 2px solid white;
        padding: 1rem;
        margin: 1rem;
        border-radius: 10px;
        list-style: none;
        text-align: center;
        flex: 25%;
        display: flex;
        align-items: center;
        gap: 30px;
        font-size: 1.3rem;
        font-weight: bold;
        transition: padding 0.3s ease, transform 0.3s ease; 
        position: relative; 
    }

.main-skills .content .list-skills ul li:hover {
    padding-right: 1.5rem; 
    transform: translateX(10px); 
}

.main-skills .content .list-skills ul li img {
    width: 2rem;
    filter: drop-shadow(0 0 0.2rem white);
    transition: transform 0.3s ease; 
}

.main-skills .content .list-skills ul li:hover img {
    transform: translateX(10px); 
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: translateX(0);
}


   @media(max-width: 850px){
    .main-skills .content .list-skills ul li{
        flex: 45%;
        
    }
    }

   @media (max-width: 600px){
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
                    {type: 'html', name: 'HTML', condition: false},
                    {type: 'css', name: 'CSS', condition: false},
                    {type: 'js', name: 'JavaScript', condition: false},
                    {type: 'vue', name: 'Vue Js', condition: false},
                    {type: 'react', name: 'React Js', condition: false},
                    {type: 'nodejs', name: 'Node Js', condition: false},
                    {type: 'python', name: 'Python', condition: false},
                    {type: 'git', name: 'Git', condition: false},
                    {type: 'github', name: 'Git Hub', condition: false}
                ],
                isShowName: false,
            }
        },

        methods: {
            showSpan(i){
                this.skills[i].condition = true
            },
            hideSpan(i){
                this.skills[i].condition = false
            }
        },
        
        components: {
            Title
        }
    }

</script>