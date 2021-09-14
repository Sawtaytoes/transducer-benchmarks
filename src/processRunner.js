const {
  writeFile,
} = require('fs/promises')
const {
  bindNodeCallback,
  from,
  of,
} = require('rxjs')
const {
  concatMap,
  map,
  pluck,
  repeat,
  tap,
  toArray,
} = require('rxjs/operators')
const yargs = require('yargs')

const createChildProcessObservable = require('./createChildProcessObservable.js')
const logSectionBreak = require('./logSectionBreak.js')

const loopTypes = [
  'arrayPrototype',
  'forWithLength',
  // 'forWithoutLength',
  'lodash',
  'ramdaFunctional',
  'ramdaTransducer',
  'rxjsPipeline',
  // 'rxjsSubscriber',
]

const tasks = [
  // {
  //   count: 0,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 1,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 10,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 100,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 1000,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 5000,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 10000,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 100000,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 1000000,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 10000000,
  //   taskName: 'basicLoop',
  // },
  // {
  //   count: 10,
  //   taskName: 'duplicateUp',
  // },
  // {
  //   count: 100,
  //   taskName: 'duplicateUp',
  // },
  // {
  //   count: Infinity,
  //   taskName: 'duplicateUp',
  // },
  // {
  //   count: 10,
  //   taskName: 'filterDown',
  // },
  // {
  //   count: 100,
  //   taskName: 'filterDown',
  // },
  // {
  //   count: Infinity,
  //   taskName: 'filterDown',
  // },
  {
    count: 10,
    taskName: 'incrementingTransform',
  },
  // {
  //   count: 100,
  //   taskName: 'incrementingTransform',
  // },
  // {
  //   count: Infinity,
  //   taskName: 'incrementingTransform',
  // },
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
          // repeat(
          //   3
          // ),
          pluck(
            'duration'
          ),
          toArray(),
          map((
            stats,
          ) => ({
            count,
            loopType,
            stats,
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
