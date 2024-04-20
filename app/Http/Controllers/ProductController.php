<?php

namespace App\Http\Controllers;

// use Image;

use App\Models\Product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    public function get_all_product()
    {
        $products = Product::all();
        // var_dump($products);
        return response()->json(['products' => $products], 200);

    }
    public function add_product(Request $request)
    {

        //     $product = new Product();
        //     $product->name = $request->name;
        //     $product->description = $request->description;

        //     if ($request->photo != "") {
        //         $strpos = strpos($request->photo, ';');
        //         $sub = substr($request->photo, 0, $strpos);
        //         $ex = explode('/', $sub)[1];
        //         $name = time() . "." . $ex;
        //         $img = Image::make($request->photo)->resize(200, 200);
        //         $upload_path = public_path() . "/upload/";
        //         $img->save($upload_path . $name);
        //         $product->photo = $name;
        //     } else {
        //         $product->photo = "image.png";
        //     }
        //     $product->photo = $name;
        //     $product->type = $request->type;
        //     $product->quantity = $request->quantity;
        //     $product->price = $request->price;
        //     $request->save();
        $validatedData = $request->validate([
            'name' => 'required|string|max:255', // added max length
            'description' => 'required|string',
            'photo' => 'image', // changed to image validation
            'type' => 'required|string|max:255', // added max length
            'quantity' => 'required|integer|min:0', // added minimum value
            'price' => 'required|integer|min:0', // changed to numeric and added minimum value
        ]);

        // Process the photo if it's present in the request
        if ($request->hasFile('photo')) {
            $newImageName = uniqid() . '.' . $request->photo->extension();
            $request->photo->move(public_path('images'), $newImageName);
            $validatedData['photo'] = $newImageName;
        } else {
            $validatedData['photo'] = 'default-image.png'; // default image
        }




        //Create a new product with the validated data
        try {
            Product::create($validatedData);
            return redirect('product')->with('flash_message', 'Product Added Successfully');
        } catch (\Exception $e) {
            return $e;
        }

    }
    // public function get_edit_product($id)
    // {
    //     $product = Product::find($id);
    //     return response()->json([
    //         'product' => $product
    //     ], 200);
    // }
    public function get_product_id($id)
    {

        $product = Product::find($id);


        if ($product) {
            return response()->json(
                [
                    'product' => $product
                ],
                200
            );
        }


        return response()->json(
            [
                'message' => 'Product not found'
            ],
            404
        );
    }
    public function update_product(Request $request, $id)
    {

        $validatedData = $request->validate([
            'name' => 'string|max:255', // added max length
            'description' => 'nullable|string',
            // 'photo' => 'nullable|image', // changed to image validation
            'type' => 'nullable|string|max:255', // added max length
            'quantity' => 'nullable|integer|min:0', // added minimum value
            'price' => 'nullable|integer|min:0', // changed to numeric and added minimum value
        ]);

        
        $product = Product::findOrFail($id);
        $product->name = $request->input("name");
        $product->description = $request->input("description");

        if ($request->hasFile('photo')) {
            $path = $request->input("photo")->store('photos', 'public');
            $product->photo = $path;
        }

        $product->type = $request->input("type");
        $product->quantity = $request->input("quantity");
        $product->price = $request->input("price");


        $product->save();
        return response()->json(['message' => 'Product updated successfully', 'product' => $product]);
    }

    public function delete_product($id)
    {
        $product = Product::findOrFail($id);
        $image_path = public_path() . "/upload/";
        $image = $image_path . $product->photo;
        if (file_exists($image)) {
            @unlink($image);
        }
        $product->delete();
    }
}


