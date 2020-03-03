import assert = require('assert')

import { binarySearch } from '..'

describe('バイナリサーチ', () => {
  it('ソートされた配列から値を検索できること', () => {
    assert.equal(binarySearch([], 1), null)
    assert.equal(binarySearch([2], 1), null)
    assert.equal(binarySearch([1], 1), 0)
    assert.equal(binarySearch([1, 2], 1), 0)
    assert.equal(binarySearch([1, 2], 2), 1)
    assert.equal(binarySearch([1, 5, 10, 12], 1), 0)
    assert.equal(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 17), 5)
    assert.equal(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 1), 0)
    assert.equal(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 100), 7)
    assert.equal(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 0), null)
    assert.equal(binarySearch([1, 5, 10, 12, 13, 14, 17, 22, 100], 13), 4)
  })
})
