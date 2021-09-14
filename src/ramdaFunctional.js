const {
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
const taskName = require('./taskName.js')
const timer = require('./timer.js')

const tasks = {
  basicLoop: () => {
    forEach(
      (
        Function
        .prototype
      ),
    )(
      array,
    )
  },
  duplicateUp: () => {
    return pipe(
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
  },
  filterDown: () => {
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
  },
}

const {
  startProcessing,
  stopProcessing,
} = (
  timer()
)

startProcessing()

console.log(
  tasks
  [taskName]()
)

stopProcessing()
