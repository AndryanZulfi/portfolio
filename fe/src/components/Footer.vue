<template>
    <footer>
        <ul class="sosmeds">
            <li v-for="(sosmed,index) in sosmeds"
                :key="index" 
                class="sosmed"
                :style="{ animationDelay: `${index * 2}s` }">
                <a :href="sosmed.link" target="_blank">
                    <font-awesome-icon :icon="['fab', sosmed.id]" size="2x" style="color:  white"/>               
                </a>
            </li>
        </ul>
        <p>&copy; 2024 Andryan | All Rights Reserved</p>
    </footer>
</template>


<style scoped>
    footer{ 
        width: 100%;
        background-color: var(--black);
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 3rem;
    }

    .sosmeds{
        display: flex;
        gap: 1.5rem;
        margin-top: 1.4rem;
    }
    .sosmeds li{
        display: inline-block;
    }
    .sosmeds .instagram{
        transform: translateY(-10px);
    }
    .sosmeds .sosmed {
        animation: wave 5s infinite ease-in-out;
    }
    p{
        font-size: 90%;
    }
    @keyframes wave {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-30px); 
    }
}


</style>


<script>
import 'ionicons/dist/ionicons/ionicons.esm.js';    
import { useSosmedStore } from '../stores/sosmeds';
    export default {

        setup(){
            const sosmedStore = useSosmedStore();
            return {
                sosmeds: sosmedStore.sosmeds
            }
        }
    }

</script>