// callback関数の型。引数vは、value, next同様にあらゆる値が入ってくる想定なのでany型
export type ToStringCallback = (v: any) => string
export type ToString = ToStringCallback | string

export interface ILinkedListNode {
  // head, tailともにあらゆる値が入ってくる想定なのでany型
  value: any
  next: any
  toString: (callback?: ToStringCallback) => ToString
}

export class LinkedListNode implements ILinkedListNode {
  // value, nextともにあらゆる値が入ってくる想定なのでany型
  public value: any
  public next: any

  // 上記同様の理由でany型
  constructor(value: any, next: any = null) {
    this.value = value
    this.next = next
  }

  // callback関数を返す or string型の値を返す
  public toString(callback?: ToStringCallback): ToString {
    return callback ? callback(this.value) : `${this.value}`
  }
}
