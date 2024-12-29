import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import { createPinia } from 'pinia'

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTiktok, faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons'; // Impor ikon Instagram
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faInstagram, faTiktok, faLinkedin, faGithub);



const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

const pinia = createPinia()

app.use(Toast,{
    timeout: 3000,
    position: 'top-right',
})

app.use(pinia).mount('#app')
