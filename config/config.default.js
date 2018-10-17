'use strict'

module.exports = appInfo => {
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539358248841_436'

  // add your config here
  config.middleware = []

  // ! cors for dev
  config.security = {
    domainWhiteList: ['*'],
    methodnoallow: {
      enable: false,
    },
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
      ignoreJSON: false,
    }
  }
  config.cors = {
    credentials: true
  }

  return config
}
