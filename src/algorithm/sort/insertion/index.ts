import { Target, Sort } from '../'

export class InsertionSort extends Sort {
  sort(target: Target): Target {
    const array = [...target]
    const length = array.length

    // NOTE: 0番目は何も処理はしないので、初期値は0
    for (let i = 1; i < length; i += 1) {
      // NOTE: 初期値はj=i。囲っているfor文のiが基準にするため
      // そこから0番目に向かって、隣り合うもの（jとj-1）の比較をしつつfor文を回す
      for (let j = i; j >= 0; j -= 1) {
        if (array[j - 1] > array[j]) {
          ;[array[j - 1], array[j]] = [array[j], array[j - 1]]
        }
      }
    }

    return array
  }
}

// N = 10の場合
// 10-9, 10-8, 10-7, 10-6, 10-5, 10-4, 10-3, 10-2, 10-1
// 10-1, 10-2, 10-3, 10-4, 10-5, 10-6, 10-7, 10-8, 10-9
// (20-10)*9/2 = 45

// Nをデータの個数とすると下記の和が総回数
// N-1, N-2, N-3 ... 1
// ((2N-N)*(N-1))/2
// (N^2-N)/2
