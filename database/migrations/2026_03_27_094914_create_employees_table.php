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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('license')->nullable();
            $table->string('expirydate')->nullable();
            $table->string('name')->nullable();
            $table->string('address')->nullable();
            $table->string('birthday')->nullable();
            $table->string('nationality')->nullable();
            $table->string('sex')->nullable();
            $table->string('id2_number')->nullable();
            $table->string('id2_type')->nullable();
            $table->string('id3_number')->nullable();
            $table->string('id3_type')->nullable();
            $table->string('image_emp_link1')->nullable();
            $table->string('image_emp_link2')->nullable();
            $table->string('image_emp_link3')->nullable();
            $table->string('image_emp_link4')->nullable();
            $table->string('image_id_link1')->nullable();
            $table->string('image_id_link2')->nullable();
            $table->string('image_id_link3')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
