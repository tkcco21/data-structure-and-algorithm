import assert = require('assert')

import { linearSearch } from '..'

describe('リニアサーチ（総あたり）', () => {
  it('全てのマッチする数値の値を調べられること', () => {
    const array = [1, 2, 4, 6, 2]

    assert.deepEqual(linearSearch(array, 10), null)
    assert.deepEqual(linearSearch(array, 1), [0])
    assert.deepEqual(linearSearch(array, 2), [1, 4])
  })

  it('全てのマッチする文字列の値を調べられること', () => {
    const array = ['a', 'b', 'a']

    assert.deepEqual(linearSearch(array, 'c'), null)
    assert.deepEqual(linearSearch(array, 'b'), [1])
    assert.deepEqual(linearSearch(array, 'a'), [0, 2])
  })
})
