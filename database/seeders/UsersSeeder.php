<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Buat pengguna admin
        User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
            "img" => "logo-bps.png",
            'role_id' => 1,
        ]);

        User::create([
            'name' => 'Kevin Pandoh',
            'email' => 'kevinmpandoh@gmail.com',
            'password' => bcrypt('123'),
            'role_id' => 2,
        ]);

        // User::create([
        //     'name' => 'Kevin',
        //     "username" => "kevin",
        //     'email' => 'kevin@gmail.com',
        //     'password' => bcrypt('123'),
        //     'role_id' => 1,
        // ]);

        // Buat beberapa pengguna biasa
        // User::factory()->count(10)->create([
        //     'role_id' => 2,
        // ]);
    }
}
