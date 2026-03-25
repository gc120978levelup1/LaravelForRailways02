import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\GoogleController::login
 * @see app/Http/Controllers/Auth/GoogleController.php:9
 * @route '/login/google'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login/google',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\GoogleController::login
 * @see app/Http/Controllers/Auth/GoogleController.php:9
 * @route '/login/google'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\GoogleController::login
 * @see app/Http/Controllers/Auth/GoogleController.php:9
 * @route '/login/google'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\GoogleController::login
 * @see app/Http/Controllers/Auth/GoogleController.php:9
 * @route '/login/google'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})
const google = {
    login: Object.assign(login, login),
}

export default google