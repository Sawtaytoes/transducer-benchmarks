const basicLoopFixture = require('./basicLoopFixture.js')
const duplicateUpFixture = require('./duplicateUpFixture.js')
const filterDownFixture = require('./filterDownFixture.js')
const incrementingTransformFixture = require('./incrementingTransformFixture.js')
const kevinTransducers = require('./kevinTransducers.js')

describe(
  'kevinTransducers',
  () => {
    test(
      'basicLoop',
      () => {
        expect(
          kevinTransducers
          .basicLoop()
        )
        .toEqual(
          basicLoopFixture
        )
      },
    )

    test(
      'duplicateUp',
      () => {
        expect(
          kevinTransducers
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
          kevinTransducers
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
          kevinTransducers
          .incrementingTransform()
        )
        .toEqual(
          incrementingTransformFixture
        )
      },
    )
  },
)
