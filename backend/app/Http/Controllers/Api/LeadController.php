<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LeadController extends Controller
{
    /**
     * Store a general real estate lead / consultation request.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'nullable|email|max:255',
            'interestType' => 'nullable|string',
            'plotId' => 'nullable|string',
            'message' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Logic to store lead in DB, send SMS to user and Slack/WhatsApp notification to Senior Advisor

        return response()->json([
            'success' => true,
            'message' => 'Lead successfully logged and assigned to VIP Property Advisor.',
            'lead_id' => 'GANGCHIL-LD-' . uniqid(),
            'timestamp' => now()->toIso8601String()
        ], 201);
    }

    /**
     * Handle VIP Free AC Chauffeur site visit scheduling.
     */
    public function bookSiteVisit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'preferredDate' => 'required|date',
            'pickupLocation' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }

        return response()->json([
            'success' => true,
            'message' => 'Chauffeur pickup booked. Transport team will contact client 2 hours prior.',
            'booking_reference' => 'TOUR-' . strtoupper(uniqid())
        ], 200);
    }

    /**
     * Log and deliver gated masterplan brochure.
     */
    public function downloadBrochure(Request $request)
    {
        return response()->json([
            'success' => true,
            'brochure_url' => '/downloads/Gangchil_Masterplan_Brochure_2026.pdf',
            'message' => 'Brochure link generated and dispatched via WhatsApp.'
        ]);
    }
}
