<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator; 
use Illuminate\Support\Facades\Hash; 
use App\Models\User;
use Auth;
use App\Notifications\noty;
use App\Services\AdminService;
class UserController extends Controller
{
    protected $userService;

    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }

 
    public function login()
    {
        $credentials = request(['email', 'password']);
       
        if ($token = auth()->attempt($credentials)) {
            $user = auth()->user();
            // $user->notify(new noty()); 
            return $this->respondWithToken($token);
        }
    
        return response()->json(['error' => 'Unauthorized'], 401);
    }


 
    public function me()
    {
        return response()->json(auth()->user());
    }


    public function logout()
    {
        auth()->logout(); 

        return response()->json(['message' => 'Successfully logged out']);
    }

  
    public function refresh()
    {
     
        return $this->respondWithToken(auth()->refresh());
    }


    protected function respondWithToken($token)
    {
   
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
    public function registerUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
        ]);
        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
       

        return response()->json($user, 201);
    }
}