import { createApp } from 'vue'; // Importa createApp
import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter y createWebHistory

import Vuetify from 'vuetify';
import 'vuetify/styles'; // Estilos de Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Iconos de Material Design
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify'; // Importar createVuetify
import { VBtn } from 'vuetify/components';
import {
    VCard,
    VCardTitle,
    VCardText,
    VCol,
    VRow,
    VContainer,
    VTable,
    VIcon,
    VDialog,
    VDivider,
    VFadeTransition,
    VTextField,
    VForm,
    VCheckbox,
    VSelect,
    VDataTable
} from 'vuetify/components';
import  * as components  from 'vuetify/components'

import Tasks from './components/TaskMain.vue';

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
const vuetify = createVuetify({
    components: {
        VBtn,
        components,
        VCard,
        VCardTitle,
        VCardText,
        VCol,
        VRow,
        VContainer,
        VTable,
        VIcon,
        VDialog,
        VDivider,
        VFadeTransition,
        VTextField,
        VForm,
        VCheckbox,
        VSelect,
        VDataTable
      },
});

app.use(vuetify);
app.use(router);

app.mount('#app'); // Monta la app en el elemento con el ID 'app'