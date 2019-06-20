<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Illuminate\Support\Facades\Validator;
class CategoryController extends Controller
{
  public function index()
  {
      return Category::all();
  }

  public function show(Request $request)
  {
      return Category::find($request->id);
  }

  public function store(Request $request)
  {
    $validator = Validator::make($request->json()->all() , [
    'name' => 'required|string|max:255',
    'description' => 'required|string|max:255',
      ]);
      if($validator->fails()){
              return response()->json($validator->errors()->toJson(), 400);
      }
      $category = Category::create($request->json()->all());
      return Category::all();
  }

  public function update(Request $request)
  {
    $validator = Validator::make($request->json()->all() , [
    'name' => 'required|string|max:255',
    'description' => 'required|string|max:255',
      ]);
      $task = Category::findOrFail($request->id);
      $task->update($request->json()->all());

      return Category::all();
  }


  public function delete(Request $request)
  {
      $task = Category::findOrFail($request->id);
      $task->delete();

      return Category::all();
  }
}
