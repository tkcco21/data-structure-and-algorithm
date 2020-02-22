import { Target, Sort } from '../'

export class BubbleSort extends Sort {
  sort(target: Target): Target {
    const array = [...target]
    const length = array.length
    let flg = false

    for (let i = 0; i < length; i += 1) {
      flg = false
      for (let j = 0; j < length; j += 1) {
        if (array[j] > array[j + 1]) {
          ;[array[j], array[j + 1]] = [array[j + 1], array[j]]

          flg = true
        }
        // if (array[j + 1] == undefined) {
        //   console.log(j)
        // }
      }

      if (!flg) {
        return array
      }
    }
    return array
  }
}
