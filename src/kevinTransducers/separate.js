const addCount = require('./addCount.js')

const separate = () => (
  addCount((
    nextReducer,
  ) => (
    context,
    array,
  ) => (
    array
    .reduce(
      (
        state,
        item,
        index,
      ) => (
        nextReducer(
          {
            ...context,
            isComplete: (
              (
                typeof (
                  context
                  .isComplete
                )
                === 'undefined'
              )
              || (
                context
                .isComplete
              )
              && (
                index
                === (
                  (
                    array
                    .length
                  ) - 1
                )
              )
            ),
            state,
          },
          item,
        )
      ),
      (
        context
        .state
      ),
    )
  ))
)

module.exports = separate
