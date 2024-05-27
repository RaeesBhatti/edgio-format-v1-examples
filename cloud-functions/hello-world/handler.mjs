/**
 * Initializer for your application
 * @param {Object} context - Context
 * @param {string} context.applicationPort - Value of process.env.PORT
 * @returns {Promise<unknown>} -
 */
export async function handleHttpInit(context) {
}

/**
 * Handle the HTTP request.
 * @param {Request} request - HTTP request
 * @param {Object} context - Context
 * @param {string} context.applicationPort - Value of process.env.PORT
 * @param {Promise<unknown>} context.initPromise - Promise returned by handleHttpInit
 * @param {function} context.waitUntil - Wait until the promise is resolved
 * @returns {Promise<Response>} - HTTP response
 */
export async function handleHttpRequest(request, context) {
    return new Response('Hello, world!');
}
