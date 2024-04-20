<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Services\MovieService;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMovieRequest;

class MovieController extends Controller
{
    protected $movieService;

    public function __construct(MovieService $movieService)
    {
        $this->movieService = $movieService;
    }

    public function index()
    {
        $movies = $this->movieService->getAllMovies();
        return response()->json($movies, 200);
    }
    public function findMoiveByName($title)
    {
        $movies = $this->movieService->findMoiveByName($title);
        return response()->json($movies, 200);
    }
    // MovieController.php
    public function store(StoreMovieRequest $request)
    {
        $validated = $request->validated();
        return $this->movieService->createMovie($validated);
    }
    public function update(StoreMovieRequest $request,$name){
        $validated=$request->validated();
        return $this->movieService->updateMovie($name,$validated);
    }
    public function delete($name){
        return $this->movieService->deleteMovie($name);
    }

}