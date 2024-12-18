<template>
     <section>
        <div class="main main-projects" style="top: 15%;">
            <div class="description">
                <div class="title-description">
                    <h3>Project Title 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorum? Obcaecati aut officia possimus similique accusamus impedit tempora iusto eius iste pariatur vitae voluptates esse ad maxime, sequi, neque fuga?</p>
                </div>
                <div class="btn-visit">
                    <button>Visit Site</button>
                </div>
               
            </div>
            <div class="detail">
                <div class="image-for-project">
                    <img src="../../assets/projects/project1.png" alt="">
                </div>
                <div class="situation">
                    <div class="status">
                        <p>Project Status</p>
                        <h4 class="bold">Completed</h4>
                    </div>
                    <div class="progress">
                        <p>Progress Project</p>
                        <h4 class="bold">100%</h4>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="main main-projects" style="top: 18%;">
            <div class="description">
                <div class="title-description">
                    <h3>Project Title 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorum? Obcaecati aut officia possimus similique accusamus impedit tempora iusto eius iste pariatur vitae voluptates esse ad maxime, sequi, neque fuga?</p>
                </div>
                <div class="btn-visit">
                    <button>Visit Site</button>
                </div>
               
            </div>
            <div class="detail">
                <div class="image-for-project">
                    <img src="../../assets/projects/project1.png" alt="">
                </div>
                <div class="situation">
                    <div class="status">
                        <p>Project Status</p>
                        <h4 class="bold">Completed</h4>
                    </div>
                    <div class="progress">
                        <p>Progress Project</p>
                        <h4 class="bold">100%</h4>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="main main-projects" style="top: 21%;">
            <div class="description">
                <div class="title-description">
                    <h3>Project Title 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorum? Obcaecati aut officia possimus similique accusamus impedit tempora iusto eius iste pariatur vitae voluptates esse ad maxime, sequi, neque fuga?</p>
                </div>
                <div class="btn-visit">
                    <button>Visit Site</button>
                </div>
               
            </div>
            <div class="detail">
                <div class="image-for-project">
                    <img src="../../assets/projects/project1.png" alt="">
                </div>
                <div class="situation">
                    <div class="status">
                        <p>Project Status</p>
                        <h4 class="bold">Completed</h4>
                    </div>
                    <div class="progress">
                        <p>Progress Project</p>
                        <h4 class="bold">100%</h4>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="main main-projects" style="top: 24%;">
            <div class="description">
                <div class="title-description">
                    <h3>Project Title 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorum? Obcaecati aut officia possimus similique accusamus impedit tempora iusto eius iste pariatur vitae voluptates esse ad maxime, sequi, neque fuga?</p>
                </div>
                <div class="btn-visit">
                    <button>Visit Site</button>
                </div>
               
            </div>
            <div class="detail">
                <div class="image-for-project">
                    <img src="../../assets/projects/project1.png" alt="">
                </div>
                <div class="situation">
                    <div class="status">
                        <p>Project Status</p>
                        <h4 class="bold">Completed</h4>
                    </div>
                    <div class="progress">
                        <p>Progress Project</p>
                        <h4 class="bold">100%</h4>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Varela+Round&display=swap');  
    section{
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }

    *{
        font-family: "Varela Round", sans-serif, "Pacifico", cursive;
    }
    .main-projects{
        /* gap: 3.5rem; */
        width: 85%;
        border-radius: 16px;
        position: sticky;
        top: 15%;
        background-color: rgb(51, 51, 51);
        flex-wrap: wrap;
        border: 1px solid white;
    }

    .main-projects .description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    .main-projects .description .title-description{
        margin-bottom: 20px;
    }
    .main-projects .description .title-description h3{
        font-size: 2rem;
        margin-bottom: 12px
    }

    .main-projects .description .btn-visit button{
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
    }


    .main-projects .description,
    .main-projects .detail{
        flex: 50%;
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }

    .main-projects .situation{
        display: flex;
    }

    .main-projects .situation .status,
    .main-projects .situation .progress{
        flex: 50%;
        
    }


    .main-projects .detail .status,
    .main-projects .detail .progress{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10px;
        gap: 10px;
    } 
       
    .main-projects .detail img{
        width: 100%;
    }

    .bold {
        font-size: 1.5rem;
        font-weight: bold;
    }
   

</style>