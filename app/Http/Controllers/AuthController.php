<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Login');
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if (auth()->attempt($credentials)) {
            $request->session()->regenerate();
            Session::flash('message', 'Berhasil login!');
            return back();
        }

        return back()->withErrors([
            'email' => 'Email atau password salah.',
        ]);
    }

    public function logout(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        Session::flash('message', 'Berhasil logout!');

        return redirect('/');
    }

    public function register()
    {
        return Inertia::render('Register');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:3|same:confirm_password',
            "confirm_password" => "required"
        ], [
            'email.unique' => 'Email sudah terdaftar!',
            'password.same' => 'Password dan konfirmasi password tidak sama!',
            "password.min" => "Password minimal 3 karakter",
        ]);

        $validatedData['password'] = Hash::make($request->password);

        User::create($validatedData);
        Session::flash('message', 'Berhasil Daftar! Silahkan Login Kembali');

        return redirect('/')->with('success', 'Berhasil mendaftar!');
    }
}
