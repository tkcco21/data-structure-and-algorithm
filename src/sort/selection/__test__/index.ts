import assert = require('assert')

import { equalArr, sortedArr, reverseArr, notSortedArr, negativeArr, negativeArrSorted } from '../../mock'
import { SelectionSort } from '../'

const selectionSort = new SelectionSort()

describe('選択ソート（Selection Sort）', () => {
  // もろもろの情報 ====================
  //   配列の長さ => ${length}
  //   全繰り返し時のステップ数（配列の長さ^2） => ${length * length}
  //   どんなときでもBig O => O(n^2)
  it('正の数字の逆配列をソートできているか', () => {
    assert.deepEqual(selectionSort.sort(reverseArr), sortedArr)
  })

  it('正の数字のランダム配列をソートできているか', () => {
    assert.deepEqual(selectionSort.sort(notSortedArr), sortedArr)
  })

  it('負の数字が含まれている配列をソートできているか', () => {
    assert.deepEqual(selectionSort.sort(negativeArr), negativeArrSorted)
  })

  it('同じ数字の配列をソートできているか', () => {
    assert.deepEqual(selectionSort.sort(equalArr), equalArr)
  })
})
