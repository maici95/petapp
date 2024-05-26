import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetifyPlugin from './plugins/vuetify-plugin';

createApp(App)
    .use(vuetifyPlugin)
    .mount('#app');
