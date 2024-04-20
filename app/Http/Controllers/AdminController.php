<?php

namespace App\Http\Controllers;

use App\Services\AdminService;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    protected $adminService;

    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }

    // public function index()
    // {
    //     $users = $this->adminService->getAllUsers();
    //     return view('admin.index', compact('users'));
    // }

    public function createMovie(Request $request)
    {
        $adminId = $request->user()->id; // Assuming admin is authenticated
        $movieData = $request->all(); // Assuming movie data is sent in the request
        $this->adminService->addNewMovie($adminId, $movieData);
        // Handle response or redirect
    }

    // Other controller methods that use $this->adminService
}
