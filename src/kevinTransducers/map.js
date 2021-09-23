const map = (
  transform => (
    nextReducer => (
      (state, value, count) => {
        const nextValue = transform(value, count)
        return nextReducer(state, nextValue, count)
      }
    )
  )
)

module.exports = map
