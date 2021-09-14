const executeRxjs = (
  observable,
) => {
  let outputValue

  observable
  // .pipe(
  //   tap((
  //     value,
  //   ) => {
  //     outputValue = value
  //   }),
  // )
  .subscribe((
    value,
  ) => {
    outputValue = value
  })

  return outputValue
}

module.exports = executeRxjs
