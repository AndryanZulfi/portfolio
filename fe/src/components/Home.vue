<template>
    <section id="home">
        <div class="main home-main">
        <div class="content">
            <p>Hello World, i'm</p>
            <h1>{{displayName}} <div class="cursor"></div></h1>
            <h2>Studying Web Developper</h2>
            <p>Welcome to my personal website</p>
            <ul class="sosmeds">
                <li v-for="sosmed in sosmeds"><a :href="sosmed.link" target="_blank"><img :src="'@/assets/sosmeds/'+sosmed.id+'.png'" :alt="sosmed"></a></li>
            </ul>
        </div>

        <div class="img-me">
           <ImageMe 
                imageUrl="@/assets/me/img-me.JPG"
                customPosition="-7rem -10rem"
            />
        </div>
        </div>
    </section>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Varela+Round&display=swap');  
 

    section{
        height: 100vh;
    }
    .home-main{
        flex-wrap: wrap;
        margin: auto;
        width: 65%;
    }
    .home-main .content{
        display: flex;              
        flex-direction: column;     
        text-align: left; 
        flex: 50%;
        gap: 2px;
        justify-content: center;
        
    }
    .img-me{
        display: flex;
        justify-content: center;
    }
    .home-main .content .cursor{
        width: 3px;
        height: 60px;
        background-color: white;
    }
    .home-main .content h1{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 2.5rem;
        font-family: Pacifico;
      
    }

    .home-main .content h2 {
        background: var(--gradient);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .home-main .content ul {
        display: inline-block;
    }

    .home-main .content ul li{
        list-style: none;
        display: inline-block;
    }

    .home-main .img-me{
        align-items: center;
        margin: auto;
        flex: 50%;
    }
   

    .sosmeds img{
        width: 28px;
        margin: 4px;
    }

@media only screen and (max-width: 600px) {
    .home-main {
        flex-direction: row;
        width: 80%;
        gap: 2rem;
    }



   

}



</style>



<script>
import ImageMe from './elements/ImageMe.vue';
import { useSosmedStore } from '../stores/sosmeds';
    export default{
        data(){
            return{
                myName: 'Andryan Zulfi',
                index: 0,
                displayName: '',
                isDeleting: false,
            }
        },
        methods: {
            showName(){
                if(!this.isDeleting){
                    if(this.index < this.myName.length){
                        this.displayName += this.myName[this.index]
                        this.index++
                        setTimeout(this.showName, 200)
                    }else{
                        this.isDeleting = true
                        setTimeout(this.showName, 1600)
                    }
                }else{
                    if(this.index > 0){
                        this.index--
                        this.displayName = this.myName.slice(0, this.index)
                        setTimeout(this.showName, 100)
                        
                    }else{
                        this.isDeleting = false
                        setTimeout(this.showName,600)
                    }

                }
            }
        },
        mounted(){
            this.showName()
        },
        components: {
            ImageMe
        },
        setup() {
            const sosmedStore = useSosmedStore();
            return {
                sosmeds: sosmedStore.sosmeds,
            };
        },
        
    }

</script>