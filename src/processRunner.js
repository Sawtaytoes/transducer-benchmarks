const {
  writeFile,
} = require('fs/promises')
const {
  bindNodeCallback,
  from,
  of,
} = require('rxjs')
const {
  catchError,
  concatMap,
  map,
  pluck,
  repeat,
  tap,
  toArray,
} = require('rxjs/operators')

const createChildProcessObservable = require('./createChildProcessObservable.js')
const logSectionBreak = require('./logSectionBreak.js')
const loopTypes = require('./loopTypes.js')
const tasks = require('./tasks.js')

const numberOfIterations = 10

logSectionBreak()

from(
  loopTypes
)
.pipe(
  concatMap((
    loopType,
  ) => (
    from(
      tasks
    )
    .pipe(
      concatMap(({
        count,
        taskName,
      }) => (
        createChildProcessObservable({
          count,
          filename: loopType,
          taskName,
        })
        .pipe(
          repeat(
            numberOfIterations
          ),
          pluck(
            'duration'
          ),
          toArray(),
          catchError(() => (
            of(
              null
            )
          )),
          map((
            stats,
          ) => ({
            count,
            loopType,
            medianAverage: (
              stats
              ? (
                stats
                .filter(
                  Boolean
                )
                .slice()
                .sort()
                .at(
                  Math
                  .floor(
                    numberOfIterations / 2
                  )
                )
              )
              : null
            ),
            taskName,
          })),
          tap(
            console
            .info
          ),
          tap(
            logSectionBreak
          ),
        )
      )),
      toArray(),
    )
  )),
  toArray(),
  concatMap((
    data,
  ) => (
    writeFile(
      './stats.json',
      (
        JSON
        .stringify(
          data,
          null,
          2,
        )
      ),
      {
        encoding: 'utf-8',
      },
    )
  )),
)
.subscribe()
