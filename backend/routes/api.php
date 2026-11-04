<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LeadController;
use App\Http\Controllers\Api\PlotController;

/*
|--------------------------------------------------------------------------
| Gangchil Real Estate - Laravel 13 REST API Routes
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    // Plot & Property Management Endpoints
    Route::get('/plots', [PlotController::class, 'index']);
    Route::get('/plots/{id}', [PlotController::class, 'show']);
    Route::get('/plots/sectors/stats', [PlotController::class, 'sectorStats']);

    // High-Converting Lead Capture Endpoints
    Route::post('/leads', [LeadController::class, 'store']);
    Route::post('/leads/site-visit', [LeadController::class, 'bookSiteVisit']);
    Route::post('/leads/brochure-download', [LeadController::class, 'downloadBrochure']);
    Route::post('/leads/plot-inquiry', [LeadController::class, 'plotInquiry']);
});
