<template>
    <v-container style="display: flex; justify-content: right;">
      <v-btn
        variant="outlined"
        style="margin: 2px;"
        color="success"
        @click="showAddTask"
      >
        Agregar
      </v-btn>
      <v-btn
        variant="outlined"
        style="margin: 2px;"
        color="orange"
        @click="showEditTask"
        :disabled="isTaskSelectedDisabled"
      >
        Editar
      </v-btn>
      <v-btn
        variant="outlined"
        style="margin: 2px;"
        color="red"
        @click="deletedTask"
        :disabled="isTaskSelectedDisabled"
      >
        Eliminar
      </v-btn>
    </v-container>
  </template>
  
  <script>
  export default {
    props: {
      idTaskSelected: Number
    },
    emits: ['show-add-task', 'show-edit-task', 'delete-task'],
    computed: {
      isTaskSelectedDisabled() {
        return this.idTaskSelected === 0 || isNaN(this.idTaskSelected);
      },
    },
    methods: {
      showAddTask() {
        this.$emit('show-add-task');
      },
      showEditTask() {
        this.$emit('show-edit-task');
      },
      deletedTask() {
        this.$emit('delete-task');
      }
    }
  };
  </script>
  