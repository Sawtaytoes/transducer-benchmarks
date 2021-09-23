const reduce = require('./reduce.js')

const concatenate = () => (
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

module.exports = concatenate
