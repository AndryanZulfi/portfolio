<template>
    <section>
        <div class="main home-main">
        <div class="content">
            <p>Hello World, i'm</p>
            <h1>{{displayName}} <div class="cursor"></div></h1>
            <h2>Student from Gantiwarno</h2>
            <p>Welcome to my personal website</p>
            <ul class="sosmeds">
                <li v-for="sosmed in sosmeds"><a :href="sosmed.link" target="_blank"><img :src="'/src/assets/sosmeds/'+sosmed.id+'.png'" :alt="sosmed"></a></li>
            </ul>
        </div>

        <div class="img-me">
           <ImageMe src="/src/assets/me/img-me.JPG" alt="My Profile Picture"/>
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
        width: 60%;
    }
    .home-main .content{
        display: flex;              
        flex-direction: column;     
        text-align: left; 
        flex: 50%;
        gap: 2px;
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
        width: 35px;
    }
    @media only screen and (max-width: 600px) {
    .home-main {
        flex-direction: row;
        width: 80%;
    }
    .img-me{
        display: none;
    }

   

}



</style>



<script>
import ImageMe from './elements/ImageMe.vue';
    export default{
        data(){
            return{
                myName: 'Andryan Zulfi',
                index: 0,
                displayName: '',
                isDeleting: false,
                sosmeds: [
                    {id: 'linkedin', link: 'https://www.linkedin.com/in/andryan-zulfi-933401263/'},
                    {id: 'instagram', link: 'https://www.instagram.com/zlfrts_/profilecard/?igsh=MWpnd2w4amp3b3NjMw=='},
                    {id: 'tiktok', link: 'https://www.tiktok.com/@xyanzlfrts_'}
                ]
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
                        setTimeout(this.showName, 1000)
                    }
                }else{
                    if(this.index > 0){
                        this.index--
                        this.displayName = this.myName.slice(0, this.index)
                        setTimeout(this.showName, 100)
                        
                    }else{
                        this.isDeleting = false
                        setTimeout(this.showName, 1000)
                    }

                }
            }
        },
        mounted(){
            this.showName()
        },
        components: {
            ImageMe
        }
        
    }

</script>