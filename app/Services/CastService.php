<?php

namespace App\Services;

use App\Repositories\CastRepository;

class CastService
{
    protected $castRepository;

    public function __construct(CastRepository $castRepository)
    {
        $this->castRepository = $castRepository;
    }

    // public function getAllUsers()
    // {
    //     return $this->castRepository->getAll();
    // }

    // Other methods for admin-related operations
}
