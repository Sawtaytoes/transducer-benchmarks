const arrayPrototype = require('./arrayPrototype.js')
const basicLoopFixture = require('./basicLoopFixture.js')
const duplicateUpFixture = require('./duplicateUpFixture.js')
const filterDownFixture = require('./filterDownFixture.js')
const incrementingTransformFixture = require('./incrementingTransformFixture.js')

describe(
  'arrayPrototype',
  () => {
    test(
      'basicLoop',
      () => {
        expect(
          arrayPrototype
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
          arrayPrototype
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
          arrayPrototype
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
          arrayPrototype
          .incrementingTransform()
        )
        .toEqual(
          incrementingTransformFixture
        )
      },
    )
  },
)
