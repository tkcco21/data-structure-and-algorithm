import assert = require('assert')

import { ToStringCallback, DoublyLinkedListNode } from '../doublyLinkedListNode'

describe('二重連結リストのノード（LinkedListNode）', () => {
  it('ノードの値が作られていること', () => {
    const node = new DoublyLinkedListNode(1)

    assert.equal(node.value, 1)
    assert.equal(node.next, null)
    assert.equal(node.previous, null)
  })

  it('ノードの値としてオブジェクトが作られていること', () => {
    const nodeValue = { value: 1, key: 'test' }
    const node = new DoublyLinkedListNode(nodeValue)

    assert.equal(node.value.value, 1)
    assert.equal(node.value.key, 'test')
    assert.equal(node.next, null)
    assert.equal(node.previous, null)
  })

  it('複数のノードが連結されていること', () => {
    const node2 = new DoublyLinkedListNode(2)
    const node1 = new DoublyLinkedListNode(1, node2)
    const node3 = new DoublyLinkedListNode(10, node1, node2)

    assert.ok(node1.next)
    assert.equal(node1.previous, null)
    assert.equal(node2.next, null)
    assert.equal(node2.previous, null)
    assert.ok(node3.next)
    assert.ok(node3.previous)
    assert.equal(node1.value, 1)
    assert.equal(node1.next.value, 2)
    assert.equal(node3.next.value, 1)
    assert.equal(node3.previous.value, 2)
  })

  it('ノードがString型に変換されること', () => {
    const node = new DoublyLinkedListNode(1)

    assert.equal(node.toString(), '1')

    node.value = 'string value'
    assert.equal(node.toString(), 'string value')
  })

  it('カスタムコールバックでString型に変換されること', () => {
    const nodeValue = { value: 1, key: 'test' }
    const node = new DoublyLinkedListNode(nodeValue)
    const toStringCallback: ToStringCallback = value => `value: ${value.value}, key: ${value.key}`

    assert.equal(node.toString(toStringCallback), 'value: 1, key: test')
  })
})
