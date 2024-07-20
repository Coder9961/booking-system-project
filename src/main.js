import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import $ from 'jquery';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faBars, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPhoneAlt, faBars, faMapMarkerAlt, faEnvelope);

const app = createApp(App)

window.$ = window.jQuery = $;
app.component('font-awesome-icon', FontAwesomeIcon);


app.use(createPinia())
app.use(router)

app.mount('#app')
