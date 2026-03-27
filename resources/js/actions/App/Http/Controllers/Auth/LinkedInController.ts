import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\LinkedInController::redirectToLinkedIn
 * @see app/Http/Controllers/Auth/LinkedInController.php:11
 * @route '/login/linkedin'
 */
export const redirectToLinkedIn = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToLinkedIn.url(options),
    method: 'get',
})

redirectToLinkedIn.definition = {
    methods: ["get","head"],
    url: '/login/linkedin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\LinkedInController::redirectToLinkedIn
 * @see app/Http/Controllers/Auth/LinkedInController.php:11
 * @route '/login/linkedin'
 */
redirectToLinkedIn.url = (options?: RouteQueryOptions) => {
    return redirectToLinkedIn.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LinkedInController::redirectToLinkedIn
 * @see app/Http/Controllers/Auth/LinkedInController.php:11
 * @route '/login/linkedin'
 */
redirectToLinkedIn.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToLinkedIn.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\LinkedInController::redirectToLinkedIn
 * @see app/Http/Controllers/Auth/LinkedInController.php:11
 * @route '/login/linkedin'
 */
redirectToLinkedIn.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirectToLinkedIn.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\LinkedInController::handleLinkedInCallback
 * @see app/Http/Controllers/Auth/LinkedInController.php:16
 * @route '/login/linkedin/callback'
 */
export const handleLinkedInCallback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleLinkedInCallback.url(options),
    method: 'get',
})

handleLinkedInCallback.definition = {
    methods: ["get","head"],
    url: '/login/linkedin/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\LinkedInController::handleLinkedInCallback
 * @see app/Http/Controllers/Auth/LinkedInController.php:16
 * @route '/login/linkedin/callback'
 */
handleLinkedInCallback.url = (options?: RouteQueryOptions) => {
    return handleLinkedInCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LinkedInController::handleLinkedInCallback
 * @see app/Http/Controllers/Auth/LinkedInController.php:16
 * @route '/login/linkedin/callback'
 */
handleLinkedInCallback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleLinkedInCallback.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\LinkedInController::handleLinkedInCallback
 * @see app/Http/Controllers/Auth/LinkedInController.php:16
 * @route '/login/linkedin/callback'
 */
handleLinkedInCallback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handleLinkedInCallback.url(options),
    method: 'head',
})
const LinkedInController = { redirectToLinkedIn, handleLinkedInCallback }

export default LinkedInController