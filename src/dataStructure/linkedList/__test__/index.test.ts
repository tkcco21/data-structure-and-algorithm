import assert = require('assert')

import { LinkedList } from '..'

describe('連結リスト（Linked List）', () => {
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
})
