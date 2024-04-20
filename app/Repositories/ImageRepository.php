<?php

namespace App\Repositories;

use App\Models\Image;

class ImageRepository
{
    public function getAllMovies()
    {
        return Image::all();
    }

    public function createMovie($data)
    {
        return Image::create($data);
    }
}
