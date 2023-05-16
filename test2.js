class Item {
    constructor(priority, value) {
        this.priority = priority
        this.value = value
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [] 
    }

    enqueue(item) {
        this.queue.push(item)
    }

    dequeue() {
        if (this.queue.length === 0) {
            console.log('Queue is empty')
            
            return false
        }

        let index = 0
        let priority = 0

        for (let i = 0; i < this.queue.length; i++) {
            const cur = this.queue[i].priority
            
            if (cur > priority) {
                index = i
                priority = cur
            }
        }

        const item = this.queue.splice(index, 1)

        console.log(`Item was removed: ${item[0].value} with priority ${item[0].priority}`)

        return true
    }

    displayQueue() {
        if (this.queue.length === 0) return "This queue is empty"

        let resp = ""

        this.queue.forEach((i) => resp += `{priority: ${i.priority} - value: ${i.value}} \n`)

        return resp
    }
}

const line = new PriorityQueue()

const item1 = new Item(1, 2)
const item2 = new Item(1, 5)
const item3 = new Item(3, 1)
const item4 = new Item(2, 3)
const item5 = new Item(3, 4)
const item6 = new Item(2, 6)

line.enqueue(item1)
line.enqueue(item2)
line.enqueue(item3)
line.enqueue(item4)
line.enqueue(item5)
line.enqueue(item6)

line.dequeue()
line.dequeue()
line.dequeue()
line.dequeue()
line.dequeue()
line.dequeue()

console.log(line.displayQueue())

console.dir(line)