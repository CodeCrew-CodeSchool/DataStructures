//Build a Queue (FIFO: First In, First Out)
class Queue {
    /* Constructor Method to Create an EMPTY Queue */
    constructor() {
        this.items = []; //Use an Array to Store Elements of Queue
    }

    //Method to Add (Enqueue) a New Element at the END of Queue
    enqueue(value) {
        //Push element to the END of the array
        this.items.push(value);
    }

    //Method to Remove (Dequeue) an Element from the Front of Queue
    dequeue() {
        //If Queue is Empty, return null
        if (this.items.length === 0) {
            return null;
        }

        //Otherwise remove and return the FIRST element
        return this.items.shift();
    }

    //Method to Peek at the Front Element Without Removing It
    peek() {
        //If Queue is Empty, return null
        if (this.items.length === 0) {
            return null;
        }

        //Otherwise return the FIRST element
        return this.items[0];
    }

    //Method to Check if Queue is Empty
    isEmpty() {
        return this.items.length === 0;
    }

    //Method to Get Size of Queue
    size() {
        return this.items.length;
    }
}
