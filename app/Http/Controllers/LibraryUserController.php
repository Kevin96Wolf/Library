<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;
use App\LibraryUser;
use Illuminate\Support\Facades\Validator;
class LibraryUserController extends Controller
{
  public function index()
  {
    //get all user with its books borrowed
    $users=LibraryUser::all();
    foreach ($users as $user) {
      foreach ($user->books as $book ) {
        // code...
        $book->category;
      }
    }
    return $users;
  }

  public function show(Request $request)
  {
      return LibraryUser::find($request->id);
  }

  public function store(Request $request)
  {
    $validator = Validator::make($request->json()->all() , [
      'name' => 'required|string|max:255',
      'email' => 'required|string|max:255',
      'cellphone' => 'required|string|max:255'
      ]);
      if($validator->fails()){
              return response()->json($validator->errors()->toJson(), 400);
      }
      $LibraryUser = LibraryUser::create($request->json()->all());
      return $LibraryUser;
  }

  public function update(Request $request)
  {
    $validator = Validator::make($request->json()->all() , [
    'name' => 'required|string|max:255',
    'email' => 'required|string|max:255',
    'cellphone' => 'required|string|max:255'
      ]);
      $task = LibraryUser::findOrFail($request->id);
      $task->update($request->json()->all());

      return LibraryUser::all();
  }


  public function delete(Request $request)
  {
      $task = LibraryUser::findOrFail($request->id);
      $task->books()->detach();
      $task->delete();

      return LibraryUser::all();
  }
}
