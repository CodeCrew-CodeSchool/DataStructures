# DataStructures
## Summary
Compilation of different data structures and algorithm implementations and excercises.

## List of Data Structures/Algorithm
1. Arrays
2. LinkedList
3. Doubly LinkedList
4. Stack
5. HashMap
6. Queue
7. Priority Queue
8. Heap
9. Binary Search Tree
10. Dijkstra Algorithm

## Common Complexities (Big-O)

### 1. Arrays
| Operation          | Complexity     |
|--------------------|----------------|
| Access (by index)  | **O(1)**       |
| Search (unsorted)  | **O(n)**       |
| Insertion (end)    | **O(1)** (amortized) |
| Insertion (middle) | **O(n)**       |
| Deletion (by index)| **O(n)**       |

---

### 2. LinkedList
| Operation          | Complexity     |
|--------------------|----------------|
| Access (by index)  | **O(n)**       |
| Search             | **O(n)**       |
| Insertion (head)   | **O(1)**       |
| Insertion (tail, with tail pointer) | **O(1)** |
| Deletion (head)    | **O(1)**       |
| Deletion (by value/index) | **O(n)** |

---

### 3. DoublyLinkedList
| Operation          | Complexity     |
|--------------------|----------------|
| Access (by index)  | **O(n)**       |
| Search             | **O(n)**       |
| Insertion (head/tail) | **O(1)**    |
| Deletion (head/tail) | **O(1)**     |
| Deletion (by value/index) | **O(n)** |

---

### 4. Stack (LIFO)
| Operation          | Complexity     |
|--------------------|----------------|
| Push (insert)      | **O(1)**       |
| Pop (remove)       | **O(1)**       |
| Peek (top)         | **O(1)**       |
| Search             | **O(n)**       |

---

### 5. Simple HashMap Implementation

| Operation          | Average        | Worst         |
|--------------------|----------------|---------------|
| Access (get by key)| **O(1)**       | **O(n)**      |
| Search (has)       | **O(1)**       | **O(n)**      |
| Insertion (set)    | **O(1)**       | **O(n)**      |
| Deletion (delete)  | **O(1)**       | **O(n)**      |
| Retrieve keys()    | **O(n)**       | **O(n)**      |
| Retrieve values()  | **O(n)**       | **O(n)**      |

* Note this only applies for the implementation in this repo, other ones with different hashing functions might be different.
---

### 6. Queue (FIFO)
| Operation          | Complexity     |
|--------------------|----------------|
| Enqueue (insert)   | **O(1)**       |
| Dequeue (remove)   | **O(1)**       |
| Peek (front)       | **O(1)**       |
| Search             | **O(n)**       |

---

### 7. Priority Queue (Heap Implementation)
| Operation          | Complexity     |
|--------------------|----------------|
| Insert (push)      | **O(log n)**   |
| Extract-Min/Max    | **O(log n)**   |
| Peek (min/max)     | **O(1)**       |
| Search (unsorted heap) | **O(n)**   |

---

### 8. Binary Search Tree (BST)
| Operation          | Average        | Worst (unbalanced) |
|--------------------|----------------|---------------------|
| Search             | **O(log n)**   | **O(n)**            |
| Insertion          | **O(log n)**   | **O(n)**            |
| Deletion           | **O(log n)**   | **O(n)**            |
| Traversal (inorder, preorder, etc.) | **O(n)** | **O(n)** |

---


