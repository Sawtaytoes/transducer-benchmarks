const addCount = require('./addCount.js')

const flatConcatenate = () => {
  const array = []

  return (
    addCount((
      nextReducer,
    ) => (
      (
        context,
        values,
        count,
      ) => {
        array
        .push(
          ...values
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

module.exports = flatConcatenate
