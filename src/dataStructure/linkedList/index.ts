import { ILinkedListNode, LinkedListNode } from './linkedListNode'

type FindParams = {
  value: any
  callback?: (v: any) => any
}

interface ILinkedList {
  // head, tailともにあらゆる値が入ってくる想定なのでany型
  head: any
  tail: any
  prepend: (v: any) => ILinkedList
  append: (v: any) => ILinkedList
  delete: (v: any) => ILinkedListNode | null
  // deleteTail: (v: any) => this
  // deleteHead: (v: any) => this
  // find: (findParams: FindParams) => ILinkedListNode | null
  // fromArray: (v: any) => this
  toArray: (v: any) => ILinkedListNode[]
  toString: (v: any) => string
  // reverse: (v: any) => this
}

export class LinkedList implements ILinkedList {
  // head, tailともにあらゆる値が入ってくる想定なのでany型
  public head: any
  public tail: any

  // head, tailの初期化
  constructor() {
    this.head = null
    this.tail = null
  }

  public prepend(value: any): ILinkedList {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }

  public append(value: any): ILinkedList {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }
    // NOTE: this.tailにはthis.headと同じ参照元が入ってるので、
    // this.tail.nextを書き換えるとthis.head.nextも書き換わる
    // 2回目だと、this.tailとthis.head.nextに同じ参照元が入り
    // 3回目だと、this.tailとthis.head.next.nextに同じ参照元が入る。これが続いていく
    this.tail.next = newNode
    this.tail = newNode
    return this
  }

  // NOTE: valueにマッチする値は全て削除
  public delete(value: any): ILinkedListNode | null {
    if (!this.head) return null
    let deletedNode = null
    while (this.head && this.head.value === value) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }

  // public find({ value, callback }: FindParams): ILinkedListNode | null {
  //   if (!this.head) return null
  //   let currentNode = this.head
  //   while (currentNode) {
  //     if (callback && callback(currentNode.value)) {
  //       return currentNode
  //     }
  //     if (value !== null && currentNode.value === value) {
  //       return currentNode
  //     }
  //     currentNode = currentNode.next
  //   }
  //   return null
  // }

  // public toArray(): ILinkedListNode[] {
  //   const nodes = []
  //   let currentNode = this.head
  //   while (currentNode) {
  //     nodes.push(currentNode)
  //     currentNode = currentNode.next
  //   }
  //   return nodes
  // }

  public toString(callback?: () => any): string {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString()
  }
}
