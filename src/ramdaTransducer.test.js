const basicLoopFixture = require('./basicLoopFixture.js')
const duplicateUpFixture = require('./duplicateUpFixture.js')
const filterDownFixture = require('./filterDownFixture.js')
const incrementingTransformFixture = require('./incrementingTransformFixture.js')
const ramdaTransducer = require('./ramdaTransducer.js')

describe(
  'ramdaTransducer',
  () => {
    test(
      'basicLoop',
      () => {
        expect(
          ramdaTransducer
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
          ramdaTransducer
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
          ramdaTransducer
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
          ramdaTransducer
          .incrementingTransform()
        )
        .toEqual(
          incrementingTransformFixture
        )
      },
    )
  },
)
