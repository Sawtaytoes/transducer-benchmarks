const addCount = require('./addCount.js')

const concatenate = () => {
  const array = []

  return (
    addCount((
      nextReducer,
    ) => (
      (
        context,
        value,
        count,
      ) => {
        array
        .push(
          value
        )

        return (
          (
            (
              typeof isComplete
              === 'undefined'
            )
            || (
              context
              .isComplete
            )
          )
          ? (
            nextReducer(
              context,
              array,
            )
          )
          : array
        )
      }
    ))
  )
}

module.exports = concatenate
