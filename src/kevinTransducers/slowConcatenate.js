const reduce = require('./reduce.js')

const slowConcatenate = () => (
  reduce(
    (
      state,
      value,
    ) => (
      state
      .concat(
        value
      )
    ),
    [],
  )
)

module.exports = slowConcatenate
