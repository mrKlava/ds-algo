class CircularQueue {
  constructor(n) {
    this.n = n
    this.queue = Array(this.n)
    this.front = -1
    this.rear = -1
  }

  enqueue(data) {
    if ((this.rear + 1) % this.n === this.front) {
      console.log('Queue is full')
    } else if (this.front === -1) {
      this.front = 0
      this.rear = 0
      this.queue[this.rear] = data
    } else {
      this.rear = (this.rear + 1) % this.n
      this.queue[this.rear] = data
    }
  }

  dequeue() {
    if (this.front === -1) {
      console.log('Queue is empty')
    } else if (this.front === this.rear) {
      const temp = self.queue[self.front]
      this.front -= 1
      this.rear -= 1

      return temp
    } else {
      const temp = this.queue[this.front]
      this.front = (this.front + 1) % this.n
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

const obj = new CircularQueue(5)

obj.enqueue(1)
obj.enqueue(2)
obj.enqueue(3)
obj.enqueue(4)
obj.enqueue(5)
console.log("Initial queue")
obj.printQueue()

obj.dequeue()
console.log("After removing an element from the queue")
obj.printQueue()


console.log(obj)