import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\GoogleController::redirectToGoogle
 * @see app/Http/Controllers/Auth/GoogleController.php:9
 * @route '/login/google'
 */
export const redirectToGoogle = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToGoogle.url(options),
    method: 'get',
})

redirectToGoogle.definition = {
    methods: ["get","head"],
    url: '/login/google',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\GoogleController::redirectToGoogle
 * @see app/Http/Controllers/Auth/GoogleController.php:9
 * @route '/login/google'
 */
redirectToGoogle.url = (options?: RouteQueryOptions) => {
    return redirectToGoogle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\GoogleController::redirectToGoogle
 * @see app/Http/Controllers/Auth/GoogleController.php:9
 * @route '/login/google'
 */
redirectToGoogle.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToGoogle.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\GoogleController::redirectToGoogle
 * @see app/Http/Controllers/Auth/GoogleController.php:9
 * @route '/login/google'
 */
redirectToGoogle.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirectToGoogle.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\GoogleController::handleGoogleCallback
 * @see app/Http/Controllers/Auth/GoogleController.php:13
 * @route '/login/google/callback'
 */
export const handleGoogleCallback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleGoogleCallback.url(options),
    method: 'get',
})

handleGoogleCallback.definition = {
    methods: ["get","head"],
    url: '/login/google/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\GoogleController::handleGoogleCallback
 * @see app/Http/Controllers/Auth/GoogleController.php:13
 * @route '/login/google/callback'
 */
handleGoogleCallback.url = (options?: RouteQueryOptions) => {
    return handleGoogleCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\GoogleController::handleGoogleCallback
 * @see app/Http/Controllers/Auth/GoogleController.php:13
 * @route '/login/google/callback'
 */
handleGoogleCallback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleGoogleCallback.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\GoogleController::handleGoogleCallback
 * @see app/Http/Controllers/Auth/GoogleController.php:13
 * @route '/login/google/callback'
 */
handleGoogleCallback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handleGoogleCallback.url(options),
    method: 'head',
})
const GoogleController = { redirectToGoogle, handleGoogleCallback }

export default GoogleController