<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('movie_imagestable', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('movie_id');
            $table->string('image_url');
            $table->timestamps();

            $table->foreign('movie_id')->references('id')->on('moviestable')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('movie_imagestable');
    }
};