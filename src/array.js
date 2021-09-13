const yargs = require('yargs')

const array = (
  Array(
    yargs
    .argv
    .count
  )
  .fill()
)

module.exports = array
