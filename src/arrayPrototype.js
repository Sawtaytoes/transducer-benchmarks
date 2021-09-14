const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => (
    array
    .forEach(
      Function
      .prototype
    )
  ),
  duplicateUp: () => (
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
    .flatMap((
      item,
    ) => ([
      item,
      `*${item}*`,
      `*.${item}.*`,
    ]))
  ),
  filterDown: () => (
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
  ),
  incrementingTransform: () => (
    array
    .map((
      item,
      index,
    ) => (
      index
      + 2
    ))
    .filter((
      number,
    ) => (
      (
        number
        % 2
      )
      === 0
    ))
    .map((
      number,
    ) => (
      number
      * 2
    ))
  ),
}

runTask(
  tasks
)

module.exports = tasks
