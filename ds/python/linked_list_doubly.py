class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def print_list(self):
        temp = self.head
        i = 0

        if temp is None:
            print('List is empty')
        else:
            print('-------------------- List BEG --------------------')
            while temp is not None:

                print('---------- item ', i)
                print('Data: ', temp.data)
                if temp.prev is not None:
                    print('Prev: ', temp.prev.data)
                if temp.next is not None:
                    print('Next: ', temp.next.data)

                temp = temp.next
                i += 1
            print('-------------------- List END --------------------')


    def insert_beg(self, node):
        node.next = self.head

        if self.head is not None:
            self.head.prev = node

        self.head = node


    def insert_end(self, node):
        temp = self.head

        if temp is None:
            self.insert_beg(node)
            return

        while temp.next is not None:
            temp = temp.next

        node.prev = temp
        temp.next = node


    def insert_at(self, pos, node):
        temp = self.head


    def delete_beg(self):
        temp = self.head
        
        if temp is None:
            return

        if temp.next is not None:
            self.head = temp.next
            self.head.prev = None
        else:
            self.head = None


    def delete_end(self):
        temp = self.head

        if temp is None:
            return
        
        if temp.next is None:
            self.delete_beg()

            return
        
        while temp.next.next is not None:
            temp = temp.next
        
        temp.next = None



# create empty linked list
linked_list = LinkedList()

# create nodes
zero = Node(0)
first = Node(1)
second = Node(2)
third = Node(3)
fourth = Node(4)
fifth = Node(5)


linked_list.insert_beg(first)
linked_list.insert_beg(zero)
linked_list.insert_end(second)
linked_list.insert_end(third)

# linked_list.delete_beg()
linked_list.delete_end()
linked_list.delete_end()
linked_list.delete_end()
linked_list.delete_end()
linked_list.delete_end()


linked_list.print_list()
