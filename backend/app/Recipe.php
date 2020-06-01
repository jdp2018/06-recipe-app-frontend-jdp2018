<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;

class Recipe extends Model
{

    protected $fillable = [
        'user_id', 'idMeal'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
