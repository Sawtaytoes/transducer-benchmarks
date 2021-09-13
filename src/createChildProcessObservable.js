const {
  fork,
} = require('child_process')
const {
  Observable,
} = require('rxjs')

const createChildProcessObservable = ({
  count,
  filename,
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
  })
)

module.exports = createChildProcessObservable
