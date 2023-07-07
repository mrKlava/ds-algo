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

        print('-----Linked List start')

        while temp is not None:
            print(temp.data)

            if temp.next is not None:
                temp = temp.next
            else:
                break
        print('-----Linked List end \n')


    def search(self, value):
        '''returns true if linked list includes value'''
        temp = self.head

        while temp is not None:
            if temp.data == value:
                return True
            temp = temp.next

        return False


    def sort(self):
        '''sort linked list'''
        temp = self.head
        index = Node(None)

        if temp is None:
            return
        else:
            while temp is not None:
                index = temp.next

                while index is not None:
                    if temp.data > index.data:
                        temp.data, index.data = index.data, temp.data

                    index = index.next
                temp = temp.next


    def insert_beg(self, node):
        '''insert node as a head'''
        node.next = self.head
        self.head = node


    def insert_end(self, node):
        '''insert node to the end of list'''
        temp = self.head

        if temp is None:
            self.head = node

        while temp.next is not None:
            temp = temp.next

        temp.next = node


    def insert_at(self, pos, node):
        '''insert note at position'''
        temp = self.head

        if pos == 0:
            self.insert_beg(node)
            return

        for i in range(pos - 1):

            if temp.next is None:
                print('error. List is to short', end='\n')
                return

            temp = temp.next

        node.next = temp.next
        temp.next = node


    def delete_beg(self):
        '''delete first node'''
        self.head = self.head.next


    def delete_end(self):
        '''delete last node'''
        temp = self.head

        while temp.next.next is not None:
            temp = temp.next

        temp.next = None


    def delete_at(self, pos):
        '''delete node at index'''
        temp = self.head

        if pos == 0:
            self.delete_beg()
            return

        for i in range(pos - 1):
            if temp.next.next is None:
                print('error. list is to short')
                return
            temp = temp.next

        temp.next = temp.next.next

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

linked_list.insert_beg(zero)
linked_list.insert_end(fourth)
linked_list.insert_at(2, fifth)

# linked_list.delete_beg()
# linked_list.delete_end()
# linked_list.delete_at(3)

linked_list.traverse()

print(linked_list.search(5))

linked_list.sort()

linked_list.traverse()


# # print out linked list
# while linked_list.head is not None:
#     print(linked_list.head.data, end='\n')
#     linked_list.head = linked_list.head.next