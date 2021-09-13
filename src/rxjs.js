const {
  from,
} = require('rxjs')

const array = require('./array.js')
const timer = require('./timer.js')

const {
  startProcessing,
  stopProcessing,
} = (
  timer()
)

startProcessing()

from(
  array
)
.subscribe()

stopProcessing()
