const {
  append,
  flip,
  forEach,
  transduce,
} = require('ramda')

const array = require('./array.js')
const timer = require('./timer.js')

const {
  startProcessing,
  stopProcessing,
} = (
  timer()
)

startProcessing()

transduce(
  forEach,
  (
    flip(
      append
    )
  ),
  [],
  array,
)

stopProcessing()
