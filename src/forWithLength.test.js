const basicLoopFixture = require('./basicLoopFixture.js')
const duplicateUpFixture = require('./duplicateUpFixture.js')
const filterDownFixture = require('./filterDownFixture.js')
const forWithLength = require('./forWithLength.js')
const incrementingTransformFixture = require('./incrementingTransformFixture.js')

describe(
  'forWithLength',
  () => {
    test(
      'basicLoop',
      () => {
        expect(
          forWithLength
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
          forWithLength
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
          forWithLength
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
          forWithLength
          .incrementingTransform()
        )
        .toEqual(
          incrementingTransformFixture
        )
      },
    )
  },
)
