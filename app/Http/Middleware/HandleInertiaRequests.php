<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use App\Models\Conversation;
use Illuminate\Support\Facades\Auth;
use App\Models\Message;


class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {

        // Cek jika sudah login
        if (Auth::check()) {

            $conversations = conversation::where('user2_id', Auth::id())->get();



            // Jika pengguna bukan admin
            if (Auth::user()->role_id === 2) {

                // Cek jika pengguna user biasa sudah punya percakapan atau belum jika belum buat percakapan baru
                if ($conversations->isEmpty()) {
                    if (Auth::id() !== 1) {
                        $conversation = new Conversation();
                        $conversation->user1_id = 1;
                        $conversation->user2_id = Auth::id();
                        $conversation->save();

                        $conversation = Conversation::with(["user1", "user2", "messages"])->where('user2_id', Auth::id())->first();

                        Message::create([
                            'conversation_id' => $conversation->id,
                            'user_id' => 1,
                            'content' => 'Halo, ada yang bisa saya bantu?',
                        ]);
                    }
                }
                $conversation = Conversation::with(['user1', 'user2', 'messages'])->where('user2_id', Auth::id())
                    ->first();

                $messages = Message::with('user')->where('conversation_id', $conversation->id)->get();
            } else {

                $conversations = Conversation::with(['user1', 'user2', 'messages'])->get();
            }
        } else {
            $conversations = [];
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'username' => $request->user()->username,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'img' => $request->user()->img,
                    'role_id' => $request->user()->role_id,
                ] : null,
            ],
            'flash' => [
                // 'message' => fn () => $request->session()->get('message')
                'message' => fn () => Session::get('message')
            ],

            'conversations' => $conversations,
            'messages' => $messages ?? null,

        ];
    }
}
