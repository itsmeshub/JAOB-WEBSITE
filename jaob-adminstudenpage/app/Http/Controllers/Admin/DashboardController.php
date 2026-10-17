<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\Fee;
use App\Models\Student;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function index(): View
    {
        $stats = [
            'total_applications' => Application::count(),
            'pending_applications' => Application::where('status', 'pending')->count(),
            'approved_applications' => Application::where('status', 'approved')->count(),
            'rejected_applications' => Application::where('status', 'rejected')->count(),
            'total_students' => Student::count(),
            'active_students' => Student::where('status', 'active')->count(),
            'pending_fees' => Fee::where('status', 'pending')->count(),
        ];

        $recentApplications = Application::latest()->take(5)->get();

        return view('admin.dashboard', [
            'stats' => $stats,
            'recentApplications' => $recentApplications,
        ]);
    }
}
