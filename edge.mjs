const config = {

  localDev: {
    edgioDevServer: {
      port: 3000,
      host: 'localhost',
    },
  },

  rules: {
    "TemplateFn::ListsCombined": [
      { "TemplateRef::CLI": "Rules::Application" },
      []
    ]
  }
}

export default config;
