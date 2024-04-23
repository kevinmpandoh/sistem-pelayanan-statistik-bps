<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Conversation;
use App\Models\User;
use App\Models\Role;

class ConversationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Mendapatkan peran 'admin'
        $adminRole = Role::where('name', 'admin')->first();

        // Mendapatkan semua pengguna dengan peran 'admin'
        $admins = User::where('role_id', $adminRole->id)->get();

        // Mendapatkan semua pengguna dengan peran 'user'
        $users = User::where('role_id', '!=', $adminRole->id)->get();

        // Membuat percakapan antara setiap admin dan setiap pengguna
        foreach ($admins as $admin) {
            foreach ($users as $user) {
                // Pastikan tidak ada duplikasi percakapan
                if (!Conversation::where('user1_id', $admin->id)->where('user2_id', $user->id)->exists()) {
                    $conversation = new Conversation();
                    $conversation->user1_id = $admin->id;
                    $conversation->user2_id = $user->id;
                    $conversation->save();
                }
            }
        }
    }
}
