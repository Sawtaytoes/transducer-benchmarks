const {
  addIndex,
  append,
  filter,
  flatten,
  forEach,
  map,
  pipe,
} = require('ramda')

const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => (
    forEach(
      (
        Function
        .prototype
      ),
    )(
      array,
    )
  ),
  duplicateUp: () => (
    pipe(
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
      ) => ([
        item,
        `*${item}*`,
      ])),
      flatten(),
    )(
      blocklist
    )
  ),
  filterDown: () => (
    pipe(
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
    )(
      blocklist
    )
  ),
  incrementingTransform: () => (
    pipe(
      addIndex(
        map
      )((
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
    )(
      array
    )
  ),
}

runTask(
  tasks
)

module.exports = tasks
