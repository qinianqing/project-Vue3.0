const config = require('./config/config_local.json')
module.exports = {
    devServer: {
        port: config.port,
        proxy: {
          [process.env.VUE_APP_BASE_API]: {
            target: `http://${config.host}:${port}`
          }
        }
      },
}