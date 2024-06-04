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
    },
    {
      "if": [
        {"==": [{"request": "path"}, "/hello-world"]},
        {
          "headers": {
            "set_request_headers": {
              "x-cloud-function": "hello-world"
            }
          },
        }
      ]
    },
    {
      "if": [
        {"==": [{"request": "path"}, "/cause-timeout"]},
        {
          "headers": {
            "set_request_headers": {"x-cloud-function": "cause-timeout"}
          },
        }
      ]
    },
    {
      "if": [
        {"==": [{"request": "path"}, "/cause-timeout-mid-streaming"]},
        {
          "headers": {
            "set_request_headers": {"x-cloud-function": "cause-timeout-mid-streaming"}
          },
        }
      ]
    },
    {
      "if": [
        {"==": [{"request": "path"}, "/streamer"]},
        {
          "headers": {
            "set_request_headers": {"x-cloud-function": "streamer"}
          },
        }
      ]
    }
  ]
};

module.exports = { config };
