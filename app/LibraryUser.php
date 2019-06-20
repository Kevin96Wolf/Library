<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LibraryUser extends Model
{
  protected $fillable = ['name','email','cellphone'];
  public function books(){
    return $this->belongsToMany('App\Book');
  }
}
