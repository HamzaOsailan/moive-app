<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable = ['movie_id', 'image_url'];
    protected $table = 'movie_imagestable'; 

    public function movie() {
        return $this->belongsTo(Movie::class, 'movie_id');
    }
}