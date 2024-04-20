<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    public function up()
    {
        
        Schema::create('cast_movietable', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('movie_id');
            $table->string('image_url');
            $table->string('character_name');
            $table->timestamps();

          
            $table->foreign('movie_id')->references('id')->on('moviestable')->onDelete('cascade');
        });
    }

    public function down()
    {
        // Schema::dropIfExists('cast_movietable');
    }

};