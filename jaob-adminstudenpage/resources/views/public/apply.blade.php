@extends('layouts.base')

@section('title', 'Apply Online')

@section('content')
<div class="min-h-screen py-10 px-4">
    <div class="max-w-3xl mx-auto">

        <div class="text-center mb-8">
            <div class="mx-auto h-14 w-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-primary-600/20">
                {{ substr(config('app.institute.short_name'), 0, 1) }}
            </div>
            <h1 class="mt-4 text-2xl font-bold text-secondary-900">Apply Online</h1>
            <p class="text-sm text-secondary-500">{{ config('app.institute.full_name') }}</p>
            <p class="mt-3 text-sm">
                Already applied and approved? <a href="{{ route('student.login') }}" class="text-primary-600 font-medium hover:underline">Student login &rarr;</a>
            </p>
        </div>

        @if ($errors->any())
            <div class="mb-6 rounded-lg bg-error-50 border border-error-200 text-error-700 px-4 py-3 text-sm">
                Please fix the highlighted fields below and try again.
            </div>
        @endif

        <form method="POST" action="{{ route('apply.store') }}" enctype="multipart/form-data" class="space-y-6">
            @csrf

            <section class="bg-white rounded-xl border border-secondary-200 p-6">
                <h2 class="font-semibold text-secondary-900 mb-4">Personal Information</h2>
                <div class="grid sm:grid-cols-2 gap-4">
                    <x-input name="full_name" label="Full Name" required placeholder="Enter your full name" />
                    <x-input name="father_name" label="Father's Name" required placeholder="Enter father's name" />
                    <x-input name="mother_name" label="Mother's Name" required placeholder="Enter mother's name" />
                    <x-input name="dob" label="Date of Birth" type="date" required />
                    <x-select name="gender" label="Gender" required placeholder="Select gender"
                              :options="['male' => 'Male', 'female' => 'Female', 'other' => 'Other']" />
                    <x-select name="category" label="Category" placeholder="Select category"
                              :options="['general' => 'General', 'obc' => 'OBC', 'sc' => 'SC', 'st' => 'ST', 'ews' => 'EWS']" />
                </div>
            </section>

            <section class="bg-white rounded-xl border border-secondary-200 p-6">
                <h2 class="font-semibold text-secondary-900 mb-4">Contact Details</h2>
                <div class="grid sm:grid-cols-2 gap-4">
                    <x-input name="email" label="Email Address" type="email" required placeholder="Enter email address" />
                    <x-input name="mobile" label="Mobile Number" required placeholder="Enter 10-digit mobile number" />
                    <div class="sm:col-span-2">
                        <x-input name="address" label="Address" required placeholder="Enter your full address" />
                    </div>
                    <x-input name="city" label="City" required placeholder="City" />
                    <x-input name="state" label="State" required placeholder="State" />
                    <x-input name="pincode" label="Pincode" required placeholder="Pincode" />
                </div>
            </section>

            <section class="bg-white rounded-xl border border-secondary-200 p-6">
                <h2 class="font-semibold text-secondary-900 mb-4">Academic Information</h2>
                <div class="grid sm:grid-cols-2 gap-4">
                    <x-select name="class" label="Course" required placeholder="Select course"
                              :options="['10th' => '10th', '12th' => '12th']" />
                    <x-select name="stream" label="Stream (for 12th)" placeholder="Select stream"
                              :options="['science' => 'Science', 'commerce' => 'Commerce', 'arts' => 'Arts']" />
                    <x-input name="previous_qualification" label="Last Qualification" placeholder="e.g., Class 9 / Class 10" />
                    <x-input name="previous_school" label="Last School" placeholder="Enter school name" />
                </div>
            </section>

            <section class="bg-white rounded-xl border border-secondary-200 p-6">
                <h2 class="font-semibold text-secondary-900 mb-1">Documents</h2>
                <p class="text-xs text-secondary-500 mb-4">JPG, PNG or PDF, up to 5MB each.</p>

                <div class="mb-4">
                    <x-input name="photo" label="Passport Size Photo" type="file" accept="image/*" />
                </div>

                @php
                    $docTypes = [
                        'digital_signature' => 'Digital Signature',
                        'aadhaar_card' => 'Aadhaar Card',
                        'qualification_certificate' => 'Last Qualification Certificate',
                        'caste_certificate' => 'Caste Certificate (if applicable)',
                        'income_certificate' => 'Income Certificate (if applicable)',
                    ];
                @endphp

                <div class="grid sm:grid-cols-2 gap-4">
                    @foreach ($docTypes as $key => $label)
                        <div>
                            <label class="block text-sm font-medium text-secondary-700 mb-1">{{ $label }}</label>
                            <input type="hidden" name="document_types[]" value="{{ $key }}">
                            <input type="file" name="documents[]" accept=".pdf,.jpg,.jpeg,.png"
                                   class="w-full text-sm rounded-lg border border-dashed border-secondary-300 px-3 py-3 file:mr-3 file:rounded-md file:border-0 file:bg-primary-50 file:text-primary-700 file:px-3 file:py-1.5 hover:border-primary-300">
                        </div>
                    @endforeach
                </div>
                @error('documents.*')<p class="mt-2 text-xs text-error-600">{{ $message }}</p>@enderror
            </section>

            <button type="submit"
                    class="w-full rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 transition">
                Submit Application
            </button>
        </form>
    </div>
</div>
@endsection
