const {
  addIndex,
  append,
  compose,
  filter,
  flip,
  forEach,
  includes,
  map,
  tap,
  transduce,
  unnest,
} = require('ramda')

const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => (
    transduce(
      tap(
        Function
        .prototype
      )
    )(
      (
        Function
        .prototype
      ),
      null,
      array,
    )
  ),
  duplicateUp: () => (
    transduce(
      compose(
        filter(
          Boolean
        ),
        filter((
          item,
        ) => (
          !(
            includes(
              item
            )(
              allowlist
            )
          )
        )),
        map((
          item,
        ) => ([
          item,
          `*${item}*`,
          `*.${item}.*`,
        ])),
        unnest(),
      )
    )(
      (
        flip(
          append
        )
      ),
      [],
      blocklist,
    )
  ),
  filterDown: () => (
    transduce(
      compose(
        filter(
          Boolean
        ),
        filter((
          item,
        ) => (
          !(
            includes(
              item
            )(
              allowlist
            )
          )
        )),
        map((
          item,
        ) => (
          `*${item}*`
        )),
      )
    )(
      (
        flip(
          append
        )
      ),
      [],
      blocklist,
    )
  ),
  incrementingTransform: () => (
    transduce(
      compose(
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
      )
    )(
      (
        flip(
          append
        )
      ),
      [],
      array,
    )
  ),
}

runTask(
  tasks
)

module.exports = tasks
