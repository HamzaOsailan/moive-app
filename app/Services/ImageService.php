<?php

namespace App\Services;

use App\Repositories\ImageRepository;

class ImageService
{
    protected $imageRepository ;

    public function __construct(ImageRepository  $imageRepository )
    {
        $this->imageRepository  = $imageRepository ;
    }

    // public function getAllUsers()
    // {
    //     return $this->imageRepository->getAll();
    // }

    // Other methods for admin-related operations
}
