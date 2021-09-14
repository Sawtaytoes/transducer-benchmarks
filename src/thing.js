const {
  comp,
  filter,
  flatten,
  map,
  mapcat,
  mapIndexed,
  pipe,
  push,
  transduce,
} = require('@thi.ng/transducers')

const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => (
    transduce(
      map(
        Function
        .prototype
      ),
      push(),
      array,
    )
  ),
  duplicateUp: () => (
    transduce(
      comp(
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
        mapcat((
          item,
        ) => ([
          item,
          `*${item}*`,
          `*.${item}.*`,
        ])),
      ),
      push(),
      blocklist,
    )
  ),
  filterDown: () => (
    transduce(
      comp(
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
      ),
      push(),
      blocklist,
    )
  ),
  incrementingTransform: () => (
    transduce(
      comp(
        mapIndexed((
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
      ),
      push(),
      array,
    )
  ),
}

runTask(
  tasks
)

module.exports = tasks
