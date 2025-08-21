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
        //Time Complexity: O(1) - simple check

        //Use an array as a stack
        const stack = [];
        //Time Complexity: O(1) - array initialization

        //Dequeue all elements into stack
        while (!q.isEmpty()) {
            //Time Complextity: O(n) - Loop runs n times (n=queue size)
            stack.push(q.dequeue());
            //Time Complexity: O(1) - Array push and dequeue operation
        }

        //Pop from stack and enqueue back to reverse order
        while (stack.length > 0) {
            //Time Complexity: O(n) - Loop runs n times (n=stack size)
            q.enqueue(stack.pop());
            //Time Complexity: O(1) - Array pop and enqueue operation
        }
    }
    //Time Complexity: O(n) - Overall, we traverse the queue twice, each running n times

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
        //Time Complexity: O(1) - simple check

        //Result array to hold binary strings
        const result = [];
        //Time Complexity: O(1) - array initialization

        //Create a queue and seed it with "1"
        const q = new Queue();
        //Time Complexity: O(1) - Queue initialization
        q.enqueue("1");
        //Time Complexity: O(1) - Initial enqueue operation

        //Generate n binary numbers
        for (let i = 0; i < n; i++) {
            //Time Complexity: O(n) - Loop runs n times (n=number of binary numbers to generate)
            
            //Take the front element (smallest current binary string)
            const s = q.dequeue();
            //Time Complexity: O(1) - Dequeue operation

            //Store it in the result array
            result.push(s);
            //Time Complexity: O(1) - Array push operation

            //Generate the next two binary numbers and enqueue them
            q.enqueue(s + "0");
            //Time Complexity: O(1) - string concatonation + Enqueue operation
            q.enqueue(s + "1");
            //Time Complexity: O(1) - string concatonation + Enqueue operation
        }

        //Return all generated binary numbers
        return result;
        //Time Complexity: O(1) - Final return operation
    }
    //Time Complexity: O(n) - Overall, we generate n binary numbers, each with O(1) operations

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
            //Time Complexity: O(1) - Queue initialization
        }

        /**
         * Method to Register a Call at Time t and Return Count in Window [t-3000, t]
         * @param {number} t - Current timestamp in milliseconds
         * @returns {number} Number of calls in the last 3000 ms
         */
        ping(t) {
            //Add current timestamp to queue
            this.q.enqueue(t);
            //Time Complexity: O(1) - Enqueue operation

            //Remove all timestamps older than [t - 3000]
            while (!this.q.isEmpty()) {
                //Time Complexity: O(k) - Worst-case runs k times (k=queue size) (but amortized O(1) per ping)
                const front = this.q.peek();
                //Time Complexity: O(1) - Peek operation
                if (front < t - 3000) {
                    //Timestamp too old, remove it
                    this.q.dequeue();
                    //Time Complexity: O(1) - Dequeue operation
                } else {
                    //All remaining timestamps are valid
                    break;
                    //Time Complexity: O(1) - Break from loop
                }
            }

            //Return the number of timestamps within the window
            return this.q.size();
            //Time Complexity: O(1) - Size operation
        }
        //Time Complexity: O(1) - Overall, each ping operation is amortized O(1) due to the queue structure
    };
}
