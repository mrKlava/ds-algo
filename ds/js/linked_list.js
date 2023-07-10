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

    print_list() {
        let temp = this.head

        if (temp === null) console.log('list is empty')

        while (temp !== null) {
            console.log(temp)
            temp = temp.next
        }
    }

    insert_beg(node) {
        node.next = this.head
        this.head = node
    }

    insert_end(node) {
        let temp = this.head

        while (temp.next !== null) {
            temp = temp.next
        }

        temp.next = node
    }

    insert_at(pos, node) {
        let temp = this.head

        if (pos === 0) this.insert_beg(node)

        for (let i = 0; i < pos - 1; i++) {
            if (temp.next === null) {
                console.error('error. List is to short')
                return
            }

            temp = temp.next
        }

        node.next = temp.next
        temp.next = node
    }

    delete_beg() {
        this.head = this.head.next
    }

    delete_end() {
        let temp = this.head

        if (temp.next === null) {
            this.head = null

            return
        }

        while (temp.next.next !== null) {
            temp = temp.next
        }

        temp.next = null
    }

    delete_at(pos) {
        let temp = this.head

        for (let i = 0; i < pos - 1; i++) {
            if (temp.next.next === null) {
                console.error('error. list is to short')
                return
            }
            temp = temp.next
        }

        temp.next = temp.next.next
    }
}

const linkedList = new LinkedList()

const zero = new Node(0)
const first = new Node(1)
const second = new Node(2)
const third = new Node(3)
const fourth = new Node(4)
const fifth = new Node(5)

first.next = second
second.next = third

linkedList.head = first

linkedList.insert_beg(zero)
linkedList.insert_end(fifth)
linkedList.insert_at(4, fourth)

linkedList.delete_at(4)
linkedList.delete_beg()
linkedList.delete_end()


linkedList.print_list()