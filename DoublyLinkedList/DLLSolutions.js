//Build a Node for Doubly LinkedList
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

//Build a Doubly LinkedList
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Method to Delete a Given Node in O(1) Time
     * @param {Node} node - The node to be deleted (assuming not to be null)
     *
     * Logic:
     * - Simply adjust the prev and next pointers around the given node.
     * - No need to traverse since we are given the node reference.
     * - Update head/tail if needed.
    */
    deleteNodeO1(node) {
        //If node is the head, move head forward
        if (node === this.head) {
            this.head = node.next;
            this.head.prev = null;
        }

        //If node is the tail, move tail backward
        if (node === this.tail) {
            this.tail = node.prev;
            this.tail.next = null;
        }

        //If node has a previous node, update its next
        if (node.prev) {
            node.prev.next = node.next;
        }

        //If node has a next node, update its prev
        if (node.next) {
            node.next.prev = node.prev;
        }

        //Decrease list size
        this.length--;
    }

    /**
     * Method to Check if the Doubly Linked List is a Palindrome
     * @returns {boolean} True if the list is a palindrome
     *
     * Logic:
     * - Use two pointers from head and tail.
     * - Compare values at both ends.
     * - Move toward center until they meet or mismatch found.
    */
    isPalindrome() {
        //Pointer from the start
        let left = this.head;

        //Pointer from the end  
        let right = this.tail;

        //Traverse toward the center
        while (left !== right && left.prev !== right) {
            //Check for Mismatch
            if (left.value !== right.value) {
                return false;
            }

            //Move left forward
            left = left.next;
            //Move right backward
            right = right.prev;
        }

        //All matched
        return true;
    }

    /**
     * Method to Detect if the Doubly Linked List Has a Cycle
     * @returns {boolean} True if cycle is present
     *
     * Logic:
     * - Use Floyd’s Tortoise and Hare.
     * - Traverse with slow and fast pointers.
     * - If they meet, a cycle exists.
    */
    hasCycle() {

        //Slow pointer
        let slow = this.head;
        //Fast pointer
        let fast = this.head;

        //Move through the list
        while (fast && fast.next) {
            //Move slow by 1 Node step
            slow = slow.next;
            //Move fast by 2 Node steps        
            fast = fast.next.next;

            //If pointers meet, cycle detected
            if (slow === fast) return true;
        }

        return false;
    }
}
