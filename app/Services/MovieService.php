<?php
// use Illuminate\Support\Facades\Auth;

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use App\Models\Movie;
use App\Repositories\MovieRepository;
use Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\JsonResponse;

class MovieService
{
    protected $movieRepo;

    public function __construct(MovieRepository $movieRepo)
    {
        $this->movieRepo = $movieRepo;
    }

    public function getAllMovies()
    {
        try {
            // Auth::user() && Auth::user()->id == Movie->user_id;
            return $this->movieRepo->getAllMovies();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch movies'], 500);
        }
    }
    public function findMoiveByName($title)
    {
        $findMoive = $this->movieRepo->findMoiveByName($title);
        if ($findMoive) {
            return [
                "Moivename"=> $findMoive
            ];
        } else {
            return [
                "message" => "can't find this moive"
            ];
        }
    }



    public function createMovie($data): JsonResponse
    {
        try {
            $movie = $this->movieRepo->createMovie($data);
            return response()->json($movie, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Server error: ' . $e->getMessage()], 500);
        }
    }
    public function updateMovie($name, array $data)
    {
        // if (!Auth::check()) {
        //     return response()->json(['error'=>'Not authenticated'],401);
        // }
        $moive = $this->movieRepo->updateMovie($name, $data);
        return response()->json(['moive' => $moive]);
    }
    public function deleteMovie($name)
    {
        // if (!Auth::check()) {
        //     return response()->json(['error'=>'Not authenticated'],401);
        // }
        $movie= $this->movieRepo->deleteMovie($name);
        return response()->json([
            'message'=>'the operation in completed'
        ]);
    }
}