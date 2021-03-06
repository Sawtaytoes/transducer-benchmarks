const {
  fork,
} = require('child_process')
const {
  Observable,
} = require('rxjs')

const createChildProcessObservable = ({
  count,
  filename,
  taskName,
}) => (
  Observable
  .create((
    observer,
  ) => {
    const controller = new AbortController()

    const { signal } = controller

    const child = (
      fork(
        (
          require
          .resolve(
            `./${filename}.js`
          )
        ),
        [
          '--count',
          count,
          '--taskName',
          taskName,
        ],
        {
          signal,
        },
      )
    )

    child
    .on(
      'message',
      (
        message,
      ) => {
        observer
        .next(
          message
        )

        observer
        .complete()
      }
    )

    child
    .on(
      'error',
      (
        error,
      ) => {
        observer
        .error(
          error
        )
      }
    )

    setTimeout(
      () => {
        controller
        .abort()
      },
      1000,
    )
  })
)

module.exports = createChildProcessObservable
