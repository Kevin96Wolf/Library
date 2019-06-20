<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
  protected $fillable = ['name','author','publishDate','urlImage','state','category_id'];
  public function category(){
    return $this->belongsTo('App\Category');
  }
  public function users(){
    return $this->belongsToMany('App\LibraryUser');
  }
}
