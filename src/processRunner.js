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

const loopTypes = [
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
  loopTypes
)
.pipe(
  concatMap((
    loopType,
  ) => (
    from(
      counts
    )
    .pipe(
      concatMap((
        count,
      ) => (
        createChildProcessObservable({
          count,
          filename: loopType,
        })
        .pipe(
          map(({
            duration,
          }) => ({
            count,
            duration,
            loopType,
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
