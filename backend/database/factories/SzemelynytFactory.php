<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Szemelynyt>
 */
class SzemelynytFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nev' => fake('hu_HU')->name(),
            'szulh'=> fake('hu_HU')->country(),
            'szulido' => fake()->dateTime(),
            'anyjaneve'=>fake('hu_HU')->name(),
        ];
    }
}
