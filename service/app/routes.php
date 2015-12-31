<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/


Route::get('/', ['as' => 'home', 'uses' => 'HomeController@showWelcome']);
Route::post('auth/login', "AuthController@login");
Route::post('auth/userdata', "AuthController@userdata");
Route::post('auth/logout', "AuthController@logout");
Route::post('auth/register', "AuthController@register");

Route::controller("member","MemberController");