<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('student_number')->unique();
            $table->foreignId('application_id')->nullable()->constrained()->nullOnDelete();

            $table->string('full_name');
            $table->string('father_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->date('dob')->nullable();
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->string('email')->nullable();
            $table->string('mobile', 20)->nullable();
            $table->text('address')->nullable();
            $table->enum('class', ['10th', '12th']);
            $table->enum('stream', ['science', 'commerce', 'arts'])->nullable();
            $table->string('category')->nullable();
            $table->string('photo_path')->nullable();

            $table->string('password');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->rememberToken();

            $table->timestamps();

            $table->index(['class', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
