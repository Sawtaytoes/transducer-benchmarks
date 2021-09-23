const concatenate = require('./concatenate.js')
const filter = require('./filter.js')
const map = require('./map.js')
const separate = require('./separate.js')
const summate = require('./summate.js')
const tap = require('./tap.js')
const transduce = require('./transduce.js')

describe(
  'transduce',
  () => {
    test(
      'pass through number',
      () => {
        expect(
          transduce()(
            1
          )
        )
        .toEqual(
          1
        )
      },
    )

    test(
      'pass through array',
      () => {
        expect(
          transduce()(
            [3, 4, 5, 6]
          )
        )
        .toEqual(
          [3, 4, 5, 6]
        )
      },
    )

    test(
      'maps single item',
      () => {
        expect(
          transduce(
            map((item) => (item + 1)),
          )(
            3
          )
        )
        .toEqual(
          4
        )
      },
    )

    test(
      'filters single item',
      () => {
        expect(
          transduce(
            filter(Boolean),
          )(
            true
          )
        )
        .toEqual(
          true
        )
      },
    )

    test(
      'filters out single item',
      () => {
        expect(
          transduce(
            filter(Boolean),
          )(
            false
          )
        )
        .toEqual(
          undefined
        )
      },
    )

    test(
      'taps an item',
      () => {
        const mockFunction = (
          jest
          .fn()
        )

        transduce(
          tap(mockFunction),
        )(
          'example'
        )

        expect(
          mockFunction
        )
        .toHaveBeenCalledWith(
          'example',
          undefined,
        )
      },
    )

    test(
      'separate and summate array',
      () => {
        expect(
          transduce(
            separate(),
            summate(),
          )(
            [3, 4, 5, 6]
          )
        )
        .toEqual(
          18
        )
      },
    )

    test(
      'separate and concatenate array',
      () => {
        expect(
          transduce(
            separate(),
            concatenate(),
          )(
            [3, 4, 5, 6]
          )
        )
        .toEqual(
          [3, 4, 5, 6]
        )
      },
    )

    test(
      'add one to each array item',
      () => {
        expect(
          transduce(
            separate(),
            map((item) => (item + 1)),
            concatenate(),
          )(
            [3, 4, 5, 6]
          )
        )
        .toEqual(
          [4, 5, 6, 7]
        )
      },
    )

    test(
      'filters out invalid items',
      () => {
        expect(
          transduce(
            separate(),
            filter(Boolean),
            concatenate(),
          )(
            [true, false, true, false]
          )
        )
        .toEqual(
          [true, true]
        )
      },
    )

    test(
      'handles multiple transducers',
      () => {
        expect(
          transduce(
            separate(),
            map((item, index) => index),
            filter(Boolean),
            concatenate(),
          )(
            Array(4)
            .fill()
          )
        )
        .toEqual(
          [1, 2, 3]
        )
      },
    )
  },
)
