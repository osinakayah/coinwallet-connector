
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./coinwallet-connector.cjs.production.min.js')
} else {
  module.exports = require('./coinwallet-connector.cjs.development.js')
}
