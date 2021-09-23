const concatenate = require('./kevinTransducers/concatenate.js')
const filter = require('./kevinTransducers/filter.js')
const flatConcatenate = require('./kevinTransducers/flatConcatenate.js')
const map = require('./kevinTransducers/map.js')
const separate = require('./kevinTransducers/separate.js')
const tap = require('./kevinTransducers/tap.js')
const transduce = require('./kevinTransducers/transduce.js')

const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => (
    transduce(
      separate(),
    )(
      array
    )
  ),
  duplicateUp: () => (
    transduce(
      separate(),
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
        `*.${item}.*`,
      ])),
      flatConcatenate(),
    )(
      blocklist
    )
  ),
  filterDown: () => (
    transduce(
      separate(),
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
      concatenate(),
    )(
      blocklist
    )
  ),
  incrementingTransform: () => (
    transduce(
      separate(),
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
      concatenate(),
    )(
      array
    )
  ),
}

runTask(
  tasks
)

module.exports = tasks
