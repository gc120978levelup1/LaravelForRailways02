import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\QxQRGenController::index
 * @see app/Http/Controllers/QxQRGenController.php:12
 * @route '/qr_code'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/qr_code',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QxQRGenController::index
 * @see app/Http/Controllers/QxQRGenController.php:12
 * @route '/qr_code'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QxQRGenController::index
 * @see app/Http/Controllers/QxQRGenController.php:12
 * @route '/qr_code'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QxQRGenController::index
 * @see app/Http/Controllers/QxQRGenController.php:12
 * @route '/qr_code'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\QxQRGenController::create
 * @see app/Http/Controllers/QxQRGenController.php:22
 * @route '/qr_code/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/qr_code/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QxQRGenController::create
 * @see app/Http/Controllers/QxQRGenController.php:22
 * @route '/qr_code/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QxQRGenController::create
 * @see app/Http/Controllers/QxQRGenController.php:22
 * @route '/qr_code/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QxQRGenController::create
 * @see app/Http/Controllers/QxQRGenController.php:22
 * @route '/qr_code/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\QxQRGenController::show
 * @see app/Http/Controllers/QxQRGenController.php:40
 * @route '/qr_code/show'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/qr_code/show',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QxQRGenController::show
 * @see app/Http/Controllers/QxQRGenController.php:40
 * @route '/qr_code/show'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QxQRGenController::show
 * @see app/Http/Controllers/QxQRGenController.php:40
 * @route '/qr_code/show'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QxQRGenController::show
 * @see app/Http/Controllers/QxQRGenController.php:40
 * @route '/qr_code/show'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})
const QxQRGenController = { index, create, show }

export default QxQRGenController