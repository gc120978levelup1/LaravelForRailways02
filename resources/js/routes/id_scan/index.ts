import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\IDScanController::index
 * @see app/Http/Controllers/IDScanController.php:12
 * @route '/id_scan'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/id_scan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IDScanController::index
 * @see app/Http/Controllers/IDScanController.php:12
 * @route '/id_scan'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IDScanController::index
 * @see app/Http/Controllers/IDScanController.php:12
 * @route '/id_scan'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\IDScanController::index
 * @see app/Http/Controllers/IDScanController.php:12
 * @route '/id_scan'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IDScanController::create
 * @see app/Http/Controllers/IDScanController.php:22
 * @route '/id_scan/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/id_scan/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IDScanController::create
 * @see app/Http/Controllers/IDScanController.php:22
 * @route '/id_scan/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IDScanController::create
 * @see app/Http/Controllers/IDScanController.php:22
 * @route '/id_scan/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\IDScanController::create
 * @see app/Http/Controllers/IDScanController.php:22
 * @route '/id_scan/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IDScanController::show
 * @see app/Http/Controllers/IDScanController.php:38
 * @route '/id_scan/show'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/id_scan/show',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IDScanController::show
 * @see app/Http/Controllers/IDScanController.php:38
 * @route '/id_scan/show'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IDScanController::show
 * @see app/Http/Controllers/IDScanController.php:38
 * @route '/id_scan/show'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\IDScanController::show
 * @see app/Http/Controllers/IDScanController.php:38
 * @route '/id_scan/show'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})
const id_scan = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
show: Object.assign(show, show),
}

export default id_scan