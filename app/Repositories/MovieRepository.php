<?php

namespace App\Repositories;
use Illuminate\Support\Facades\Auth;
use App\Models\Movie;
use Illuminate\Support\Facades\DB; // Corrected use statement
class MovieRepository
{
    public function getAllMovies()
    {
        return Movie::all();
    }
    public function findMoiveByName(String $title){
      return Movie::where("title",$title)->first();
    }

    //create
   // MovieRepository.php
   public function createMovie($data) {
    $movie = Movie::create($data);
    if (!empty($data['images'])) {
        foreach ($data['images'] as $image_url) {
            $movie->images()->create(['image_url' => $image_url]);
        }
    }
    return $movie;
}

public function updateMovie($name, array $data)
{
    $movie =$this->findMoiveByName($name);
    if ($movie) {
        return $movie->update($data);
    }else{
        return false;
    }
    

}
public function deleteMovie($name)
{
    $movie =$this->findMoiveByName($name);
    if ($movie) {
        return $movie->delete();
    }else{
        return false;
    }
    

}



    // public function addNewMovie($data){
    //     return Movie::created($data);
    // }
}
