import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\EmployeeController::create_scan_license
 * @see app/Http/Controllers/EmployeeController.php:23
 * @route '/employee/create_scan_license'
 */
export const create_scan_license = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_scan_license.url(options),
    method: 'get',
})

create_scan_license.definition = {
    methods: ["get","head"],
    url: '/employee/create_scan_license',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::create_scan_license
 * @see app/Http/Controllers/EmployeeController.php:23
 * @route '/employee/create_scan_license'
 */
create_scan_license.url = (options?: RouteQueryOptions) => {
    return create_scan_license.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::create_scan_license
 * @see app/Http/Controllers/EmployeeController.php:23
 * @route '/employee/create_scan_license'
 */
create_scan_license.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_scan_license.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::create_scan_license
 * @see app/Http/Controllers/EmployeeController.php:23
 * @route '/employee/create_scan_license'
 */
create_scan_license.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_scan_license.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:28
 * @route '/employee/create_upload_2ids'
 */
export const create_upload_2ids = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_upload_2ids.url(options),
    method: 'get',
})

create_upload_2ids.definition = {
    methods: ["get","head"],
    url: '/employee/create_upload_2ids',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:28
 * @route '/employee/create_upload_2ids'
 */
create_upload_2ids.url = (options?: RouteQueryOptions) => {
    return create_upload_2ids.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:28
 * @route '/employee/create_upload_2ids'
 */
create_upload_2ids.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_upload_2ids.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:28
 * @route '/employee/create_upload_2ids'
 */
create_upload_2ids.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_upload_2ids.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:33
 * @route '/employee/create_upload_4pics'
 */
export const create_upload_4pics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_upload_4pics.url(options),
    method: 'get',
})

create_upload_4pics.definition = {
    methods: ["get","head"],
    url: '/employee/create_upload_4pics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:33
 * @route '/employee/create_upload_4pics'
 */
create_upload_4pics.url = (options?: RouteQueryOptions) => {
    return create_upload_4pics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:33
 * @route '/employee/create_upload_4pics'
 */
create_upload_4pics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_upload_4pics.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:33
 * @route '/employee/create_upload_4pics'
 */
create_upload_4pics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_upload_4pics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::create_check_all_inputs
 * @see app/Http/Controllers/EmployeeController.php:38
 * @route '/employee/create_check_all_inputs'
 */
export const create_check_all_inputs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_check_all_inputs.url(options),
    method: 'get',
})

create_check_all_inputs.definition = {
    methods: ["get","head"],
    url: '/employee/create_check_all_inputs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::create_check_all_inputs
 * @see app/Http/Controllers/EmployeeController.php:38
 * @route '/employee/create_check_all_inputs'
 */
create_check_all_inputs.url = (options?: RouteQueryOptions) => {
    return create_check_all_inputs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::create_check_all_inputs
 * @see app/Http/Controllers/EmployeeController.php:38
 * @route '/employee/create_check_all_inputs'
 */
create_check_all_inputs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_check_all_inputs.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::create_check_all_inputs
 * @see app/Http/Controllers/EmployeeController.php:38
 * @route '/employee/create_check_all_inputs'
 */
create_check_all_inputs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_check_all_inputs.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::post
 * @see app/Http/Controllers/EmployeeController.php:45
 * @route '/employee/post'
 */
export const post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: post.url(options),
    method: 'post',
})

post.definition = {
    methods: ["post"],
    url: '/employee/post',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmployeeController::post
 * @see app/Http/Controllers/EmployeeController.php:45
 * @route '/employee/post'
 */
post.url = (options?: RouteQueryOptions) => {
    return post.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::post
 * @see app/Http/Controllers/EmployeeController.php:45
 * @route '/employee/post'
 */
post.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: post.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\EmployeeController::show
 * @see app/Http/Controllers/EmployeeController.php:101
 * @route '/employee/{employee}/show'
 */
export const show = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}/show',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::show
 * @see app/Http/Controllers/EmployeeController.php:101
 * @route '/employee/{employee}/show'
 */
show.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return show.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::show
 * @see app/Http/Controllers/EmployeeController.php:101
 * @route '/employee/{employee}/show'
 */
show.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::show
 * @see app/Http/Controllers/EmployeeController.php:101
 * @route '/employee/{employee}/show'
 */
show.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::edit
 * @see app/Http/Controllers/EmployeeController.php:112
 * @route '/employee/{employee}/edit'
 */
export const edit = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::edit
 * @see app/Http/Controllers/EmployeeController.php:112
 * @route '/employee/{employee}/edit'
 */
edit.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return edit.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::edit
 * @see app/Http/Controllers/EmployeeController.php:112
 * @route '/employee/{employee}/edit'
 */
edit.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::edit
 * @see app/Http/Controllers/EmployeeController.php:112
 * @route '/employee/{employee}/edit'
 */
edit.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::update
 * @see app/Http/Controllers/EmployeeController.php:120
 * @route '/employee/{employee}/update'
 */
export const update = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/employee/{employee}/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmployeeController::update
 * @see app/Http/Controllers/EmployeeController.php:120
 * @route '/employee/{employee}/update'
 */
update.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return update.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::update
 * @see app/Http/Controllers/EmployeeController.php:120
 * @route '/employee/{employee}/update'
 */
update.post = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})
const employee = {
    create_scan_license: Object.assign(create_scan_license, create_scan_license),
create_upload_2ids: Object.assign(create_upload_2ids, create_upload_2ids),
create_upload_4pics: Object.assign(create_upload_4pics, create_upload_4pics),
create_check_all_inputs: Object.assign(create_check_all_inputs, create_check_all_inputs),
post: Object.assign(post, post),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default employee