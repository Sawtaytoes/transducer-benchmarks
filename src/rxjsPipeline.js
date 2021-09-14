const {
  from,
} = require('rxjs')
const {
  concatAll,
  filter,
  map,
  tap,
  toArray,
} = require('rxjs/operators')

const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const executeRxjs = require('./executeRxjs.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => (
    executeRxjs(
      from(
        array
      )
      .pipe(
        tap(
          Function
          .prototype
        )
      )
    )
  ),
  duplicateUp: () => (
    executeRxjs(
      from(
        blocklist
      )
      .pipe(
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
        concatAll(),
        toArray(),
      )
    )
  ),
  filterDown: () => (
    executeRxjs(
      from(
        blocklist
      )
      .pipe(
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
        toArray(),
      )
    )
  ),
  incrementingTransform: () => (
    executeRxjs(
      from(
        array
      )
      .pipe(
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
        toArray(),
      )
    )
  ),
}

runTask(
  tasks
)

module.exports = tasks
