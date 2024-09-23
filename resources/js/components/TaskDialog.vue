<template>
  <v-dialog :model-value="dialog" @update:model-value="$emit('update:dialog', $event)" width="500px">
    <v-card
      append-icon="$close"
      class="mx-auto"
      elevation="16"
      max-width="800"
      width="500"
      :title="type === 'add' ? 'Agregar Tarea' : 'Actualizar Tarea'"
    >
      <template v-slot:append>
        <v-btn icon="$close" variant="text" @click="$emit('update:dialog', false)"></v-btn>
      </template>

      <v-divider></v-divider>

      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                
                :model-value="title" 
                @update:model-value="updateTitle"
                :counter="10"
                :rules="titleRules"
                label="Titulo"
                hide-details
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
             
              <v-select
                :model-value="selectedStatus" 
                @update:model-value="$emit('update:selectedStatus', $event)"
                :item-props="itemProps"
                :items="statusOptions"
                item-value="id"
                label="Estado"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-divider></v-divider>

      <div class="pa-4 text-end">
        <v-btn
          class="text-none"
          color="success"
          min-width="92"
          variant="outlined"
          rounded
          @click="handleAction"
        >
          {{ type === 'add' ? 'Agregar' : 'Actualizar' }}
        </v-btn>
        <v-btn
          class="text-none"
          color="medium-emphasis"
          min-width="92"
          variant="outlined"
          rounded
          @click="$emit('update:dialog', false)"
        >
          Cerrar
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    type: String,
    title: String,
    selectedStatus: Number,
    statusOptions: Array
  },
  emits: ['update:dialog', 'handle-action','update:title'],
  data() {
    return {
      valid: false,
      localTitle: this.title,
      titleRules: [
        value => !!value || 'Titulo es obligatorio.',
        value => (value?.length <= 10) || 'El título debe tener menos de 10 caracteres.'
      ]
    };
  },
  watch: {
    value(newValue) {
      this.localTitle = newValue; // Sincroniza el valor si cambia en el padre
    },
  },
  methods: {
    handleAction() {
      this.$emit('handle-action');
    },
    itemProps (item) {
        return {
          title: item.name,
        }
      },
      updateTitle(newTitle) {
      
      this.$emit('update:title', newTitle); // Emite el evento con el nuevo valor
    }
  }
};
</script>
