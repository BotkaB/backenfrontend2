<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szemelynyt extends Model
{
    use HasFactory;
    protected $fillable = [
        'nev',
        'szulh',
        'szulido',
        'anyjaneve',
    ];
}
