<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PlotController extends Controller
{
    /**
     * List all plots with dynamic category and sector filtering.
     */
    public function index(Request $request)
    {
        $category = $request->query('category');
        $sector = $request->query('sector');
        $sizeKatha = $request->query('size');

        // Sample structured response matching Nuxt 4 Frontend models
        $plots = [
            [
                'id' => 'PL-101',
                'title' => '3 Katha Prime Residential Plot',
                'category' => 'residential-land',
                'sector' => 'Sector 1 (Ready Handover)',
                'sizeKatha' => 3,
                'sizeSqFt' => 2160,
                'pricePerKatha' => 18.5,
                'totalPrice' => 55.5,
                'downPayment' => 11.1,
                'monthlyEMI' => 74000,
                'status' => 'available',
                'facing' => 'South',
                'roadWidth' => '40 Feet Wide Road',
                'image' => 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
                'features' => ['Immediate Registration', 'Electricity & Gas Line Ready', 'Next to Central Mosque', 'Demarcated Boundary']
            ],
            [
                'id' => 'PL-102',
                'title' => '5 Katha Lakefront Premium Plot',
                'category' => 'residential-land',
                'sector' => 'Sector 2 (Developing)',
                'sizeKatha' => 5,
                'sizeSqFt' => 3600,
                'pricePerKatha' => 19.5,
                'totalPrice' => 97.5,
                'downPayment' => 19.5,
                'monthlyEMI' => 129000,
                'status' => 'available',
                'facing' => 'Lakefront',
                'roadWidth' => '60 Feet Boulevard',
                'image' => 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
                'features' => ['Panoramic Lake View', 'Walking Track Access', 'Corner Location', 'Eco Park Facing']
            ]
        ];

        return response()->json([
            'success' => true,
            'total' => count($plots),
            'data' => $plots
        ]);
    }

    /**
     * Retrieve single plot information.
     */
    public function show($id)
    {
        return response()->json([
            'success' => true,
            'plot_id' => $id,
            'status' => 'available'
        ]);
    }

    /**
     * Retrieve aggregated statistics for Masterplan Viewer.
     */
    public function sectorStats()
    {
        return response()->json([
            'success' => true,
            'township_acres' => 3500,
            'total_sectors' => 4,
            'active_plots' => 1250,
            'ready_percentage' => 88
        ]);
    }
}
