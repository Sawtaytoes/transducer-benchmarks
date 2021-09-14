const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => (
    for (
      let index = 0
      ;index < array.length
      ;index += 1
    ) {
      Function
      .prototype()
    }
  ),
  filterDown: () => (
    for (
      let index = 0
      ;index < array.length
      ;index += 1
    ) {
      Function
      .prototype()
    }
  ),
}

runTask(
  tasks
)

module.exports = tasks
