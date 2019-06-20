<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookLibraryUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('book_library_user', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('library_user_id');
            $table->foreign('library_user_id')
            ->references('id')->on('library_users')
            ->onUpdate('cascade')
            ->onDelete('cascade');
          
            $table->unsignedInteger('book_id');
            $table->foreign('book_id')
            ->references('id')->on('books')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('book_library_user');
    }
}
