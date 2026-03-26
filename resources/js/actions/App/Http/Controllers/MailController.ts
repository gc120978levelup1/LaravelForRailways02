import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MailController::sendEmail
 * @see app/Http/Controllers/MailController.php:11
 * @route '/api/send-email'
 */
export const sendEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendEmail.url(options),
    method: 'post',
})

sendEmail.definition = {
    methods: ["post"],
    url: '/api/send-email',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MailController::sendEmail
 * @see app/Http/Controllers/MailController.php:11
 * @route '/api/send-email'
 */
sendEmail.url = (options?: RouteQueryOptions) => {
    return sendEmail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MailController::sendEmail
 * @see app/Http/Controllers/MailController.php:11
 * @route '/api/send-email'
 */
sendEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendEmail.url(options),
    method: 'post',
})
const MailController = { sendEmail }

export default MailController