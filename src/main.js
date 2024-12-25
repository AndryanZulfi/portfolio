import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import { createPinia } from 'pinia'
import 'ionicons/dist/ionicons/ionicons.esm.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTiktok, faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons'; // Impor ikon Instagram
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faInstagram, faTiktok, faLinkedin, faGithub);



const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);

const pinia = createPinia()

app.use(pinia).mount('#app')
