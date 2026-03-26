import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\LinkedInController::handleLinkedInCallback
 * @see app/Http/Controllers/Auth/LinkedInController.php:0
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
 * @see app/Http/Controllers/Auth/LinkedInController.php:0
 * @route '/login/linkedin/callback'
 */
handleLinkedInCallback.url = (options?: RouteQueryOptions) => {
    return handleLinkedInCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LinkedInController::handleLinkedInCallback
 * @see app/Http/Controllers/Auth/LinkedInController.php:0
 * @route '/login/linkedin/callback'
 */
handleLinkedInCallback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleLinkedInCallback.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\LinkedInController::handleLinkedInCallback
 * @see app/Http/Controllers/Auth/LinkedInController.php:0
 * @route '/login/linkedin/callback'
 */
handleLinkedInCallback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handleLinkedInCallback.url(options),
    method: 'head',
})
const LinkedInController = { handleLinkedInCallback }

export default LinkedInController