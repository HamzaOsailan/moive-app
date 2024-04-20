<?php

namespace App\Http\Controllers;
use App\Services\CastService;
use Illuminate\Http\Request;

class CastController extends Controller
{
    protected $castService;

    public function __construct(CastService $castService)
    {
        $this->castService = $castService;
    }

    public function index()
    {
        $users = $this->castService->getAllUsers();
        return view('admin.index', compact('users'));
    }

}
