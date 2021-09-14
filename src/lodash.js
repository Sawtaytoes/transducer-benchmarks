const {
  filter,
  flatten,
  forEach,
  includes,
  map,
} = require('lodash')

const {
  allowlist,
  array,
  blocklist,
} = require('./arrays.js')
const runTask = require('./runTask.js')

const tasks = {
  basicLoop: () => (
    forEach(
      array,
      (
        Function
        .prototype
      ),
    )
  ),
  duplicateUp: () => (
    flatten(
      map(
        filter(
          filter(
            blocklist,
            Boolean,
          ),
          (
            item,
          ) => (
            !(
              allowlist
              .includes(
                item
              )
            )
          ),
        ),
        (
          item,
        ) => ([
          item,
          `*${item}*`,
        ]),
      )
    )
  ),
  filterDown: () => (
    map(
      filter(
        filter(
          blocklist,
          Boolean,
        ),
        (
          item,
        ) => (
          !(
            allowlist
            .includes(
              item
            )
          )
        ),
      ),
      (
        item,
      ) => (
        `*${item}*`
      ),
    )
  ),
  incrementingTransform: () => (
    map(
      filter(
        map(
          array,
          (
            item,
            index,
          ) => (
            index
            + 2
          ),
        ),
        (
          number,
        ) => (
          (
            number
            % 2
          )
          === 0
        ),
      ),
      (
        number,
      ) => (
        number
        * 2
      ),
    )
  ),
}

runTask(
  tasks
)

module.exports = tasks
