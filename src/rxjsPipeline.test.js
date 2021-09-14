const basicLoopFixture = require('./basicLoopFixture.js')
const duplicateUpFixture = require('./duplicateUpFixture.js')
const filterDownFixture = require('./filterDownFixture.js')
const incrementingTransformFixture = require('./incrementingTransformFixture.js')
const rxjsPipeline = require('./rxjsPipeline.js')

describe(
  'rxjsPipeline',
  () => {
    test(
      'basicLoop',
      () => {
        expect(
          rxjsPipeline
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
          rxjsPipeline
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
          rxjsPipeline
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
          rxjsPipeline
          .incrementingTransform()
        )
        .toEqual(
          incrementingTransformFixture
        )
      },
    )
  },
)
