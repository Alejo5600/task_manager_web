# Task Manager Backend

Este es el proyecto de backend para la aplicación de gestión de tareas (Task Manager). Incluye una API RESTful para manejar las tareas y vistas web desarrolladas en Vue.js.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Composer](https://getcomposer.org/) (para manejar dependencias de PHP)
- [Laravel](https://laravel.com/docs/8.x/installation) (versión 8 o superior)
- [MySQL](https://www.mysql.com/) (o cualquier otro motor de base de datos que prefieras)

## Instalación

Sigue estos pasos para correr el proyecto localmente:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Alejo5600/task_manager_web.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd task_manager_web
   ```

3. **Instala las dependencias de PHP:**

   ```bash
   composer install
   ```

4. **Configura tu archivo de entorno:**

   Copia el archivo `.env.example` a `.env` y configura las credenciales de la base de datos.

   ```bash
   cp .env.example .env
   ```

5. **Genera la clave de la aplicación:**

   ```bash
   php artisan key:generate
   ```

6. **Ejecuta las migraciones para crear las tablas en la base de datos:**

   ```bash
   php artisan migrate
   ```
    * OPCIONAL: ejecutar los seed para tener datos de pruebas 
    ```bash
    php artisan db:seed
    ```

7. **Instala las dependencias de JavaScript:**

   ```bash
   npm install
   ```

8. **Inicia el servidor de desarrollo:**

   - Para el backend:

     ```bash
     php artisan serve
     ```

   - Para el frontend (en otro terminal):

     ```bash
     npm run serve
     ```

## Uso

Una vez que el servidor de desarrollo esté corriendo, puedes acceder a la API en `http://localhost:8000/api/tasks` y a la aplicación web en `http://localhost:8080`.

## Endpoints de la API

- `GET /api/tasks` - Obtener todas las tareas.
- `POST /api/tasks` - Crear una nueva tarea.
- `PUT /api/tasks/{id}` - Actualizar una tarea existente.
- `DELETE /api/tasks/{id}` - Eliminar una tarea.

## Colección de Postman

Para facilitar las pruebas de la API, se incluye una colección de Postman. Puedes descargarla desde el siguiente enlace:

- [Colección de Postman](postman_collection/TaskManager.postman_collection.json)
