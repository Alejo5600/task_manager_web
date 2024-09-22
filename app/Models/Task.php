<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    
    // Propiedades que pueden ser asignadas masivamente
     protected $fillable = [
        'title',
        'status',
    ];
}
