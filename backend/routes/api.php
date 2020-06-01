<?php


Route::group([
    'middleware' => 'api',

], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('resetPassword', 'ResetPasswordController@sendEmail');
    Route::post('convertPassword', 'ConvertPasswordController@resetProcess');
    Route::post('recipe', 'SaveRecipeController@addRecepie');
    Route::post('recipeDelete', 'SaveRecipeController@deleteRecepie');
    Route::post('recipes', 'SaveRecipeController@getRecepies');
});
