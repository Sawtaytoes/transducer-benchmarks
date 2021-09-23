const map = (
  transform,
) => (
  nextReducer,
) => (
  state,
  value,
  count,
) => (
  nextReducer(
    state,
    transform(
      value,
      count,
    ),
    count,
  )
)

module.exports = map
