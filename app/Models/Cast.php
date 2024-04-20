<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cast extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'title', 'description', 'image_Url', 'rate', 'admin_id'];

    public function admin()
    {
        return $this->belongsTo(User::class);
    }
    public function movies()
    {
        return $this->belongsToMany(Movie::class);
    }
}
