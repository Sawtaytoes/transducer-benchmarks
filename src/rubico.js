const {
  filter,
  flatMap,
  forEach,
  map,
  pipe,
} = require('rubico')

const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => (
    map(
      Function
      .prototype
    )(
      array,
    )
  ),
  duplicateUp: () => (
    pipe([
      filter(
        Boolean
      ),
      filter((
        item,
      ) => (
        !(
          allowlist
          .includes(
            item
          )
        )
      )),
      flatMap((
        item,
      ) => ([
        item,
        `*${item}*`,
        `*.${item}.*`,
      ])),
    ])(
      blocklist
    )
  ),
  filterDown: () => (
    pipe([
      filter(
        Boolean
      ),
      filter((
        item,
      ) => (
        !(
          allowlist
          .includes(
            item
          )
        )
      )),
      map((
        item,
      ) => (
        `*${item}*`
      )),
    ])(
      blocklist
    )
  ),
  incrementingTransform: () => (
    pipe([
      map((
        item,
        index,
      ) => (
        index
        + 2
      )),
      filter((
        number,
      ) => (
        (
          number
          % 2
        )
        === 0
      )),
      map((
        number,
      ) => (
        number
        * 2
      )),
    ])(
      array
    )
  ),
}

runTask(
  tasks
)

module.exports = tasks
