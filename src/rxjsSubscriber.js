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
const taskName = require('./taskName.js')
const timer = require('./timer.js')

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

const {
  startProcessing,
  stopProcessing,
} = (
  timer()
)

startProcessing()

tasks
[taskName]()

stopProcessing()
