const {
  from,
} = require('rxjs')
const {
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
const taskName = require('./taskName.js')
const timer = require('./timer.js')

const tasks = {
  basicLoop: () => {
    from(
      array
    )
    .pipe(
      tap(
        Function
        .prototype
      )
    )
    .subscribe()
  },
  duplicateUp: () => {
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
      toArray(),
    )
  },
  filterDown: () => {
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
