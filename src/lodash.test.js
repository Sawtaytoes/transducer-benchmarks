const {
  array,
} = require('./arrays.js')
const duplicateUpFixture = require('./duplicateUpFixture.js')
const filterDownFixture = require('./filterDownFixture.js')
const incrementingTransformFixture = require('./incrementingTransformFixture.js')
const lodash = require('./lodash.js')

describe(
  'lodash',
  () => {
    test(
      'basicLoop',
      () => {
        expect(
          lodash
          .basicLoop()
        )
        .toEqual(
          array
        )
      },
    )

    test(
      'duplicateUp',
      () => {
        expect(
          lodash
          .duplicateUp()
        )
        .toEqual(
          duplicateUpFixture
        )
      },
    )

    test(
      'filterDown',
      () => {
        expect(
          lodash
          .filterDown()
        )
        .toEqual(
          filterDownFixture
        )
      },
    )

    test(
      'incrementingTransform',
      () => {
        expect(
          lodash
          .incrementingTransform()
        )
        .toEqual(
          incrementingTransformFixture
        )
      },
    )
  },
)
