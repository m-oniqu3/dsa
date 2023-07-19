### Insertion Rules for Linked List

- Validate the index - ensure it is within the valid range of the linked list. check if the index is negative or greater than the length of the list.
- Handle edge cases: Consider special cases such as inserting at the beginning (head) of the list, inserting at the end (tail) of the list, or inserting at an invalid index.
- Update pointers: To insert a new node, you need to update the pointers of the neighbouring nodes to maintain the proper linkage. Make sure to correctly update the **`next`** pointers of the preceding and succeeding nodes to properly connect the new node in the list.
- Update the length
