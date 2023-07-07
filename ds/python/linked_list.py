''' Linked list implementation '''


class Node:
    ''' create node '''
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    ''' create linked list '''
    def __init__(self):
        self.head = None


    def traverse(self):
        '''access linked list elements'''
        temp = self.head

        while temp is not None:
            print(temp.data, end='\n')

            if temp.next is not None:
                temp = temp.next
            else:
                break


    def insert_beginning(self, node):
        '''insert node as a head'''
        node.next = self.head
        self.head = node


    def insert_end(self, node):
        '''insert node to the end of list'''
        temp = self.head

        while temp.next is not None:
            temp = temp.next

        temp.next = node


    def insert_at(self, node, pos):
        '''insert note at position'''
        temp = self.head

        for i in range(pos):

            if temp is None:
                print('error. List is to short', end='\n')
                return
            temp = temp.next
            print(temp.data)

        rear = temp
        node.next = rear
        temp = node
        


# create empty linked list
linked_list = LinkedList()

# create nodes
zero = Node(0)
first = Node(1)
second = Node(2)
third = Node(3)
fourth = Node(4)
fifth = Node(5)

# chain all nodes
first.next = second
second.next = third

# set linked list header
linked_list.head = first


linked_list.insert_beginning(zero)
linked_list.insert_end(fourth)
linked_list.insert_at(fifth, 3)


# linked_list.traverse()


# # print out linked list
# while linked_list.head is not None:
#     print(linked_list.head.data, end='\n')
#     linked_list.head = linked_list.head.next