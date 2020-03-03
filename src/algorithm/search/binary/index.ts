export const binarySearch = (array: any[], seekElement: any): number | null => {
  let startIndex = 0
  let endIndex = array.length - 1

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

    if (array[middleIndex] === seekElement) {
      return middleIndex
    }

    if (array[middleIndex] < seekElement) {
      startIndex = middleIndex + 1
    } else {
      endIndex = middleIndex - 1
    }
  }

  return null
}
