import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\FacebookController::login
 * @see app/Http/Controllers/Auth/FacebookController.php:9
 * @route '/login/facebook'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login/facebook',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\FacebookController::login
 * @see app/Http/Controllers/Auth/FacebookController.php:9
 * @route '/login/facebook'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FacebookController::login
 * @see app/Http/Controllers/Auth/FacebookController.php:9
 * @route '/login/facebook'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\FacebookController::login
 * @see app/Http/Controllers/Auth/FacebookController.php:9
 * @route '/login/facebook'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})
const facebook = {
    login: Object.assign(login, login),
}

export default facebook