var ghost = require('ghost')
var express = require('express')
var urlService = require('./node_modules/ghost/core/frontend/services/url')
var parentApp = express()
const { Timber } = require('@timberio/node')
var LogRocket = require('logrocket')

require('dotenv').config()

/**
 * Logrocket instance
 */
LogRocket.init('jekkcv/phillipchan-ghost')

/**
 * Timber instance
 */
const logger = new Timber(process.env.TIMBER_API_KEY, '35946')

// Run a single Ghost process
ghost()
  .then(function (ghostServer) {
    // for making subdir work
    parentApp.use(urlService.utils.getSubdir(), ghostServer.rootApp)
    ghostServer.start(parentApp)
  })
  .catch((error) => {
    console.error(`Ghost server error: ${error.message} ${error.stack}`)
    process.exit(1)
  })
