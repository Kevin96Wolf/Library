<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Book;
use App\Category;
use App\LibraryUser;
use Illuminate\Support\Facades\Validator;
class BookController extends Controller
{
  public function index()
  {
      $books=Book::all();
      //get each category from each "n" book
      foreach ($books as $book) {
        $book->category;
        $book->users;

      }
      return $books;
  }

  public function show(Request $request)
  {
      return Book::find($request->id);
  }

  public function store(Request $request)
  {
//validate books request
    $validator = Validator::make([
      'name' => $request->input('name'),
    'author' => $request->input('author'),

    'category_id' => $request->input('category_id'),
    'publishDate' => $request->input('publishDate'),
    'state' => $request->input('state')
      ] , [
      'name' => 'required|string|max:255',
    'author' => 'required|string|max:255',

    'category_id' => 'required|integer',
    'publishDate' => 'required',
    'state' => 'required'

      ]);

      if($validator->fails()){
              return response()->json($validator->errors()->toJson(), 400);
      }
//save image in public folder
      if ($request->hasFile('image') ) {
            $file = $request->image;
            $path = "http://localhost/Library/storage/app/" . $request->image->store('public');
        }
//save book in DB
     Book::create([
        'name' => $request->input('name'),
      'author' => $request->input('author'),
      'urlImage' => $path,
      'category_id' => $request->input('category_id'),
      'publishDate' => $request->input('publishDate'),
      'state' => 0
        ] );
       $books=Book::all();
          //get each category from each "n" book
          foreach ($books as $book) {
            $book->category;
            $book->users;
          }
          return $books;
  }

  public function update(Request $request)
  {
    $validator = Validator::make($request->json()->all() , [
        'id' => 'required',
      'name' => 'required|string|max:255',
    'author' => 'required|string|max:255',

    'category_id' => 'required|integer',
    'publishDate' => 'required',
    'state' => 'required'

      ]);

      if($validator->fails()){
              return response()->json($validator->errors()->toJson(), 400);
      }

    $BookModify=Book::find( $request->id );
     $BookModify->update($request->json()->all());
       $books=Book::all();
          //get each category from each "n" book
          foreach ($books as $book) {
            $book->category;
            $book->users;
          }
          return $books;
  }


  public function delete(Request $request)
  {
      $book=Book::find($request->id);
      Storage::delete('public/'. ltrim($request->urlImage, 'http://localhost/Library/storage/app/public/')  );
      $book->users()->detach();
      $book->delete();

      return  ;
  }
  //his method ta make the relation manyToMany insert 1 book with users
  //update state wich represents if is borrowed
  public function storeUserBook(Request $request)
  {
      $task = Book::findOrFail($request->idB);
      $task = $task->update(['state' => 1]);
      Book::find($request->idB)->users()->attach($request->idU);
      $bookUser=LibraryUser::find($request->idU)->books()->find($request->idB);
      $bookUser->users;
      $bookUser->category;
      return $bookUser;
  }
  //This delete the relation of the last method
  public function returnStoreUserBook(Request $request){
    $task = Book::findOrFail($request->idB);
    $task = $task->update(['state' => 0]);
    Book::find($request->idB)->users()->detach($request->idU);
    $bookUser=Book::find($request->idB);
    $bookUser->users;
    $bookUser->category;
    return $bookUser;
  }
}
