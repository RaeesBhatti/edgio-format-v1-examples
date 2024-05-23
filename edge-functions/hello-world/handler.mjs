/**
 * Initializer for your Edge Function
 * @param {Object} context - Context
 * @returns {Promise<void>} -
 */
export async function handleHttpInit(context) {
}

/**
 * Handle the HTTP request.
 * @param {Request} request - HTTP request
 * @param {Object} context - Context
 * @param {URL} context.requestUrl - request URL
 * @returns {Promise<Response>} - HTTP response
 */
export async function handleHttpRequest(request, context) {
    return new Response('Hello, World!');
}
