<?php

namespace App\Repositories;

use App\Models\Cast;

class CastRepository 
{
    public function getAllMovies()
    {
        return Cast::all();
    }


    public function createMovie($data)
    {
        return Cast::create($data);
    }
}
