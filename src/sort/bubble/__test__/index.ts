import assert = require('assert')

import { BubbleSort } from '../'

const unsortedArray = [2, 3, 3, 4, 5, 13, 2, 37, 8, 8, 21, 1, 0, 15, 11, 50]
const sortedArray = [0, 1, 2, 2, 3, 3, 4, 5, 8, 8, 11, 13, 15, 21, 37, 50]

const bubbleSort = new BubbleSort()

describe('バブルソート（Bubble Sort）', () => {
  it('Number型が入っている配列のソートができているか', () => {
    // もろもろの情報 ====================
    //   配列の長さ => ${length}
    //   全繰り返し時のステップ数（配列の長さ^2） => ${length * length}
    //   最低でBig O => O(n^2)
    //   最高でBig O => O(n)
    assert.deepEqual(sortedArray, bubbleSort.sort(unsortedArray))
  })
})
