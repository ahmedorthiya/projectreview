<?php

namespace App\Http\Middleware;

use Closure;

class CheckReferral
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

// Check that there is not already a cookie set and that we have 'ref' in the url
        if (! $request->hasCookie('referral') && $request->query('ref') ) {
            // Add a cookie to the response that lasts 5 years (in minutes)
            $response->cookie( 'referral', encrypt( $request->query('ref') ), 525600 );
        }

        return $response;
    }
}
