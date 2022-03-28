<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class SVtableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('sv')->insert(['name'=>Str::random(10), 'email'=>Str::random(10).'@gmail.com']);
        DB::table('register')->insert([
            'name' => 'Rohan',
            'email' => 'rohan@gmail.com',
            'password' => Hash::make('Rohan')
        ]);
    }
}
