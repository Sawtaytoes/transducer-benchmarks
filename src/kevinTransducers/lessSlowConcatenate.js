const reduce = require('./reduce.js')

const lessSlowConcatenate = () => (
  reduce(
    (
      state,
      value,
    ) => {
      state
      .push(
        value
      )

      return state
    },
    [],
  )
)

module.exports = lessSlowConcatenate
