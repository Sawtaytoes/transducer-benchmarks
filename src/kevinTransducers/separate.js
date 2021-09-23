const addCount = require('./addCount.js')

const separate = () => (
  addCount(nextReducer => (
    (
      {
        isComplete = true,
        ...context
      },
      array,
      count,
    ) => (
      array.reduce(
        (state, item, index) => (
          nextReducer(
            {
              ...context,
              isComplete: (
                isComplete
                && index === array.length - 1
              ),
              state,
            },
            item,
          )
        ),
        context.state,
      )
    )
  ))
)

module.exports = separate
