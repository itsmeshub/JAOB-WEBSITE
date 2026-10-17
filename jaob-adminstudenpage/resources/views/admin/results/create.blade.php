@extends('layouts.admin')

@section('title', 'Enter Result')
@section('page-title', 'Enter Result')

@section('admin-content')
<div class="max-w-2xl bg-white rounded-xl border border-secondary-200 p-6">
    <form method="POST" action="{{ route('admin.results.store') }}">
        @csrf
        @include('admin.results._form', ['result' => null])
    </form>
</div>
@endsection
