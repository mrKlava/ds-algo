"use strict"

const getId = (id) => document.getElementById(id)
const createElem = (elem) => document.createElement(elem)

/* CLASSES */

class QueueItem {
    constructor(value, priority, time) {
        this.id = counter++
        this.value = value
        this.priority = priority
        this.time = time
    }
}

class CircularQueue {
    constructor(n = 5) {
        this.n = n
        this.queue = Array(n)
        this.front = -1
        this.rear = -1
    }

    enqueue(item) {
        if ((this.rear + 1) % this.n === this.front) {
            console.log('Queue is full')
        } else if (this.front === -1) {
            this.front = 0
            this.rear = 0
            this.queue[this.rear] = item
        } else {
            this.rear = (this.rear + 1) % this.n
            this.queue[this.rear] = item
        }
    }

    dequeue() {
        if (this.front === -1) {
            console.log('Queue is empty')
        } else if (this.front === this.rear) {
            const temp = this.queue[this.front]

            delete this.queue[this.front]

            this.front = -1
            this.rear = -1

            return temp
        } else {
            const temp = this.queue[this.front]

            delete this.queue[this.front]

            this.front = (this.front + 1) % this.n

            return temp
        }
    }

    printQueue() {
        if (this.front === -1) {
            console.log('Queue is empty')
        } else if (this.rear >= this.front) {
            for (let i = this.front; i < this.rear + 1; i++) {
                console.log(this.queue[i])
            }
        } else {
            for (let i = this.rear; i < this.n - 1; i++) {
                console.log(this.queue[i])
            }
            for (let i = 0; i < this.rear; i++) {
                console.log(this.queue)
            }
        }
    }
}

class UI {
    constructor() {
        this.queueContainer = getId('queue')
        this.itemValue = getId('itemValue')
        this.itemPriority = getId('itemPriority')
        this.itemTime = getId('itemTime')
        this.enqueueBtn = getId('enqueue')
        this.dequeueBtn = getId('dequeue')
    }
}

/* CONSTANTS */

const queueContainer = getId('queue')
// input form
const itemValue = getId('itemValue')
const itemPriority = getId('itemPriority')
const itemTime = getId('itemTime')
// btn enqueue and dequeue
const enqueueBtn = getId('enqueue')
const dequeueBtn = getId('dequeue')

let counter = 0

const queue = new CircularQueue(25)


/* EVENT LISTENERS */
enqueueBtn.addEventListener('click', handleEnqueue)
dequeueBtn.addEventListener('click', handleDequeue)


/* FUNCTION CALLS */

renderSlots(queue)
renderItems(queue)

/* EVENT HANDLERS */

function handleEnqueue() {
    const value = itemValue.value ? itemValue.value : Math.ceil(Math.random() * 100)
    const priority = itemPriority.value ? itemPriority.value : 1
    const time = itemTime.value ? itemTime.value : 3000

    queue.enqueue(new QueueItem(value, priority, time))

    refreshItems(queue)
    resetInput()
}

function handleDequeue() {
    queue.dequeue()

    refreshItems(queue)
}


/* HELPERS */ 

function resetInput() {
    itemValue.value = ''
    itemPriority.value = ''
    itemTime.value = ''
}

function renderSlots({n}) {   
    for (let i = 0; i < n; i++) {
        queueContainer.appendChild(createSlot(i))
    }
}

function renderItems({queue}) {
    queue.forEach((item, i) => {
        const card = createCard(item)
        queueContainer.children[i].appendChild(card)
    })
}

function refreshItems(queue) {
    queueContainer.replaceChildren()

    renderSlots(queue)
    renderItems(queue)
}

function createSlot(i) {
    const slot = createElem('div')
    slot.classList.add('queue-slot')
    slot.textContent = `INDEX ${i}`

    return slot
}

function createCard({value, id, time}) {
    const item = createElem('div')
    const valueP = createElem('p')
    const idP = createElem('p')
    const timeP = createElem('p')

    valueP.textContent = value
    idP.textContent = id
    timeP.textContent = time

    item.classList.add('item')

    item.appendChild(idP)
    item.appendChild(valueP)
    item.appendChild(timeP)

    return item
}