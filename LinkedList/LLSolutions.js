//Build a Node for LinkedList
class Node {
    /*Constructor Method to Create a Single Node Not Connected Anywhere*/
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Build a LinkedList
class LinkedList {
    /*Constructor Method to Create an EMPTY LinkedList*/
    constructor() {
        this.head = null; 
        this.tail = null;
        this.length = 0;  
    }

    //Method to Add a Node at the End of the LinkedList
    append(value) {
        //Create a New Node
        const newNode = new Node(value);

        //If List is Empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //Link New Node After Tail and Move Tail Pointer
            this.tail.next = newNode;
            this.tail = newNode;
        }

        //Increase Length
        this.length++;
    }


    /**
     * Method to Reverse the LinkedList In-Place
     *
     * @returns {void}
     *
     * Logic:
     * - Traverse the list while changing each node’s next pointer to point to the previous one.
     * - Use three pointers: prev, current, and next to safely reverse.
     * - Once done, update head and tail accordingly.
    */
    reverse() {
        //Initialize previous pointer as null
        let prev = null;

        //Start from head of list
        let current = this.head;

        //Traverse while nodes remain
        while (current) {
            //Store the next node before breaking the link
            let next = current.next;

            //Reverse the pointer
            current.next = prev;

            //Move prev and current one step forward
            prev = current;
            current = next;
        }

        //Update the tail to old head
        this.tail = this.head;

        //Set the head to the new front (prev)
        this.head = prev;
    }

    /**
     * Method to Detect if the LinkedList Has a Cycle
     *
     * @returns {boolean} True if cycle exists, otherwise false
     *
     * Logic:
     * - Use Floyd’s Tortoise and Hare Algorithm.
     * - Move one pointer slow (1 step) and another fast (2 steps).
     * - If there’s a loop, they will meet.
     * - If fast or fast.next hits null, list has no cycle.
     */
    hasCycle() {
        //Start both pointers at head
        let slow = this.head;
        let fast = this.head;

        //Traverse while fast can move 2 steps
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            //If pointers meet, there's a cycle
            if (slow === fast) {
                return true;
            }
        }

        //No cycle found
        return false;
    }

    /**
     * Static Method to Merge Two Sorted LinkedLists into One Sorted List
     *
     * @param {LinkedList} list1 - First sorted LinkedList
     * @param {LinkedList} list2 - Second sorted LinkedList
     * @returns {LinkedList} A new sorted LinkedList containing all elements from both lists
     *
     * Logic:
     * - Use two pointers to compare node values from both lists.
     * - Append smaller values to a new LinkedList.
     * - When one list finishes, append the remaining nodes from the other.
     */
    static mergeSorted(list1, list2) {
        //Create a new empty LinkedList to hold merged result
        const merged = new LinkedList();

        //Set pointers to start of both lists
        let ptr1 = list1.head;
        let ptr2 = list2.head;

        //Traverse while both lists have elements
        while (ptr1 && ptr2) {
            //Compare and append the smaller value
            if (ptr1.value < ptr2.value) {
                merged.append(ptr1.value);
                ptr1 = ptr1.next;
            } else {
                merged.append(ptr2.value);
                ptr2 = ptr2.next;
            }
        }

        //Append remaining elements from list1 if any
        while (ptr1) {
            merged.append(ptr1.value);
            ptr1 = ptr1.next;
        }

        //Append remaining elements from list2 if any
        while (ptr2) {
            merged.append(ptr2.value);
            ptr2 = ptr2.next;
        }

        //Return the merged sorted list
        return merged;
    }
}
