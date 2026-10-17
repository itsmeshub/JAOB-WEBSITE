<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\RejectApplicationRequest;
use App\Models\Application;
use App\Services\StudentOnboardingService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class ApplicationController extends Controller
{

    public function __construct(
        private readonly StudentOnboardingService $onboarding,
    ) {}

    public function index(Request $request): View
    {
        $applications = Application::query()
            ->search($request->query('q'))
            ->when($request->query('class'), fn ($q, $class) => $q->where('class', $class))
            ->when($request->query('status'), fn ($q, $status) => $q->where('status', $status))
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin.applications.index', [
            'applications' => $applications,
            'filters' => $request->only('q', 'class', 'status'),
        ]);
    }

    public function show(Application $application): View
    {
        $application->load('documents', 'reviewer', 'student');

        return view('admin.applications.show', [
            'application' => $application,
        ]);
    }

    public function approve(Application $application): RedirectResponse
    {
        if (! $application->isPending()) {
            return back()->with('error', 'This application has already been reviewed.');
        }

        $result = $this->onboarding->approve($application, Auth::guard('admin')->id());

        return redirect()
            ->route('admin.applications.show', $application)
            ->with('newCredentials', [
                'student_number' => $result->student->student_number,
                'password' => $result->plainPassword,
            ])
            ->with('success', 'Application approved and student account created.');
    }

    public function reject(RejectApplicationRequest $request, Application $application): RedirectResponse
    {
        if (! $application->isPending()) {
            return back()->with('error', 'This application has already been reviewed.');
        }

        $this->onboarding->reject($application, Auth::guard('admin')->id(), $request->validated('remarks'));

        return redirect()
            ->route('admin.applications.show', $application)
            ->with('success', 'Application rejected.');
    }
}
