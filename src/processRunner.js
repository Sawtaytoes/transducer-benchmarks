const {
  from,
  of,
} = require('rxjs')
const {
  concatMap,
  map,
  repeat,
  tap,
  toArray,
} = require('rxjs/operators')

const createChildProcessObservable = require('./createChildProcessObservable.js')
const logSectionBreak = require('./logSectionBreak.js')

const counts = [
  0,
  1,
  10,
  100,
  1000,
  5000,
  10000,
  100000,
  1000000,
  10000000,
]

const functionTypes = [
  'forEach',
  'forWithLength',
  'forWithoutLength',
  'lodash',
  'ramdaFunctional',
  'ramdaTransducer',
  'rxjs',
]

logSectionBreak()

from(
  counts
)
.pipe(
  concatMap((
    count,
  ) => (
    from(
      functionTypes
    )
    .pipe(
      concatMap((
        type,
      ) => (
        createChildProcessObservable({
          count,
          type,
        })
        .pipe(
          map(({
            duration,
          }) => ({
            count,
            duration,
            type,
          })),
          // tap((
          //   data,
          // ) => {
          //   console
          //   .info(
          //     JSON
          //     .stringify(
          //       data,
          //       null,
          //       2,
          //     )
          //   )
          // }),
          tap(
            console
            .info
          ),
          repeat(
            3
          ),
          toArray(),
          tap(
            logSectionBreak
          ),
        )
      )),
    )
  )),
)
.subscribe()
