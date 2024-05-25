const config = {
    localDev: {
        edgioDevServer: {
            port: 3000,
            host: 'localhost',
        },
    },
    cloudRuntime: "nodejs20.x",
    origins: [],
    rules: [
        {
            "origin": {
                "set_origin": "edgio_serverless"
            },
            "headers": {
                "set_request_headers": {
                    "x-cloud-function": "express-app"
                }
            }
        }
    ]
}

export default config;
