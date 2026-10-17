@extends('layouts.admin')

@section('title', 'Edit Result')
@section('page-title', 'Edit Result')

@section('admin-content')
<div class="max-w-2xl bg-white rounded-xl border border-secondary-200 p-6">
    <form method="POST" action="{{ route('admin.results.update', $result) }}">
        @csrf
        @method('PUT')
        @include('admin.results._form', ['result' => $result])
    </form>
</div>
@endsection
