import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TakePhotoController::index
 * @see app/Http/Controllers/TakePhotoController.php:12
 * @route '/photo'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/photo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TakePhotoController::index
 * @see app/Http/Controllers/TakePhotoController.php:12
 * @route '/photo'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TakePhotoController::index
 * @see app/Http/Controllers/TakePhotoController.php:12
 * @route '/photo'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TakePhotoController::index
 * @see app/Http/Controllers/TakePhotoController.php:12
 * @route '/photo'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TakePhotoController::create
 * @see app/Http/Controllers/TakePhotoController.php:23
 * @route '/photo/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/photo/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TakePhotoController::create
 * @see app/Http/Controllers/TakePhotoController.php:23
 * @route '/photo/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TakePhotoController::create
 * @see app/Http/Controllers/TakePhotoController.php:23
 * @route '/photo/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TakePhotoController::create
 * @see app/Http/Controllers/TakePhotoController.php:23
 * @route '/photo/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TakePhotoController::show
 * @see app/Http/Controllers/TakePhotoController.php:39
 * @route '/photo/show'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/photo/show',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TakePhotoController::show
 * @see app/Http/Controllers/TakePhotoController.php:39
 * @route '/photo/show'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TakePhotoController::show
 * @see app/Http/Controllers/TakePhotoController.php:39
 * @route '/photo/show'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TakePhotoController::show
 * @see app/Http/Controllers/TakePhotoController.php:39
 * @route '/photo/show'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})
const TakePhotoController = { index, create, show }

export default TakePhotoController