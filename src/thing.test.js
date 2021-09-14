const {
  array,
} = require('./arrays.js')
const duplicateUpFixture = require('./duplicateUpFixture.js')
const filterDownFixture = require('./filterDownFixture.js')
const incrementingTransformFixture = require('./incrementingTransformFixture.js')
const thing = require('./thing.js')

describe(
  'thing',
  () => {
    test(
      'basicLoop',
      () => {
        expect(
          thing
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
          thing
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
          thing
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
          thing
          .incrementingTransform()
        )
        .toEqual(
          incrementingTransformFixture
        )
      },
    )
  },
)
