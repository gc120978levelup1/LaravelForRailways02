import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\FaceRecogController::index
 * @see app/Http/Controllers/FaceRecogController.php:12
 * @route '/face_recog'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/face_recog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaceRecogController::index
 * @see app/Http/Controllers/FaceRecogController.php:12
 * @route '/face_recog'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaceRecogController::index
 * @see app/Http/Controllers/FaceRecogController.php:12
 * @route '/face_recog'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FaceRecogController::index
 * @see app/Http/Controllers/FaceRecogController.php:12
 * @route '/face_recog'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FaceRecogController::create
 * @see app/Http/Controllers/FaceRecogController.php:22
 * @route '/face_recog/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/face_recog/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaceRecogController::create
 * @see app/Http/Controllers/FaceRecogController.php:22
 * @route '/face_recog/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaceRecogController::create
 * @see app/Http/Controllers/FaceRecogController.php:22
 * @route '/face_recog/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FaceRecogController::create
 * @see app/Http/Controllers/FaceRecogController.php:22
 * @route '/face_recog/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FaceRecogController::show
 * @see app/Http/Controllers/FaceRecogController.php:38
 * @route '/face_recog/show'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/face_recog/show',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaceRecogController::show
 * @see app/Http/Controllers/FaceRecogController.php:38
 * @route '/face_recog/show'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaceRecogController::show
 * @see app/Http/Controllers/FaceRecogController.php:38
 * @route '/face_recog/show'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FaceRecogController::show
 * @see app/Http/Controllers/FaceRecogController.php:38
 * @route '/face_recog/show'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})
const face_recog = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
show: Object.assign(show, show),
}

export default face_recog