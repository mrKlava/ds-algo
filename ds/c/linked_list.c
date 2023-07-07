#include <stdio.h>
#include <stdlib.h>

struct node {
    int value;
    struct node *next;
};

void printLinkedList(struct node *p);

int main() {
    struct node *head;
    struct node *first;
    struct node *second;
    struct node *third;

    first = malloc(sizeof(struct node));
    second = malloc(sizeof(struct node));
    third = malloc(sizeof(struct node));

    first->value = 1;
    second->value = 2;
    third->value = 3;

    first->next = second;
    second->next = third;
    third->next = NULL;

    head = first;

    printLinkedList(head);

    return 0;
}


void printLinkedList(struct node *p) {
    while(p != NULL) {
        printf("%i \n", p->value);
        p = p->next;
    }
}