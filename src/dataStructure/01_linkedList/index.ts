import { ILinkedListNode, LinkedListNode } from './linkedListNode'

type FindParams = {
  value?: any
  callback?: (v: any) => any
}

interface ILinkedList {
  // head, tailともにあらゆる値が入ってくる想定なのでany型
  head: any
  tail: any
  prepend: (v: any) => ILinkedList
  append: (v: any) => ILinkedList
  find: (findParams: FindParams) => ILinkedListNode | null
  delete: (v: any) => ILinkedListNode | null
  deleteHead: () => ILinkedListNode | null
  deleteTail: () => ILinkedListNode | null
  fromArray: (v: any[]) => ILinkedList
  toArray: (v: any) => ILinkedListNode[]
  reverse: () => ILinkedList
  toString: (v: any) => string
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

  public find({ value, callback }: FindParams): ILinkedListNode | null {
    // this.headがないのは連結リストがないということなのでnullを返す
    if (!this.head) return null

    // this.headから順番に検索
    let currentNode = this.head
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode
      }
      if (value !== null && currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
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

  public deleteHead(): ILinkedListNode | null {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head
    if (this.head.next) {
      this.head = this.head.next
    } else {
      // this.head.nextがない。つまり値が一つしかない連結リスト
      this.head = null
      this.tail = null
    }
    return deletedHead
  }

  public deleteTail(): ILinkedListNode | null {
    const deletedTail = this.tail
    // NOTE: 連結リストに値が一つしかない or 連結リストがない
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return deletedTail
    }

    let currentNode = this.head
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }
    this.tail = currentNode
    return deletedTail
  }

  public toArray(): ILinkedListNode[] {
    const nodes = []
    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  public fromArray(array: any[]): ILinkedList {
    array.forEach(value => this.append(value))
    return this
  }

  public reverse(): ILinkedList {
    let currentNode = this.head
    let previousNode = null
    let nextNode = null

    while (currentNode) {
      nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = nextNode
    }
    this.tail = this.head
    this.head = previousNode
    return this
  }

  public toString(callback?: (v: any) => any): string {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString()
  }
}

const linkedList = new LinkedList()
linkedList
  .append(1)
  .append(2)
  .append(3)
linkedList.reverse()
