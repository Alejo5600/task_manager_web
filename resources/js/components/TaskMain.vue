<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>LISTA DE TAREAS</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  
    <task-actions
      :id-task-selected="idTaskSelected"
      @show-add-task="showAddTask"
      @show-edit-task="showEditTask"
      @delete-task="deletedTask"
    />
  
    <task-dialog

      :dialog="dialog"
      :type="type"
      :title="title"
      :selected-status="selectedStatus"
      :status-options="statusOptions"
      @update:dialog="dialog = $event"
      @update:title="title = $event"
      @update:selectedStatus="selectedStatus = $event"
      @handle-action="handleAction"
    />
    <v-container>  
      <task-list
        :headers="headers"
        :tasks="tasks"
        :id-task-selected="idTaskSelected"
        @update:idTaskSelected="idTaskSelected = $event"
      />
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import TaskList from './TaskList.vue';
  import TaskDialog from './TaskDialog.vue';
  import TaskActions from './TaskActions.vue';
  
  export default {
    components: {
      TaskList,
      TaskDialog,
      TaskActions
    },
    data() {
      return {
        headers: [
          { title: 'Tarea', key: 'title' },
          { title: 'Estado', key: 'status' }
        ],
        type: 'add',
        idTaskSelected: 0,
        tasks: [],
        selectedStatus: 0,
        dialog: false,
        title: '',
        statusOptions: [
          { id: 1, name: 'Completada' },
          { id: 0, name: 'Pendiente' }
        ]
      };
    },
    created() {
      this.getTask();
    },
    methods: {
      async getTask() {
        try {
          const response = await axios.get('http://localhost:8000/api/tasks');
          this.tasks = response.data;
        } catch (error) {
          console.error('Error al obtener las tareas:', error);
        }
      },
      handleAction() {
      
        this.title;
        if (this.type === 'add') {
          this.addTask();
        } else {
          this.updateTask();
        }
      },
      async addTask() {
        try {
          const newTask = {
            title: this.title,
            status: this.selectedStatus === 1
          };
          await axios.post('http://localhost:8000/api/tasks', newTask);
          this.dialog = false;
          this.title = '';
          this.getTask();
        } catch (error) {
          console.error('Error al agregar tarea:', error);
        }
      },
      async updateTask() {
        try {
          const updatedTask = {
            title: this.title,
            status: this.selectedStatus === 1
          };
          await axios.put(`http://localhost:8000/api/tasks/${this.idTaskSelected}`, updatedTask);
          this.dialog = false;
          this.title = '';
          this.getTask();
        } catch (error) {
          console.error('Error al actualizar tarea:', error);
        }
      },
      async deletedTask() {
        if (this.idTaskSelected !== 0) {
          try {
            await axios.delete(`http://localhost:8000/api/tasks/${this.idTaskSelected}`);
            this.idTaskSelected = 0;
            this.getTask();
          } catch (error) {
            console.error('Error al eliminar tarea:', error);
          }
        }
      },
      showAddTask() {
        this.dialog = true;
        this.type = 'add';
        this.title = '';
        this.selectedStatus = 0;
      },
      showEditTask() {
        const task = this.tasks.find(t => t.id === this.idTaskSelected);
        if (task) {
          this.dialog = true;
          this.type = 'edit';
          this.title = task.title;
          this.selectedStatus = task.status;
        }
      }
    }
  };
  </script>
  