import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa tu archivo de configuración del enrutador
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap

const app = createApp(App);
app.use(router);
app.mount('#app');
