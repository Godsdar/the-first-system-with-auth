<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create([
            'about' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, dignissimos iste voluptatibus quisquam laborum earum quas aliquam at itaque corrupti?'
        ]);
    }
}
