<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ConvertPasswordRequest;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use App\User;

class ConvertPasswordController extends Controller
{
    public function resetProcess(ConvertPasswordRequest $request)
    {
        return $this->getPasswordResetTableRow($request)->count()>0 ?
        $this->convertPassword($request) :
        $this->tokenNotFoundResponse();
    }
    private function getPasswordResetTableRow($request)
    {
        return DB::table('password_resets')->where(['email' => $request->email,
        'token'=> $request->resetToken]);
    }

    private function tokenNotFoundResponse()
    {
        return response()->json(['error' => 'Token or email is incorrect'],
        Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function convertPassword($request)
    {
        $user = User::where('email',$request->email)->first();
        $user->update (['password' =>$request->password]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json(['dat'=>'Successfully Changed'], Response::HTTP_CREATED);
    }
}
