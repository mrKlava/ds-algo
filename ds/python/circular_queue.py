'''Example of implementation of Circular Queue'''

class CircularQueue():
    '''class with methods: add, remove elements to queue and display all elements'''

    def __init__(self, k):
        self.k = k                  # length of queue
        self.queue = [None] * k     # create empty list with k elements
        self.front = -1             # set front and rear to -1
        self.rear = -1


    def enqueue(self, data):
        '''Inserting item to queue''' 

        # check if next in queue is last -> it means que is full
        if (self.rear + 1) % self.k == self.front:  # will return next index of queue (after last goes first)
            print('The queue is full')

        # if front equals -1 queue is empty
        elif self.front == -1:
            self.front = 0
            self.rear = 0
            self.queue[self.rear] = data

        else:
            self.rear = (self.rear + 1) % self.k
            self.queue[self.rear] = data


    def dequeue(self):
        '''Remove item from queue''' 

        # check if queue is empty
        if self.front == -1:
            print ('The queue is empty')

        # check if there is only one element in queue
        elif self.front == self.rear:
            temp = self.queue[self.front]
            self.front = - 1
            self.rear = - 1
            
            return temp

        else:
            temp = self.queue[self.front]
            self.front = (self.front + 1 ) % self.k
        

    def print_queue(self):
        '''Display Queue'''
        if self.front == -1:
            print('The queue is empty')

        elif self.rear >= self.front:
            for i in range(self.front, self.rear + 1):
                print(self.queue[i], end=' ')
            print()

        else:
            for i in range(self.front, self.k):
                print(self.queue[i], end=' ')
            for i in range(0, self.rear + 1):
                print(self.queue[i], end=' ')
            print()


obj = CircularQueue(5)
obj.enqueue(1)
obj.enqueue(2)
obj.enqueue(3)
obj.enqueue(4)
obj.enqueue(5)
print("Initial queue")
obj.print_queue()

obj.dequeue()
print("After removing an element from the queue")
obj.print_queue()

print(obj.front)
print(obj.rear)