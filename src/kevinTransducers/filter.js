const addCount = require('./addCount.js')

const filter = (
  predicate => (
    addCount(nextReducer => (
      (context, value, count) => (
        predicate(value, count)
        ? nextReducer(context, value)
        : context.state
      )
    ))
  )
)

module.exports = filter
