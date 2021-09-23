const addCount = (
  transducer => (
    (nextReducer, count = 0) => (
      transducer((context, value) => (
        nextReducer(context, value, count++)
      ))
    )
  )
)

module.exports = addCount
