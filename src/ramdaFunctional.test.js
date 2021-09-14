const {
  array,
} = require('./arrays.js')
const duplicateUpFixture = require('./duplicateUpFixture.js')
const filterDownFixture = require('./filterDownFixture.js')
const incrementingTransformFixture = require('./incrementingTransformFixture.js')
const ramdaFunctional = require('./ramdaFunctional.js')

describe(
  'ramdaFunctional',
  () => {
    test(
      'basicLoop',
      () => {
        expect(
          ramdaFunctional
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
          ramdaFunctional
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
          ramdaFunctional
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
          ramdaFunctional
          .incrementingTransform()
        )
        .toEqual(
          incrementingTransformFixture
        )
      },
    )
  },
)
