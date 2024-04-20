<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMovieRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    // StoreMovieRequest.php
    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'rate' => 'required|numeric',
            'date' => 'required|date',
            'images' => 'sometimes|array',
            'images.*' => 'sometimes|string|url', 
            'admin_id' => 'required|integer'
        ];
    }
    
}
