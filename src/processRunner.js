const { fork } = require('child_process')
const os = require('os')
const {
  filter,
  ignoreElements,
  map,
  mergeAll,
  takeUntil,
  tap,
} = require('rxjs/operators')
const {
  from,
  fromEvent,
  Observable,
  Subject,
} = require('rxjs')

const controller = new AbortController()
const { signal } = controller
const child = (
  fork(
    (
      require
      .resolve(
        './for.js'
      )
    ),
    [
      '--count',
      '100000',
    ],
    {
      signal,
    },
  )
)

child
.on('message', ({
  duration,
}) => {
  console.log(duration);
  // This will be called with error being an AbortError if the controller aborts
  controller.abort() // Stops the child process
})

child
.on('error', (error) => {
  // This will be called with error being an AbortError if the controller aborts
})

