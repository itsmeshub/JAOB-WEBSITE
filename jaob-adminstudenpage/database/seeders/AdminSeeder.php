<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

/**
 * Creates the first super_admin account so someone can actually log into
 * /admin/login after a fresh install. Change these credentials
 * immediately after first login (there is no "forgot password" screen
 * for admins wired up by default — see README).
 */
class AdminSeeder extends Seeder
{
    public function run(): void
    {
        Admin::firstOrCreate(
            ['email' => 'admin@jaobonline.org'],
            [
                'full_name' => 'JAOB Super Admin',
                'password' => 'ChangeMe@123',
                'role' => 'super_admin',
                'phone' => null,
            ]
        );

        $this->command?->info('Admin login: admin@jaobonline.org / ChangeMe@123 — please change this after first login.');
    }
}
