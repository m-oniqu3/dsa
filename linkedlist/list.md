### Insertion Rules for Linked List

- Validate the index - ensure it is within the valid range of the linked list. check if the index is negative or greater than the length of the list.
- Handle edge cases: Consider special cases such as inserting at the beginning (head) of the list, inserting at the end (tail) of the list, or inserting at an invalid index.
- Update pointers: To insert a new node, you need to update the pointers of the neighbouring nodes to maintain the proper linkage. Make sure to correctly update the **`next`** pointers of the preceding and succeeding nodes to properly connect the new node in the list.
- Update the length

### Traversal Rules for Linked List

- Check for current node: Make sure the current node is not null. If it is, you have reached the end of the list.
- Update the current node: Update the current node to the next node in the list. This will allow you to continue to traverse the list until you reach the end.
- A common mistake is checking is current.next is null instead of current. This will cause you to skip the last node in the list.
