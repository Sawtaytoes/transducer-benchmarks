const addCount = require('./addCount.js')

const reduce = (
  (reducer, initialState) => (
    addCount(nextReducer => {
      let nextValue

      return (
        (
          {
            isComplete = true,
            ...context
          },
          value,
          count,
        ) => {
          const nextState = reducer(
            count === 0 ? initialState : context.state,
            value,
            count,
          )

          return (
            isComplete
            ? nextReducer(context, nextState)
            : nextState
          )
        }
      )
    }
  ))
)

module.exports = reduce
