/* Linked list */

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

const linkedList = new LinkedList()

const first = new Node(1)
const second = new Node(2)
const third = new Node(3)

first.next = second
second.next = third

linkedList.head = first

console.log(linkedList)