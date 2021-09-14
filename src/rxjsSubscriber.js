const {
  from,
} = require('rxjs')
const {
  tap,
} = require('rxjs/operators')

const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => {
    from(
      array
    )
    .subscribe(
      Function
      .prototype
    )
  },
}

runTask(
  tasks
)

module.exports = tasks
