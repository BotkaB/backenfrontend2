<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szemelynyts', function (Blueprint $table) {
            $table->id();
           
            $table->string('nev');
            $table->string('szulh');
            $table->string('szulido');
            $table->string('anyjaneve');
           
            $table->timestamps();
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szemelynyts');
    }
};
