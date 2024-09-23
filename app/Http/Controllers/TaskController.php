<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    // Obtener todas las tareas
    public function index()
    {
        $tasks = Task::orderBy('created_at', 'desc')->get();
        return response()->json($tasks);
    }
    

    // Crear una nueva tarea
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'status' => 'boolean',
        ]);

        $task = Task::create($request->all());

        return response()->json($task, 201); // 201 Created
    }

    // Obtener una tarea específica
    public function show($id)
    {
        $task = Task::findOrFail($id); // Lanzará un 404 si no se encuentra
        return response()->json($task);
    }

    // Actualizar una tarea existente
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'status' => 'sometimes|boolean',
        ]);

        $task = Task::findOrFail($id);
        $task->update($request->all());

        return response()->json($task);
    }

    // Eliminar una tarea
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return response()->json(null, 204); // 204 No Content
    }
}
