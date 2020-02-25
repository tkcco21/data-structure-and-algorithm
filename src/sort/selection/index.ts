import { Target, Sort } from '../'

export class SelectionSort extends Sort {
  sort(target: Target): Target {
    const array = [...target]
    const length = target.length
    let minIndex = 0 // そのときの最小値が入っているインデックス番号を入れておく変数

    // NOTE: 条件式は (i < length - 1) にする。最後の一回は値が決まっているため
    for (let i = 0; i < length - 1; i += 1) {
      // 基準となるインデックス番号の代入
      minIndex = i

      // NOTE: 初期値は (j = i + 1)。これまでの処理でi番目までの値は確定しているため
      for (let j = i + 1; j < length; j += 1) {
        // 基準となるインデックス番号の値よりj番目の値のほうが小さかったら最小値が入っている変数の更新
        if (array[minIndex] > array[j]) {
          minIndex = j
        }
      }

      if (minIndex !== i) {
        ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
      }
    }

    return array
  }
}

// N = 10の場合
// 10-1, 10-2, 10-3, 10-4, 10-5, 10-6, 10-7, 10-8, 10-9
// 10-9, 10-8, 10-7, 10-6, 10-5, 10-4, 10-3, 10-2, 10-1
// (20-10)*9/2 = 45

// Nをデータの個数とすると下記の和が総回数
// N-1, N-2, N-3 ... 1
// ((2N-N)*(N-1))/2
// (N^2-N)/2
