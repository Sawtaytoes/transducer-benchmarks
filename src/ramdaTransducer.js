const {
  tap,
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

// transduce(
//   tap(
//     Function
//     .prototype
//   ),
//   (
//     flip(
//       append
//     )
//   ),
//   [],
//   array,
// )
transduce(
  tap(
    Function
    .prototype
  ),
  (
    Function
    .prototype
  ),
  null,
  array,
)

stopProcessing()
