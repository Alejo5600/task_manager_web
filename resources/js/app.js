import { createApp } from 'vue'; // Importa createApp
import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter y createWebHistory

import Vuetify from 'vuetify';
import 'vuetify/styles'; // Estilos de Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Iconos de Material Design
import { createVuetify } from 'vuetify'; // Importar createVuetify

import Tasks from './components/tasks.vue';

// Define las rutas
const routes = [
    { path: '/', component: Tasks },
];

// Crea el router
const router = createRouter({
    history: createWebHistory(), // Usar el historial web
    routes, // Añadir las rutas
});

// Crea la app de Vue
const app = createApp({});
const vuetify = createVuetify();

app.use(vuetify); 
app.use(router);

app.mount('#app'); // Monta la app en el elemento con el ID 'app'
