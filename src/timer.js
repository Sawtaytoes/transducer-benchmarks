const timer = () => {
  let timeBefore
  let timeAfter

  const startProcessing = () => {
    timeBefore = performance.now()
  }

  const stopProcessing = () => {
    timeAfter = performance.now()

    process
    .send({
      duration: (
        timeAfter
        - timeBefore
      ),
      type: 'done',
    })
  }

  return {
    startProcessing,
    stopProcessing,
  }
}

module.exports = timer
