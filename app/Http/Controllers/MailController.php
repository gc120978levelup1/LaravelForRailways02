<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendGmail;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $mailData = [
            'title' => 'Mail from your Laravel app',
            'subject' => $request->subject,
            'body' => $request->body
        ];

        // Recipient's email address is passed in the request
        Mail::to($request->recipient_email)->send(new SendGmail($mailData));

        return response()->json(['message' => 'Email sent successfully']);
    }
}
