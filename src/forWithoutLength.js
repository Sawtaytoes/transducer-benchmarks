const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => {
    let outputValue

    for (
      let index = 0
      ;index < array.length
      ;index += 1
    ) {
      outputValue = (
        Function
        .prototype()
      )
    }

    return outputValue
  },
  duplicateUp: () => {
    let outputValue = []

    for (
      let index = 0
      ;index < blocklist.length
      ;index += 1
    ) {
      const item = blocklist[index]

      if (
        item
        && (
          !(
            allowlist
            .includes(
              item
            )
          )
        )
      ) {
        outputValue
        .push(
          item,
          `*${item}*`,
        )
      }
    }

    return outputValue
  },
  filterDown: () => {
    let outputValue = []

    for (
      let index = 0
      ;index < blocklist.length
      ;index += 1
    ) {
      const item = blocklist[index]

      if (
        item
        && (
          !(
            allowlist
            .includes(
              item
            )
          )
        )
      ) {
        outputValue
        .push(
          `*${item}*`
        )
      }
    }

    return outputValue
  },
  incrementingTransform: () => {
    let outputValue = []

    for (
      let index = 0
      ;index < array.length
      ;index += 1
    ) {
      let number = (
        index
        + 2
      )

      if (
        (
          number
          % 2
        )
        === 0
      ) {
        outputValue
        .push(
          number
          * 2
        )
      }
    }

    return outputValue
  },
}

runTask(
  tasks
)

module.exports = tasks
