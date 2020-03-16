type ReturnType = number[] | null

export const linearSearch = (array: any[], seekElement: any): ReturnType => {
  const indexArray: ReturnType = []
  array.forEach((value: any, index: number): void => {
    if (seekElement === value) indexArray.push(index)
  })
  return indexArray.length ? indexArray : null
}
