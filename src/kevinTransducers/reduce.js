const addCount = require('./addCount.js')

const reduce = (
  reducer,
  initialState,
) => (
  addCount((
    nextReducer,
  ) => (
    (
      context,
      value,
      count,
    ) => {
      const nextState = (
        reducer(
          (
            (
              count
              === 0
            )
            ? initialState
            : (
              context
              .state
            )
          ),
          value,
          count,
        )
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
            nextState,
          )
        )
        : nextState
      )
    }
  ))
)

module.exports = reduce
