const tap = (
  (callback = Function.prototype) => (
    nextReducer => (
      (context, value, count) => {
        callback(value, count)
        return nextReducer(context, value)
      }
    )
  )
)

module.exports = tap
