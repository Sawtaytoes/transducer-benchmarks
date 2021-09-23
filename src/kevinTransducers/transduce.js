const transduce = (
  ...transducers
) => (
  item,
) => (
  (
    transducers
    || []
  )
  .reduceRight(
    (
      reducer,
      transducer,
    ) => (
      transducer(
        reducer
      )
    ),
    (
      state,
      value,
    ) => (
      value
    ),
  )(
    {},
    item,
  )
)

module.exports = transduce
