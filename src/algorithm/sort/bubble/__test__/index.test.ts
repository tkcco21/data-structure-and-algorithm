import assert = require('assert')

import { equalArr, sortedArr, reverseArr, notSortedArr, negativeArr, negativeArrSorted } from '../../mock'
import { BubbleSort } from '..'

const bubbleSort = new BubbleSort()

describe('バブルソート（Bubble Sort）', () => {
  // もろもろの情報 ====================
  //   配列の長さ => ${length}
  //   全繰り返し時のステップ数（配列の長さ^2） => ${length * length}
  //   最低でBig O => O(n^2)
  //   最高でBig O => O(n)
  it('正の数字の逆配列をソートできていること', () => {
    assert.deepEqual(bubbleSort.sort(reverseArr), sortedArr)
  })

  it('正の数字のランダム配列をソートできていること', () => {
    assert.deepEqual(bubbleSort.sort(notSortedArr), sortedArr)
  })

  it('負の数字が含まれている配列をソートできていること', () => {
    assert.deepEqual(bubbleSort.sort(negativeArr), negativeArrSorted)
  })

  it('同じ数字の配列をソートできていること', () => {
    assert.deepEqual(bubbleSort.sort(equalArr), equalArr)
  })
})
