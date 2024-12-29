<template>
     <section id="contact">
        <div class="main main-contact">
            <div class="description">
                <h2><span>Contact</span> Me</h2>
            <p>
              Feel free to contact me! I am ready to help and answer your questions. Please contact me through the contact form on this website. I am very open to your criticism and opinions. Thank you for your support!
            </p>
            </div>
            
            <div class="row">
            <iframe  text-align: center
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.387041281727!2d110.62400931098796!3d-7.779564615543797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a461c2ec1eeb3%3A0xc4b0b4332ba38311!2sPaseban%2C%20Kec.%20Bayat%2C%20Kabupaten%20Klaten%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1705750709541!5m2!1sid!2sid"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"></iframe>
            <form action="/send-email" method="POST" @submit.prevent="sendMessage">
              <div class="input-group">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Nama" name="nama" v-model="formData.nama" required>
              </div>
              <div class="input-group">
              <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email" name="email" v-model="formData.email"  required>
        </div>

        <div class="input-textarea">
          <textarea name="message" id="messages" placeholder="Message..." v-model="formData.message" cols="30" rows="10" type="text"  required></textarea>
        </div>
        <ButtonSubmit :customStyle="{margin: '2rem auto'}"/>
      </form>
         </div>
        </div>
      <div v-if="isLoading" class="loading-indicator">
        <Loader></Loader>
      </div>
  </section>

</template>


<script>
const API_URL = import.meta.env.VITE_API_URL
import ButtonSubmit from './elements/buttons/ButtonSubmit.vue';
import axios from 'axios'
import Loader from './elements/loaders/Loader.vue';
import { useToast } from 'vue-toastification';


  export default {
      data(){
        return{
          formData: {
            nama: '',
            email: '',
            message: '',
          },
          isLoading: false
        }
        
      },
      components: {
        ButtonSubmit,
        Loader,
      },
      methods: {
        toastSuccess(message){
          const toast = useToast()
          toast.success(message)
        },

        toastError(message){
          const toast = useToast()
          toast.error(message)
        },
        async sendMessage(event){
          this.isLoading = true
          try {
            event.preventDefault();
            const data = Object.fromEntries(Object.entries(this.formData));

            const response = await axios.post(`/send-email`, data, {
              headers: {
              'Content-Type': 'application/json'
              }
            })

            if (response.status === 200) {
              this.toastSuccess(response.data)
              this.formData = { nama: '', email: '', message: '' };
            }else if(response.status === 500){
              this.toastError(response.data)
            }else if(response.status === 400){
              this.toastError(response.data)            
            }
          }catch(e){
            console.error(e)
            this.toastError('Gagal mengirim pesan. Periksa koneksi Anda.')  
          }finally{
            this.isLoading = false
          }
         
        }
      },

      
  }
</script>

<style scoped>



section {
  position: relative;
}
.main{
  flex-direction: column;
}

.main-contact span {
  background: var(--gradient);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.main-contact p{
  max-width: 50rem;
  text-align: center;
  margin: auto;
  margin-bottom: 1.3rem;
  font-size: 1.2rem;
  font-weight: 100;
  line-height: 1.6rem;
}
.main-contact h2{
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
}

.main-contact .row{
  display: flex;
  margin-top: 2rem;
  background-color: var(--black);
  box-shadow: 0 0 2rem var(--gray);
  border-radius: 20px;
  overflow: hidden;
}
.main-contact .row .map {
  flex: 1 1 45rem;
  width: 100%;
  object-fit: cover;
}

.main-contact .row form {
  flex: 11 45rem;
  padding: 5rem 2rem;
  text-align: center;
}

.main-contact .row form .input-group, 
.input-textarea {
  display: flex;
  background-color: var(--black);
  border: 2px solid var(--gray);
  padding-left: 1.4rem;
  margin-top: 1.5rem;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
}

.main-contact .row form .input-textarea {
  padding-left: 0;
}

.main-contact .row .input-group input, 
textarea{
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background: none;
  color: #fff;
  outline: 0;
  border: none;
}

.main-contact .row .input-textarea textarea { 
  height: 5rem;
}

.main-contact .row .input-group i{
  font-size: 1.4rem;
  color: #fff;
}

.loading-indicator{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  z-index: 9999;
}

@media only screen and (max-width: 772px){
  .main-contact .row {
    flex-wrap: wrap;
  }
  .main-contact .row .map {
    height: 20rem;
  }
  .main-contact .row form {
    padding-top: 0;
  }
}
</style>

