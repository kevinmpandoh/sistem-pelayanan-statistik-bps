<?php

namespace App\Http\Controllers;

use App\Events\SendMessage;
use Illuminate\Http\Request;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Role;
use Illuminate\Support\Facades\Redirect;

class ChatController extends Controller
{
    public function index()
    {
        // Mendapatkan semua percakapan yang dimiliki oleh pengguna
        $conversations = Conversation::with(['user1', 'user2', 'messages'])->where('user1_id', Auth::id())
            ->get();

        return response()->json($conversations);
    }

    public function show($id)
    {
        // Mendapatkan pesan berdasarkan id
        $messages = Message::with("user")->where('conversation_id', $id)->get();
        return response()->json($messages);
    }

    public function sendMessage(Request $request, Conversation $conversation)
    {
        // Validasi data yang diterima dari form
        $validatedData = $request->validate([
            'content' => 'required|string',
        ]);


        $message = new Message();
        $message->conversation_id = $conversation->id;
        $message->user_id = Auth::id();
        $message->content = $validatedData['content'];
        $message->save();

        // return redirect()->back()->with('success', 'Message sent!');
        // return tanpa redirect
        return Redirect::back()->with([
            'data' => 'Something you want to pass to front-end',
        ]);
    }
}
