@extends('layouts.admin')

@section('title', 'Edit Exam')
@section('page-title', 'Edit Exam')

@section('admin-content')
<div class="max-w-2xl bg-white rounded-xl border border-secondary-200 p-6">
    <form method="POST" action="{{ route('admin.exams.update', $exam) }}">
        @csrf
        @method('PUT')
        @include('admin.exams._form', ['exam' => $exam])
    </form>
</div>
@endsection
