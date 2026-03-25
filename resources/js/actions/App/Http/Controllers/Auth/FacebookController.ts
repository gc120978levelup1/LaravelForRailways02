import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\FacebookController::redirectToFacebook
 * @see app/Http/Controllers/Auth/FacebookController.php:9
 * @route '/login/facebook'
 */
export const redirectToFacebook = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToFacebook.url(options),
    method: 'get',
})

redirectToFacebook.definition = {
    methods: ["get","head"],
    url: '/login/facebook',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\FacebookController::redirectToFacebook
 * @see app/Http/Controllers/Auth/FacebookController.php:9
 * @route '/login/facebook'
 */
redirectToFacebook.url = (options?: RouteQueryOptions) => {
    return redirectToFacebook.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FacebookController::redirectToFacebook
 * @see app/Http/Controllers/Auth/FacebookController.php:9
 * @route '/login/facebook'
 */
redirectToFacebook.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToFacebook.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\FacebookController::redirectToFacebook
 * @see app/Http/Controllers/Auth/FacebookController.php:9
 * @route '/login/facebook'
 */
redirectToFacebook.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirectToFacebook.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\FacebookController::handleFacebookCallback
 * @see app/Http/Controllers/Auth/FacebookController.php:13
 * @route '/login/facebook/callback'
 */
export const handleFacebookCallback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleFacebookCallback.url(options),
    method: 'get',
})

handleFacebookCallback.definition = {
    methods: ["get","head"],
    url: '/login/facebook/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\FacebookController::handleFacebookCallback
 * @see app/Http/Controllers/Auth/FacebookController.php:13
 * @route '/login/facebook/callback'
 */
handleFacebookCallback.url = (options?: RouteQueryOptions) => {
    return handleFacebookCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FacebookController::handleFacebookCallback
 * @see app/Http/Controllers/Auth/FacebookController.php:13
 * @route '/login/facebook/callback'
 */
handleFacebookCallback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleFacebookCallback.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\FacebookController::handleFacebookCallback
 * @see app/Http/Controllers/Auth/FacebookController.php:13
 * @route '/login/facebook/callback'
 */
handleFacebookCallback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handleFacebookCallback.url(options),
    method: 'head',
})
const FacebookController = { redirectToFacebook, handleFacebookCallback }

export default FacebookController