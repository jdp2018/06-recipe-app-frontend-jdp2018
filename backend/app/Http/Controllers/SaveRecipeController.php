<?php

namespace App\Http\Controllers;
use App\Recipe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class SaveRecipeController extends Controller

{
   public function addRecepie(Request $request)
   {
        $recipe = Recipe::create(array(
            "user_id" => auth()->user()->id,
            "idMeal" => $request->idMeal,
        ));

        return response()->json(['message' => 'Successfully added message']);
   }

   public function getRecepies(Request $request)
   {
        $recipes = Recipe::where('user_id', auth()->user()->id)->get();
        return response()->json(['message' => 'Successfully added message', "data" => $recipes]);
   }

   public function deleteRecepie(Request $request)
   {
        Recipe::where('idMeal', $request->idMeal)->delete();
        $recipes = Recipe::where('user_id', auth()->user()->id)->get();

        return response()->json(['message' => 'Successfully deleted message',"data" => $recipes]);
   }
}

