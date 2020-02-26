import { Target, Sort } from '../'

export class BubbleSort extends Sort {
  sort(target: Target): Target {
    const array = [...target]
    const length = array.length
    let flg = false

    for (let i = 0; i < length; i += 1) {
      flg = false
      for (let j = 0; j < length; j += 1) {
        // 隣り合う値を比較して、インデックス番号が大きいほうの値が小さかったら、比較したもの同士を入れ替える
        if (array[j] > array[j + 1]) {
          ;[array[j], array[j + 1]] = [array[j + 1], array[j]]

          flg = true
        }
      }

      // ネストされはfor文で入れ替えが発生しない場合はもう入れ替える値が存在しない。
      // flg = falseのときがそうなので、その時点で配列をreturn
      if (!flg) {
        return array
      }
    }
    return array
  }
}
