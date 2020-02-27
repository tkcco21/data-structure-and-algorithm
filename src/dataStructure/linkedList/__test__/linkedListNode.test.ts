import assert = require('assert')

import { ToStringCallback, LinkedListNode } from '../linkedListNode'

describe('リンクされたリストのノード（LinkedListNode）', () => {
  it('ノードの値が作られていること', () => {
    const node = new LinkedListNode(1)

    assert.equal(node.value, 1)
    assert.equal(node.next, null)
  })

  it('ノードの値としてオブジェクトが作られていること', () => {
    const nodeValue = { value: 1, key: 'test' }
    const node = new LinkedListNode(nodeValue)

    assert.equal(node.value.value, 1)
    assert.equal(node.value.key, 'test')
    assert.equal(node.next, null)
  })

  it('（nextを含む）複数のノードが作られること', () => {
    const node2 = new LinkedListNode(2)
    const node1 = new LinkedListNode(1, node2)

    assert.equal(node2.value, 2)
    assert.equal(node2.next, null)
    assert.equal(node1.value, 1)
    assert.ok(node1.next)
    assert.equal(node1.next.value, 2)
  })

  it('ノードがString型に変換されること', () => {
    const node = new LinkedListNode(1)

    assert.equal(node.toString(), '1')

    node.value = 'string value'
    assert.equal(node.toString(), 'string value')
  })

  it('カスタムコールバックでString型に変換されること', () => {
    const nodeValue = { value: 1, key: 'test' }
    const node = new LinkedListNode(nodeValue)
    const toStringCallback: ToStringCallback = value => `value: ${value.value}, key: ${value.key}`

    assert.equal(node.toString(toStringCallback), 'value: 1, key: test')
  })
})
