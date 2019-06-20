<?php

use Illuminate\Http\Request;
//lIBRARYSUER ROUTES
Route::put('modify-user', 'LibraryUserController@update');
Route::put('delete-user', 'LibraryUserController@delete');
Route::get('get-user', 'LibraryUserController@index');
Route::post('store-user', 'LibraryUserController@store');
//CATEGORY ROUTES
Route::put('modify-category', 'CategoryController@update');
Route::put('delete-category', 'CategoryController@delete');
Route::get('get-category', 'CategoryController@index');
Route::post('store-category', 'CategoryController@store');
//BOOK ROUTES
Route::put('modify-book', 'BookController@update');
Route::put('delete-book', 'BookController@delete');
Route::get('get-book', 'BookController@index');
Route::post('store-book', 'BookController@store');
Route::post('store-user-borrowed-book', 'BookController@storeUserBook');
Route::post('store-user-returned-book', 'BookController@returnStoreUserBook');


Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('profile', 'UserController@getAuthenticatedUser');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
