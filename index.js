#!/usr/bin/env node
'use strict'

// Placeholder release. Shipyard reserves this package name while the real
// engine is in development. See https://useshipyard.io
const MESSAGE = 'useshipyard — coming soon. https://useshipyard.io'

function comingSoon() {
  return MESSAGE
}

// When run directly (e.g. `npx useshipyard-js`), print the notice.
if (require.main === module) {
  console.log(MESSAGE)
}

module.exports = { comingSoon }
