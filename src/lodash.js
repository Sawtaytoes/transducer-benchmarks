const {
  forEach,
} = require('lodash')

const array = require('./array.js')
const timer = require('./timer.js')

const {
  startProcessing,
  stopProcessing,
} = (
  timer()
)

startProcessing()

forEach(
  array,
  (
    Function
    .prototype
  ),
)

stopProcessing()
