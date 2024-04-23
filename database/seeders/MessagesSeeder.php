<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Conversation;
use App\Models\Message;
use Faker\Factory as Faker;

class MessagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $conversations = Conversation::all();

        foreach ($conversations as $conversation) {
            // Random number of messages per conversation
            $messageCount = rand(5, 20);

            for ($i = 0; $i < $messageCount; $i++) {
                $message = new Message();
                $message->conversation_id = $conversation->id;
                // Randomly assign sender between user1 and user2
                $message->user_id = rand(0, 1) == 0 ? $conversation->user1_id : $conversation->user2_id;
                $message->content = $faker->sentence();
                $message->save();
            }
        }
    }
}
