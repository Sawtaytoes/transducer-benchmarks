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

logSectionBreak()

from([
  'for',
  'forEach',
  'lodash',
  'ramdaFunctional',
  'ramdaTransducer',
  'rxjs',
])
.pipe(
  concatMap((
    type,
  ) => (
    createChildProcessObservable({
      count: 10000,
      type,
    })
    .pipe(
      map(({
        duration,
      }) => ({
        duration,
        type,
      })),
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
.subscribe()
