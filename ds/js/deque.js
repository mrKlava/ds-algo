class Deque {
    constructor() {
        this.deque = []
    }

    isEmpty() { 
        return this.deque.length ? false : true
    }

    enqueueFront(item) {
        this.deque.splice(0, 0, item)
    }

    enqueueRear(item) {
        this.deque.push(item)
    }

    dequeueFront() {
        return this.deque.shift()
    }

    dequeueRear() {
        return this.deque.pop()
    }
}


const deque = new Deque()

console.log(deque.isEmpty())

deque.enqueueFront(5)
deque.enqueueFront(4)
deque.enqueueRear(6)
deque.enqueueRear(7)
deque.enqueueFront(3)

console.log(deque.isEmpty())
console.log(deque)


deque.dequeueRear()
deque.dequeueFront()
deque.dequeueRear()

console.log(deque)