import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CanvasController::index
 * @see app/Http/Controllers/CanvasController.php:12
 * @route '/canvas'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/canvas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CanvasController::index
 * @see app/Http/Controllers/CanvasController.php:12
 * @route '/canvas'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CanvasController::index
 * @see app/Http/Controllers/CanvasController.php:12
 * @route '/canvas'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CanvasController::index
 * @see app/Http/Controllers/CanvasController.php:12
 * @route '/canvas'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CanvasController::create
 * @see app/Http/Controllers/CanvasController.php:22
 * @route '/canvas/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/canvas/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CanvasController::create
 * @see app/Http/Controllers/CanvasController.php:22
 * @route '/canvas/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CanvasController::create
 * @see app/Http/Controllers/CanvasController.php:22
 * @route '/canvas/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CanvasController::create
 * @see app/Http/Controllers/CanvasController.php:22
 * @route '/canvas/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CanvasController::show
 * @see app/Http/Controllers/CanvasController.php:40
 * @route '/canvas/show'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/canvas/show',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CanvasController::show
 * @see app/Http/Controllers/CanvasController.php:40
 * @route '/canvas/show'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CanvasController::show
 * @see app/Http/Controllers/CanvasController.php:40
 * @route '/canvas/show'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CanvasController::show
 * @see app/Http/Controllers/CanvasController.php:40
 * @route '/canvas/show'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})
const canvas = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
show: Object.assign(show, show),
}

export default canvas