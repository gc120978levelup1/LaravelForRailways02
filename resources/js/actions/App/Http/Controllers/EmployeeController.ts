import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EmployeeController::create_scan_license
 * @see app/Http/Controllers/EmployeeController.php:12
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
 * @see app/Http/Controllers/EmployeeController.php:12
 * @route '/employee/create_scan_license'
 */
create_scan_license.url = (options?: RouteQueryOptions) => {
    return create_scan_license.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::create_scan_license
 * @see app/Http/Controllers/EmployeeController.php:12
 * @route '/employee/create_scan_license'
 */
create_scan_license.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_scan_license.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::create_scan_license
 * @see app/Http/Controllers/EmployeeController.php:12
 * @route '/employee/create_scan_license'
 */
create_scan_license.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_scan_license.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::store
 * @see app/Http/Controllers/EmployeeController.php:17
 * @route '/employee/post'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/employee/post',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmployeeController::store
 * @see app/Http/Controllers/EmployeeController.php:17
 * @route '/employee/post'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::store
 * @see app/Http/Controllers/EmployeeController.php:17
 * @route '/employee/post'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:30
 * @route '/employee/{employee}/create_upload_2ids'
 */
export const create_upload_2ids = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_upload_2ids.url(args, options),
    method: 'get',
})

create_upload_2ids.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}/create_upload_2ids',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:30
 * @route '/employee/{employee}/create_upload_2ids'
 */
create_upload_2ids.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return create_upload_2ids.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:30
 * @route '/employee/{employee}/create_upload_2ids'
 */
create_upload_2ids.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_upload_2ids.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:30
 * @route '/employee/{employee}/create_upload_2ids'
 */
create_upload_2ids.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_upload_2ids.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::update_create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:37
 * @route '/employee/{employee}/update_create_upload_2ids'
 */
export const update_create_upload_2ids = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_create_upload_2ids.url(args, options),
    method: 'post',
})

update_create_upload_2ids.definition = {
    methods: ["post"],
    url: '/employee/{employee}/update_create_upload_2ids',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmployeeController::update_create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:37
 * @route '/employee/{employee}/update_create_upload_2ids'
 */
update_create_upload_2ids.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update_create_upload_2ids.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::update_create_upload_2ids
 * @see app/Http/Controllers/EmployeeController.php:37
 * @route '/employee/{employee}/update_create_upload_2ids'
 */
update_create_upload_2ids.post = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_create_upload_2ids.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:56
 * @route '/employee/{employee}/create_upload_4pics'
 */
export const create_upload_4pics = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_upload_4pics.url(args, options),
    method: 'get',
})

create_upload_4pics.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}/create_upload_4pics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:56
 * @route '/employee/{employee}/create_upload_4pics'
 */
create_upload_4pics.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return create_upload_4pics.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:56
 * @route '/employee/{employee}/create_upload_4pics'
 */
create_upload_4pics.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_upload_4pics.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:56
 * @route '/employee/{employee}/create_upload_4pics'
 */
create_upload_4pics.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_upload_4pics.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::update_create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:63
 * @route '/employee/{employee}/update_create_upload_4pics'
 */
export const update_create_upload_4pics = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_create_upload_4pics.url(args, options),
    method: 'post',
})

update_create_upload_4pics.definition = {
    methods: ["post"],
    url: '/employee/{employee}/update_create_upload_4pics',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmployeeController::update_create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:63
 * @route '/employee/{employee}/update_create_upload_4pics'
 */
update_create_upload_4pics.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update_create_upload_4pics.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::update_create_upload_4pics
 * @see app/Http/Controllers/EmployeeController.php:63
 * @route '/employee/{employee}/update_create_upload_4pics'
 */
update_create_upload_4pics.post = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_create_upload_4pics.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\EmployeeController::show
 * @see app/Http/Controllers/EmployeeController.php:100
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
 * @see app/Http/Controllers/EmployeeController.php:100
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
 * @see app/Http/Controllers/EmployeeController.php:100
 * @route '/employee/{employee}/show'
 */
show.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::show
 * @see app/Http/Controllers/EmployeeController.php:100
 * @route '/employee/{employee}/show'
 */
show.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::edit_scan_license
 * @see app/Http/Controllers/EmployeeController.php:95
 * @route '/employee/{employee}/edit_scan_license'
 */
export const edit_scan_license = (args: { employee: string | number } | [employee: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit_scan_license.url(args, options),
    method: 'get',
})

edit_scan_license.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}/edit_scan_license',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::edit_scan_license
 * @see app/Http/Controllers/EmployeeController.php:95
 * @route '/employee/{employee}/edit_scan_license'
 */
edit_scan_license.url = (args: { employee: string | number } | [employee: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: args.employee,
                }

    return edit_scan_license.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::edit_scan_license
 * @see app/Http/Controllers/EmployeeController.php:95
 * @route '/employee/{employee}/edit_scan_license'
 */
edit_scan_license.get = (args: { employee: string | number } | [employee: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit_scan_license.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::edit_scan_license
 * @see app/Http/Controllers/EmployeeController.php:95
 * @route '/employee/{employee}/edit_scan_license'
 */
edit_scan_license.head = (args: { employee: string | number } | [employee: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit_scan_license.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EmployeeController::update
 * @see app/Http/Controllers/EmployeeController.php:0
 * @route '/employee/{employee}/update'
 */
export const update = (args: { employee: string | number } | [employee: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/employee/{employee}/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmployeeController::update
 * @see app/Http/Controllers/EmployeeController.php:0
 * @route '/employee/{employee}/update'
 */
update.url = (args: { employee: string | number } | [employee: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: args.employee,
                }

    return update.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::update
 * @see app/Http/Controllers/EmployeeController.php:0
 * @route '/employee/{employee}/update'
 */
update.post = (args: { employee: string | number } | [employee: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\EmployeeController::index
 * @see app/Http/Controllers/EmployeeController.php:107
 * @route '/employee/index'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/employee/index',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmployeeController::index
 * @see app/Http/Controllers/EmployeeController.php:107
 * @route '/employee/index'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmployeeController::index
 * @see app/Http/Controllers/EmployeeController.php:107
 * @route '/employee/index'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmployeeController::index
 * @see app/Http/Controllers/EmployeeController.php:107
 * @route '/employee/index'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})
const EmployeeController = { create_scan_license, store, create_upload_2ids, update_create_upload_2ids, create_upload_4pics, update_create_upload_4pics, show, edit_scan_license, update, index }

export default EmployeeController