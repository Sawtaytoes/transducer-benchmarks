const yargs = require('yargs')

const allowlist = require('./allowlist.json')
const blocklist = require('./blocklist.json')

const {
  count,
  taskName,
} = (
  yargs
  .argv
)

module.exports = {
  allowlist,
  array: (
    Array(
      count
    )
    .fill()
  ),
  blocklist: (
    blocklist
    .concat(
      blocklist,
      blocklist,
      blocklist,
      blocklist,
      blocklist,
      blocklist,
      blocklist,
      blocklist,
      blocklist,
      blocklist,
      blocklist,
    )
    .slice(
      0,
      count,
    )
  ),
}
