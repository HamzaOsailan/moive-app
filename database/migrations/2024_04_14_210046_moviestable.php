<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    public function up()
    {
        Schema::create('moviestable', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string("type");
            $table->text('description');
            $table->integer('rate')->nullable();
            $table->date('date');
            $table->unsignedBigInteger('admin_id');
            $table->timestamps();
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');

        });
    }

    public function down()
    {
        // Schema::table('movie_imagestable', function (Blueprint $table) {
        //     $table->dropForeign(['movie_id']);
        // });
    
        Schema::dropIfExists('moviestable');
    }
    
};
