@extends('layouts.admin')

@section('title', 'Schedule Exam')
@section('page-title', 'Schedule Exam')

@section('admin-content')
<div class="max-w-2xl bg-white rounded-xl border border-secondary-200 p-6">
    <form method="POST" action="{{ route('admin.exams.store') }}">
        @csrf
        @include('admin.exams._form', ['exam' => null])
    </form>
</div>
@endsection
