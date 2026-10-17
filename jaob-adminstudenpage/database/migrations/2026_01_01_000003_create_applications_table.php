<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('application_number')->unique();

            $table->string('full_name');
            $table->string('father_name');
            $table->string('mother_name');
            $table->date('dob');
            $table->enum('gender', ['male', 'female', 'other']);
            $table->string('email');
            $table->string('mobile', 20);
            $table->text('address');
            $table->string('city');
            $table->string('state');
            $table->string('pincode', 10);

            $table->enum('class', ['10th', '12th']);
            $table->enum('stream', ['science', 'commerce', 'arts'])->nullable();
            $table->string('category')->nullable();
            $table->string('previous_qualification')->nullable();
            $table->string('previous_school')->nullable();
            $table->string('photo_path')->nullable();

            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->text('remarks')->nullable();
            $table->foreignId('reviewed_by')->nullable()->constrained('admins')->nullOnDelete();
            $table->timestamp('reviewed_at')->nullable();

            $table->timestamps();

            $table->index(['status', 'class']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
