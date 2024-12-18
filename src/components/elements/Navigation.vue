<template>  
    <nav>
        <h2>Portfolio;)</h2>
        <div ref="sidebar" class="menu sidebar" :class="{active: isActive}">
            <a v-for="menu in menus" :key="menu.id" href="">{{menu.menu}}</a>
        </div>
        <div class="btn-for-contact">
            <button>Contact Me</button>
        </div>
        <div ref="btnSidebar" class="icon-sidebar">
            <i @click="sidebar"  class="fas fa-bars fa-lg"></i>
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

    .menu{
        display: flex;
        gap: 16px;
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

    .btn-for-contact button{
        /* width: 100px;
        height: 35px; */
        padding: 8px 15px;
        border-radius: 30px;
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
    .icon-sidebar {
        display: none;
    }
    @media only screen and (max-width: 600px){
        .sidebar{
            width: 50%;
            height: 100vh;
            position: absolute;
            background-color: gray;
            right: -100%;
            top: 0;
            display: flex;
            flex-direction: column;
            padding: 40px;
            transition: .2s;
            z-index: 99;
        }
        .sidebar a{
            width:fit-content;
        }

        .sidebar.active{
            right: 0;
        }

        .icon-sidebar {
            display: block;
        }
        .btn-for-contact{
            display: none;
        }
        
    }
</style>




<script>
import '@fortawesome/fontawesome-free/css/all.css';
    export default {
        data(){
            return {
                isActive: false,
                menus: [
                    {id: 'home', menu:'Home' },
                    {id: 'about', menu:'About'},
                    {id: 'skils', menu:'Skills'},
                    {id: 'project', menu:'Project'}
                ]
            }
        },
        methods: {
            sidebar(){
                this.isActive = !this.isActive
            },
            handleClickOutside(event) {
                const sidebarElement = this.$refs.sidebar;
                const btnSidebar = this.$refs.btnSidebar
                if ((btnSidebar && !btnSidebar.contains(event.target)) && (sidebarElement && !sidebarElement.contains(event.target))) {
                    this.isActive = false
                }
            }
        },
        mounted() {
            window.addEventListener('click', this.handleClickOutside);
        },
        beforeDestroy() {
            window.removeEventListener('click', this.handleClickOutside);
        }
    }

</script>