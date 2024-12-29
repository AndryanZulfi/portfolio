<template>  
    <nav :class="{'nav-bg': isScroll == false}" :style="{'justify-content': isScroll ? 'center' : 'space-between'}">
        <div class="wrapper">
            <h2 v-show="!isScroll">Portfolio;)</h2>
        </div>
        <div  class="menu sidebar" :class="{active: isActive, 'menu-bg': isScroll}">
            <a  v-for="menu in menus" :key="menu.id" :href="'#'+menu.id">{{menu.menu}}</a>
            <a  class="contact-nav" href="#contact">Contact</a>
        </div>
        <div class="wrapper">
            <div v-show="!isScroll" class="btn-for-contact">
                <a href="#contact"><button >Contact</button></a>
            </div>
        </div>
        <div class="btn-sidebar">
            <ButtonNav @click="sidebar" :isActive="isActive"></ButtonNav>
        </div>
       
</nav>
</template>


<style scoped>



    nav{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2.5rem;
        position: fixed;
        z-index: 9999;
    }

    nav .wrapper {
        flex: 1;
    }

    nav .wrapper:nth-child(3) {
        text-align: end;
    }
    h2 {
        background: var(--gradient);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300%;
        animation: moving-color 3s infinite alternate ease-in-out;
    }

    @keyframes moving-color {
        0% {
            background-position: right;
        }
        100% {
            background-position: left;
        }
    }
    .nav-bg{
        border-bottom: 1px solid white;
        background-color: hsla(0, 0%, 18%, 0.9);
    }

    .menu{
        display: flex;
        gap: 1.3rem;
        transition: .1s ease-in-out;
        overflow: hidden;
    }

    .menu-bg{
        border: 2px solid white;
        padding: .6rem 1rem;
        border-radius: 18px;
        backdrop-filter: blur(20px);
    }
    
    .menu a{
        text-decoration: none;
        color: white;
    }
    .menu a:hover{
        color: #fff022;
    }

    .menu a::after{
        content: '';
        display: block;
        margin-top: 0.1rem;
        border-bottom: 0.1rem solid  #ffffff;
        transform: scaleX(0);
        left: 0;
    }
    .menu a:hover::after{
        transform: scaleX(0.7);
        transition: 0.2s linear;
    }
    .contact-nav{
        display: none;
    }
    .btn-for-contact button{
        padding: 8px 14px;
        border-radius: 12px;
        background-color: transparent;
        border-style: groove;
        position: relative;
        overflow: hidden;
        transition: 0.5s;
    }
    .btn-for-contact button:hover{
        color: black;
        cursor: pointer;
        border-style: dashed;
    }


    .btn-for-contact button::before,
    .btn-for-contact button::after{
        content: '';
        width: 100%;
        height: 50%;
        background-color: white;
        position: absolute;
        z-index: -1;
        overflow: hidden;
        transition: transform 0.5s;
    }

    .btn-for-contact button::before{
        top: 0;
        left: 0;
        transform-origin: left;
        transform: scaleX(0);
    }

    .btn-for-contact button::after{
        bottom: 0;
        right: 0;
        transform-origin: right;
        transform: scaleX(0);
    }

    .btn-for-contact button:hover::after{
        transform: scaleX(1);
        transform-origin: left;
    }

    .btn-for-contact button:hover::before{
        transform: scaleX(1);
        transform-origin: right;
    }
    .btn-sidebar {
        display: none;
    }


    @media only screen and (max-width: 600px){
        .menu{
            position: absolute;
            top: 100%;
            left: 15%;
            right: 15%;
            margin: auto;
            transition: .1s ease-in-out;
            backdrop-filter: blur(10px);
            transform: translateY(0) scale(0) ;
            overflow: scroll;
            
        }
        .menu::-webkit-scrollbar {
            display: none;
        }
        .menu a{
            margin: auto;
        }

        .sidebar.active{
            transform: translateY(20px) scale(1) ;
            
        }

        .sidebar{
            border: 2px solid white;
            padding: .6rem 1.5rem;
            border-radius: 22px;
            gap: 2rem;
            backdrop-filter: blur(10px);
        }
        .btn-sidebar {
            display: block;
            cursor:pointer;
        } 
        .btn-for-contact{
            display: none;
        }

        .contact-nav{
            display: block;
        }
        
    }
</style>




<script>
import ButtonNav from './buttons/ButtonNav.vue';
    export default {
        data(){
            return {
                isActive: false,
                isScroll: null,
                menus: [
                    {id: 'home', menu:'Home' },
                    {id: 'about', menu:'About'},
                    {id: 'skills', menu:'Skills'},
                    {id: 'projects', menu:'Projects'}
                ]
            }
        },
        components: {
            ButtonNav
        },
        methods: {
            sidebar(){
                this.isActive = !this.isActive
            },

            handleScrolled(){
               if(window.scrollY > 50 && window.innerWidth > 600){
                this.isScroll =  true
               }else if(window.scrollY > 50 && window.innerWidth < 600){
                this.isScroll =  false
               }else{
                this.isScroll = null
               }
            },

            
        },
        mounted() {
            window.addEventListener('scroll', this.handleScrolled)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScrolled)
        }
    }

</script>