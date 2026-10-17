<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('results', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->foreignId('exam_id')->nullable()->constrained()->nullOnDelete();
            $table->string('subject');
            $table->decimal('marks_obtained', 6, 2);
            $table->decimal('max_marks', 6, 2);
            $table->string('grade', 5)->nullable();
            $table->enum('result_status', ['pass', 'fail'])->default('pass');
            $table->boolean('published')->default(false);
            $table->timestamps();

            $table->index(['student_id', 'published']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('results');
    }
};
