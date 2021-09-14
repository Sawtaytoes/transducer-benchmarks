const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const taskName = require('./taskName.js')
const timer = require('./timer.js')

const tasks = {
  basicLoop: () => {
    array
    .forEach(
      Function
      .prototype
    )
  },
  duplicateUp: () => {
    blocklist
    .filter(
      Boolean
    )
    .filter((
      item,
    ) => (
      !(
        allowlist
        .includes(
          item
        )
      )
    ))
    .map((
      item,
    ) => ([
      item,
      `*${item}*`,
    ]))
    .flat()
  },
  filterDown: () => {
    blocklist
    .filter(
      Boolean
    )
    .filter((
      item,
    ) => (
      !(
        allowlist
        .includes(
          item
        )
      )
    ))
    .map((
      item,
    ) => (
      `*${item}*`
    ))
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
