const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiUrl: 'http://localhost:8000/',
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'http://localhost:8000/',
  },
}

module.exports = merge(config.all, config[config.all.env])
