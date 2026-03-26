import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\LinkedInController::login
 * @see app/Http/Controllers/Auth/LinkedInController.php:9
 * @route '/login/linkedin'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login/linkedin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\LinkedInController::login
 * @see app/Http/Controllers/Auth/LinkedInController.php:9
 * @route '/login/linkedin'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LinkedInController::login
 * @see app/Http/Controllers/Auth/LinkedInController.php:9
 * @route '/login/linkedin'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\LinkedInController::login
 * @see app/Http/Controllers/Auth/LinkedInController.php:9
 * @route '/login/linkedin'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})
const linkedin = {
    login: Object.assign(login, login),
}

export default linkedin