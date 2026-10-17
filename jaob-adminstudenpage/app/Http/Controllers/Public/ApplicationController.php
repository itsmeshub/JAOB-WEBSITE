<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\Public\StoreApplicationRequest;
use App\Models\Application;
use App\Models\ApplicationDocument;
use App\Services\NumberGenerator;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class ApplicationController extends Controller
{
    public function __construct(
        private readonly NumberGenerator $numbers,
    ) {}

    public function create(): View
    {
        return view('public.apply');
    }

    public function store(StoreApplicationRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $photoPath = null;
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('applications/photos', 'public');
        }

        $application = Application::create([
            'application_number' => $this->numbers->applicationNumber(),
            'full_name' => $data['full_name'],
            'father_name' => $data['father_name'],
            'mother_name' => $data['mother_name'],
            'dob' => $data['dob'],
            'gender' => $data['gender'],
            'email' => $data['email'],
            'mobile' => $data['mobile'],
            'address' => $data['address'],
            'city' => $data['city'],
            'state' => $data['state'],
            'pincode' => $data['pincode'],
            'class' => $data['class'],
            'stream' => $data['stream'] ?? null,
            'category' => $data['category'] ?? null,
            'previous_qualification' => $data['previous_qualification'] ?? null,
            'previous_school' => $data['previous_school'] ?? null,
            'photo_path' => $photoPath,
            'status' => 'pending',
        ]);

        if ($request->hasFile('documents')) {
            $types = $request->input('document_types', []);

            foreach ($request->file('documents') as $index => $file) {
                $storedPath = $file->store('applications/documents', 'public');

                ApplicationDocument::create([
                    'application_id' => $application->id,
                    'doc_type' => $types[$index] ?? 'other',
                    'file_path' => $storedPath,
                    'file_name' => $file->getClientOriginalName(),
                    'uploaded_at' => now(),
                ]);
            }
        }

        return redirect()
            ->route('apply.success', ['application' => $application->application_number]);
    }

    public function success(): View
    {
        return view('public.apply-success', [
            'applicationNumber' => request()->query('application'),
        ]);
    }
}
