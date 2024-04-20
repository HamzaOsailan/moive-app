<?php

namespace App\Http\Controllers;
use app\Services\ImageService;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    protected $imageService;
    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }

    // public function index()
    // {
    //     $users = $this->imageService->getAllUsers();
    //     return view('admin.index', compact('users'));
    // }
}