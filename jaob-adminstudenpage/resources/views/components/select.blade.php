@props(['name', 'label', 'options' => [], 'value' => null, 'required' => false, 'placeholder' => 'Select...'])

<div>
    @if($label)
        <label for="{{ $name }}" class="block text-sm font-medium text-secondary-700 mb-1">
            {{ $label }} @if($required)<span class="text-error-600">*</span>@endif
        </label>
    @endif
    <select
        name="{{ $name }}"
        id="{{ $name }}"
        {{ $required ? 'required' : '' }}
        {{ $attributes->merge(['class' => 'w-full rounded-lg border px-3 py-2 text-sm text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 '.($errors->has($name) ? 'border-error-400' : 'border-secondary-300')]) }}
    >
        <option value="">{{ $placeholder }}</option>
        @foreach ($options as $optValue => $optLabel)
            <option value="{{ $optValue }}" @selected(old($name, $value) == $optValue)>{{ $optLabel }}</option>
        @endforeach
    </select>
    @error($name)
        <p class="mt-1 text-xs text-error-600">{{ $message }}</p>
    @enderror
</div>
