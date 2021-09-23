const reduce = require('./reduce.js')

const summate = () => (
  reduce(
    (state, value) => (
      state + value
    ),
    0,
  )
)

module.exports = summate
