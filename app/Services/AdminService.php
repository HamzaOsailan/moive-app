<?php

namespace App\Services;

use App\Models\User;
use App\Models\Movie;

class AdminService
{
    public function getAllUsers()
    {
        return User::all();
    }

    public function addNewMovie($adminId, array $movieData)
    {
        $movieData['admin_id'] = $adminId;
        return Movie::create($movieData);
    }
}
