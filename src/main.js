import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import BaseCard from './layout/BaseCard';
import BaseHeader from './layout/BaseHeader';


const app = createApp(App);

app.use(router);

app.component('base-card', BaseCard);
app.component('base-header', BaseHeader);

app.mount('#app')

