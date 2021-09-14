const {
  array,
} = require('./arrays.js')
const duplicateUpFixture = require('./duplicateUpFixture.js')
const filterDownFixture = require('./filterDownFixture.js')
const incrementingTransformFixture = require('./incrementingTransformFixture.js')
const rubico = require('./rubico.js')

describe(
  'rubico',
  () => {
    test(
      'basicLoop',
      () => {
        expect(
          rubico
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
          rubico
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
          rubico
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
          rubico
          .incrementingTransform()
        )
        .toEqual(
          incrementingTransformFixture
        )
      },
    )
  },
)
