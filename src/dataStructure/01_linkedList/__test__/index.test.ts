import assert = require('assert')

import { LinkedList } from '..'

describe('連結リスト（Linked List）', () => {
  it('空の連結リストを作れること', () => {
    const linkedList = new LinkedList()
    assert.equal(linkedList.toString(), '')
  })

  it('ノードを先頭に追加できていること', () => {
    const linkedList = new LinkedList()

    linkedList.prepend(2)
    assert.equal(linkedList.head.toString(), '2')
    assert.equal(linkedList.tail.toString(), '2')

    linkedList.append(1)
    linkedList.prepend(3)

    assert.deepEqual(linkedList.toString(), '3,2,1')
  })

  it('ノードを末尾に追加できていること', () => {
    const linkedList = new LinkedList()
    assert.equal(linkedList.head, null)
    assert.equal(linkedList.tail, null)

    linkedList.append(1)
    linkedList.append(2)

    assert.equal(linkedList.toString(), '1,2')
    assert.equal(linkedList.tail.next, null)
  })

  it('オブジェクトの連結リストを作れること', () => {
    const linkedList = new LinkedList()

    const nodeValue1 = { value: 1, key: 'key1' }
    const nodeValue2 = { value: 2, key: 'key2' }

    linkedList.append(nodeValue1).prepend(nodeValue2)

    const nodeStringifier = (value: any): string => `${value.key}:${value.value}`

    assert.equal(linkedList.toString(nodeStringifier), 'key2:2,key1:1')
  })

  it('値での検索ができること', () => {
    const linkedList = new LinkedList()

    assert.equal(linkedList.find({ value: 5 }), null)

    linkedList.append(1)
    assert.ok(linkedList.find({ value: 1 }))

    linkedList.append(2).append(3)

    const node = linkedList.find({ value: 2 })
    assert.equal(node && node.value, 2)
    assert.equal(linkedList.find({ value: 5 }), null)
  })

  it('任意のコールバックで検索ができること', () => {
    const linkedList = new LinkedList()

    linkedList
      .append({ value: 1, key: 'test1' })
      .append({ value: 2, key: 'test2' })
      .append({ value: 3, key: 'test3' })

    const node = linkedList.find({ callback: value => value.key === 'test2' })

    assert.ok(node)
    assert.equal(node && node.value.value, 2)
    assert.equal(node && node.value.value, 2)
    assert.equal(node && node.value.key, 'test2')
    assert.equal(linkedList.find({ callback: value => value.key === 'test5' }), null)
  })

  it('指定した値のノードを削除できること', () => {
    const linkedList = new LinkedList()

    assert.equal(linkedList.delete(5), null)

    linkedList.append(1)
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(3)
    linkedList.append(4)
    linkedList.append(3)
    linkedList.append(4)
    linkedList.append(5)

    assert.equal(linkedList.head.toString(), '1')
    assert.equal(linkedList.tail.toString(), '5')

    const deletedNode = linkedList.delete(3)
    assert.equal(deletedNode && deletedNode.value, 3)
    assert.equal(linkedList.toString(), '1,1,2,4,4,5')

    assert.equal(linkedList.delete(3), null)
    assert.equal(linkedList.toString(), '1,1,2,4,4,5')

    linkedList.delete(1)
    assert.equal(linkedList.toString(), '2,4,4,5')

    assert.equal(linkedList.head.toString(), '2')
    assert.equal(linkedList.tail.toString(), '5')

    linkedList.delete(5)
    assert.equal(linkedList.toString(), '2,4,4')

    assert.equal(linkedList.head.toString(), '2')
    assert.equal(linkedList.tail.toString(), '4')

    linkedList.delete(4)
    assert.equal(linkedList.toString(), '2')

    assert.equal(linkedList.head.toString(), '2')
    assert.equal(linkedList.tail.toString(), '2')

    linkedList.delete(2)
    assert.equal(linkedList.toString(), '')
  })

  it('先頭の削除ができること', () => {
    const linkedList = new LinkedList()

    assert.equal(linkedList.deleteHead(), null)

    linkedList.append(1)
    linkedList.append(2)

    assert.equal(linkedList.head.toString(), 1)
    assert.equal(linkedList.tail.toString(), 2)

    const deletedNode1 = linkedList.deleteHead()
    assert.equal(deletedNode1 && deletedNode1.value, 1)
    assert.equal(linkedList.toString(), '2')
    assert.equal(linkedList.head.toString(), '2')
    assert.equal(linkedList.tail.toString(), '2')

    const deletedNode2 = linkedList.deleteHead()
    assert.equal(deletedNode2 && deletedNode2.value, 2)
    assert.equal(linkedList.toString(), '')
    assert.equal(linkedList.head, null)
    assert.equal(linkedList.tail, null)
  })

  it('末尾の削除ができること', () => {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    assert.equal(linkedList.head.toString(), '1')
    assert.equal(linkedList.tail.toString(), '3')

    const deletedNode1 = linkedList.deleteTail()
    assert.equal(deletedNode1 && deletedNode1.value, 3)
    assert.equal(linkedList.toString(), '1,2')
    assert.equal(linkedList.head.toString(), '1')
    assert.equal(linkedList.tail.toString(), '2')

    const deletedNode2 = linkedList.deleteTail()
    assert.equal(deletedNode2 && deletedNode2.value, 2)
    assert.equal(linkedList.toString(), '1')
    assert.equal(linkedList.head.toString(), '1')
    assert.equal(linkedList.tail.toString(), '1')

    const deletedNode3 = linkedList.deleteTail()
    assert.equal(deletedNode3 && deletedNode3.value, 1)
    assert.equal(linkedList.toString(), '')
    assert.equal(linkedList.head, null)
    assert.equal(linkedList.tail, null)
  })

  it('配列から連結リストを作れること', () => {
    const linkedList = new LinkedList()
    linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5])

    assert.equal(linkedList.toString(), '1,1,2,3,3,3,4,5')
  })

  it('今の連結リストを逆に配置できること', () => {
    const linkedList = new LinkedList()

    linkedList
      .append(1)
      .append(2)
      .append(3)

    assert.equal(linkedList.toString(), '1,2,3')
    assert.equal(linkedList.head.value, 1)
    assert.equal(linkedList.tail.value, 3)

    linkedList.reverse()
    assert.equal(linkedList.toString(), '3,2,1')
    assert.equal(linkedList.head.value, 3)
    assert.equal(linkedList.tail.value, 1)

    linkedList.reverse()
    assert.equal(linkedList.toString(), '1,2,3')
    assert.equal(linkedList.head.value, 1)
    assert.equal(linkedList.tail.value, 3)
  })
})
