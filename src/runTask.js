const taskName = require('./taskName.js')
const timer = require('./timer.js')

const {
  startProcessing,
  stopProcessing,
} = (
  timer()
)

const runTask = (
  tasks,
) => {
  if (taskName) {
    startProcessing()

    tasks
    [taskName]()

    stopProcessing()
  }
}

module.exports = runTask
