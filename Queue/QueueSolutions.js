import { Queue } from './Queue.js'; //Import Queue Data Structure

class QueueSolutions {
    /**
     * Method to Reverse the Entire Queue
     * @param {Queue} q - Instance of the Queue class
     * @returns {void} Modifies the queue in place
     *
     * Logic:
     * - Use a stack (array) to reverse order.
     * - Dequeue all elements and push them into the stack.
     * - Pop elements from the stack and enqueue them back.
     * - Result is the queue fully reversed.
     */
    reverseQueue(q) {
        //If queue is empty, nothing to do
        if (q.isEmpty()) return;

        //Use an array as a stack
        const stack = [];

        //Dequeue all elements into stack
        while (!q.isEmpty()) {
            stack.push(q.dequeue());
        }

        //Pop from stack and enqueue back to reverse order
        while (stack.length > 0) {
            q.enqueue(stack.pop());
        }
    }

    /**
     * Method to Generate Binary Numbers from 1 to n Using a Queue
     * @param {number} n - Upper bound inclusive
     * @returns {string[]} Array of binary numbers as strings from "1" to binary(n)
     *
     * Logic:
     * - Use a queue of strings; start with "1".
     * - For i in [1..n]:
     *   - Dequeue the current binary string s.
     *   - Append s to result.
     *   - Enqueue s + "0" and s + "1" to generate next layer.
     */
    generateBinaryNumbers(n) {
        //If n is zero or negative, no binary numbers to generate
        if (n <= 0) return [];

        //Result array to hold binary strings
        const result = [];

        //Create a queue and seed it with "1"
        const q = new Queue();
        q.enqueue("1");

        //Generate n binary numbers
        for (let i = 0; i < n; i++) {
            //Take the front element (smallest current binary string)
            const s = q.dequeue();

            //Store it in the result array
            result.push(s);

            //Generate the next two binary numbers and enqueue them
            q.enqueue(s + "0");
            q.enqueue(s + "1");
        }

        //Return all generated binary numbers
        return result;
    }

    /**
     * Inner Class to Count Recent Calls within the Last 3000 ms
     * 
     * Logic:
     * - Maintain a queue of timestamps in increasing order.
     * - On ping(t):
     *   - Enqueue t.
     *   - While front timestamp < t - 3000, dequeue it (out of window).
     *   - Return current queue size.
     */
    static RecentCounter = class {
        constructor() {
            //Queue will store timestamps in increasing order
            this.q = new Queue();
        }

        /**
         * Method to Register a Call at Time t and Return Count in Window [t-3000, t]
         * @param {number} t - Current timestamp in milliseconds
         * @returns {number} Number of calls in the last 3000 ms
         */
        ping(t) {
            //Add current timestamp to queue
            this.q.enqueue(t);

            //Remove all timestamps older than [t - 3000]
            while (!this.q.isEmpty()) {
                const front = this.q.peek();
                if (front < t - 3000) {
                    //Timestamp too old, remove it
                    this.q.dequeue();
                } else {
                    //All remaining timestamps are valid
                    break;
                }
            }

            //Return the number of timestamps within the window
            return this.q.size();
        }
    };
}
