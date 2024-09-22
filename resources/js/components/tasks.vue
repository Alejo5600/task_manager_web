<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Tareas</v-card-title>
          <v-card-text>
            <ul>
              <li v-for="tarea in tareas" :key="tarea.id">
                {{ tarea.usuario }}: {{ tarea.tarea }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      tareas: [],
      columns: [
        { name: 'usuario', label: 'Usuario', align: 'left', field: 'usuario' },
        { name: 'tarea', label: 'Tarea', align: 'left', field: 'tarea' }
      ]
    };
  },
  created() {
    this.obtenerTareas();
  },
  methods: {
    async obtenerTareas() {
      alert("Obteniendo tareas");
      try {
        const response = await axios.get('http://localhost:8000/api/tareas');
        this.tareas = response.data;
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
      }
    }
  }
};
</script>
