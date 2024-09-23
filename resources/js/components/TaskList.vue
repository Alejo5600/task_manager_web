<template>
    <v-data-table
    :headers="headers"
  :items="tasks"
item-value="id"
  select-strategy="single"
  show-select
  :model-value="[localIdTaskSelected]"
  @update:model-value="(val) => localIdTaskSelected = val[0]"
    >
      <template v-slot:item.select="{ item }">
        <v-checkbox
      :model-value="localIdTaskSelected"
        @update:model-value="updateIdTaskSelected(item.id)"
      :value="item.id"
    ></v-checkbox>
      </template>
      <template v-slot:item.status="{ item }">
        <span :style="{ color: item.status === 1 ? 'green' : 'red' }">
          {{ item.status === 1 ? 'Completada' : 'Pendiente' }}
        </span>
      </template>
    </v-data-table>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array,
      headers: Array,
      idTaskSelected: Number
    },
    computed: {
    // Propiedad computada para manejar el estado local
    localIdTaskSelected: {
      get() {
        return this.idTaskSelected;
      },
      set(value) {
        this.$emit('update:idTaskSelected', value); // Emitimos el evento al padre
      }
    }
  },
  methods: {
    updateIdTaskSelected(id) {
      this.localIdTaskSelected = id; // Actualizamos la propiedad computada
    }
  },
    emits: ['update:idTaskSelected']
  }
  </script>
  