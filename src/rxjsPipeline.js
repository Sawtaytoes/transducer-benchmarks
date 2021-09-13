const {
  from,
} = require('rxjs')
const {
  tap,
} = require('rxjs/operators')

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
.pipe(
  tap(
    Function
    .prototype
  )
)
.subscribe()

stopProcessing()
