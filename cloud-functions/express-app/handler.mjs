import * as appExports from '../../index.js';

/**
 * Initializer for your application
 * @param {Object} context - Context
 * @param {string} context.applicationPort - Value of process.env.PORT
 * @returns {Promise<void>} -
 */
export async function handleHttpInit(context) {
    return new Promise((resolve, reject) => {
        appExports.app
            .listen(context.applicationPort, () => resolve())
            .on('error', (error) => reject(error));
    });
}

/**
 * Handle the HTTP request.
 * @param {Request} request - HTTP request
 * @param {Object} context - Context
 * @param {string} context.applicationPort - Value of process.env.PORT
 * @param {Promise<void>} context.initPromise - Promise returned by handleHttpInit
 * @param {function} context.waitUntil - Wait until the promise is resolved
 * @returns {Promise<Response>} - HTTP response
 */
export async function handleHttpRequest(request, context) {
    await context.initPromise;
    const requestUrl = new URL(request.url);

    return fetch('http://localhost:' + context.applicationPort + requestUrl.pathname + requestUrl.search, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });
}
