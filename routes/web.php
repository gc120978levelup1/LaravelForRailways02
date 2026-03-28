<?php

use App\Http\Controllers\QQRGenController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

use App\Http\Controllers\Auth\GoogleController;
Route::get('login/google', [GoogleController::class, 'redirectToGoogle'])->name('google.login');
Route::get('login/google/callback', [GoogleController::class, 'handleGoogleCallback']);

use App\Http\Controllers\Auth\FacebookController;
Route::get('login/facebook', [FacebookController::class, 'redirectToFacebook'])->name('facebook.login');
Route::get('login/facebook/callback', [FacebookController::class, 'handleFacebookCallback']);

use App\Http\Controllers\Auth\LinkedInController;
Route::get('login/linkedin', [LinkedInController::class, 'redirectToLinkedIn'])->name('linkedin.login');
Route::get('login/linkedin/callback', [LinkedInController::class, 'handleLinkedInCallback']);

/*
use Laravel\Socialite\Facades\Socialite;
Route::get('login/linkedin', function () {
    return Socialite::driver('linkedin-openid')->redirect();
})->name('linkedin.login');
*/

use App\Http\Controllers\ComplaintController;
Route::middleware('auth')->group(function () {
    Route::get('/complaint', [ComplaintController::class, 'index'])->name('complaint.index');
    Route::get('/complaint/create', [ComplaintController::class, 'create'])->name('complaint.create');
    Route::post('/complaint/post', [ComplaintController::class, 'store'])->name('complaint.post');
    Route::get('/complaint/{complaint}/edit', [ComplaintController::class, 'edit'])->name('complaint.edit');
    Route::post('/complaint/{complaint}/update', [ComplaintController::class, 'update'])->name('complaint.update');
    Route::get('/complaint/{complaint}/show', [ComplaintController::class, 'show'])->name('complaint.show');
});

use App\Http\Controllers\MapController;
Route::middleware('auth')->group(function () {
    Route::get('/map', [MapController::class, 'index'])->name('map.index');
    Route::get('/map/create', [MapController::class, 'create'])->name('map.create');
    Route::get('/map/show', [MapController::class, 'show'])->name('map.show');
});

use App\Http\Controllers\FaceRecogController;
Route::middleware('auth')->group(function () {
    Route::get('/face_recog', [FaceRecogController::class, 'index'])->name('face_recog.index');
    Route::get('/face_recog/create', [FaceRecogController::class, 'create'])->name('face_recog.create');
    Route::get('/face_recog/show', [FaceRecogController::class, 'show'])->name('face_recog.show');
});

use App\Http\Controllers\QxQRGenController;
Route::middleware('auth')->group(function () {
    Route::get('/qr_code', [QxQRGenController::class, 'index'])->name('qrcode.index');
    Route::get('/qr_code/create', [QxQRGenController::class, 'create'])->name('qrcode.create');
    Route::get('/qr_code/show', [QxQRGenController::class, 'show'])->name('qrcode.show');
});

use App\Http\Controllers\IDScanController;
Route::middleware('auth')->group(function () {
    Route::get('/id_scan', [IDScanController::class, 'index'])->name('id_scan.index');
    Route::get('/id_scan/create', [IDScanController::class, 'create'])->name('id_scan.create');
    Route::get('/id_scan/show', [IDScanController::class, 'show'])->name('id_scan.show');
});

use App\Http\Controllers\TakePhotoController;
Route::middleware('auth')->group(function () {
    Route::get('/photo', [TakePhotoController::class, 'index'])->name('photo.index');
    Route::get('/photo/create', [TakePhotoController::class, 'create'])->name('photo.create');
    Route::get('/photo/show', [TakePhotoController::class, 'show'])->name('photo.show');
});

use App\Http\Controllers\CanvasController;
Route::middleware('auth')->group(function () {
    Route::get('/canvas', [CanvasController::class, 'index'])->name('canvas.index');
    Route::get('/canvas/create', [CanvasController::class, 'create'])->name('canvas.create');
    Route::get('/canvas/show', [CanvasController::class, 'show'])->name('canvas.show');
});

use App\Http\Controllers\EmployeeController;
Route::middleware('auth')->group(function () {
    Route::get('employee/create_scan_license', [EmployeeController::class, 'create_scan_license'])->name('employee.create_scan_license');
    Route::get('employee/create_upload_2ids', [EmployeeController::class, 'create_upload_2ids'])->name('employee.create_upload_2ids');
    Route::get('employee/create_upload_4pics', [EmployeeController::class, 'create_upload_4pics'])->name('employee.create_upload_4pics');
    Route::get('employee/create_check_all_inputs', [EmployeeController::class, 'create_check_all_inputs'])->name('employee.create_check_all_inputs');
    Route::post('employee/post', [EmployeeController::class, 'store'])->name('employee.post');
    Route::get('employee/{employee}/show', [EmployeeController::class, 'show'])->name('employee.show');
    Route::get('employee/{employee}/edit', [EmployeeController::class, 'edit'])->name('employee.edit');
    Route::post('employee/{employee}/update', [EmployeeController::class, 'update'])->name('employee.update');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
