'''Deque using list'''

class Deque:
    def __init__(self):
        self.deque = []
    
    def is_empty(self):
        return self.deque == []
    
    def enqueue_rear(self, item):
        self.deque.append(item)

    def enqueue_front(self, item):
        self.deque.insert(0, item)
    
    def dequeue_rear(self):
        return self.deque.pop()

    def dequeue_front(self):
        return self.deque.pop(0)
    
    def size(self):
        return len(self.deque)
    

d = Deque()
print(d.is_empty())
d.enqueue_rear(8)
d.enqueue_rear(5)
d.enqueue_front(7)
d.enqueue_front(10)
print(d.size())
print(d.is_empty())
d.enqueue_rear(11)
print(d.dequeue_rear())
print(d.dequeue_front())
d.enqueue_front(55)
d.enqueue_rear(45)
print(d.deque)