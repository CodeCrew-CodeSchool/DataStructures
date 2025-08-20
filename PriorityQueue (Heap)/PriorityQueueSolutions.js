
import { PriorityQueue } from "./PriorityQueue.js";

class PQSolutions {
    /**
     * Method to Return the K-th Largest Element in an Array
     * @param {number[]} arr - Input array of numbers
     * @param {number} k - The k-th largest index (1-based)
     * @returns {number|null} The k-th largest element or null if invalid input
     *
     * Logic:
     * - Use a min-heap (priority queue) of size k.
     * - Iterate through the array:
     *   - Insert current element into the heap.
     *   - If heap size exceeds k, remove the smallest (dequeue).
     * - At the end, the heap root (peek) is the k-th largest element.
     */
    static kthLargest(arr, k) {
        //Edge case: invalid input
        if (!Array.isArray(arr) || k <= 0 || k > arr.length) return null;

        //Create a min-heap
        const pq = new PriorityQueue((a, b) => a - b);

        //Insert elements into the heap
        for (const num of arr) {
            pq.enqueue(num);

            //Keep only the k largest elements
            if (pq.size() > k) {
                pq.dequeue(); //Remove smallest
            }
        }

        //The root of the min-heap is the k-th largest
        return pq.peek();
    }

    /**
     * Method to Find the Smallest Element from an Array
     * @param {number[]} numbers - Array of numbers
     * @returns {number|null} The smallest element or null if array empty
     *
     * Logic:
     * - Use a min-heap (priority queue).
     * - Insert all numbers into the heap.
     * - The root (peek) of the min-heap is always the smallest element.
     */
    static findSmallestElement(numbers) {
        //Edge case: empty or invalid input
        if (!Array.isArray(numbers) || numbers.length === 0) return null;

        //Create a min-heap
        const pq = new PriorityQueue((a, b) => a - b);

        //Insert all numbers
        for (const x of numbers) {
            pq.enqueue(x);
        }

        //Smallest element is at the root
        return pq.peek();
    }

    /**
     * Method to Sort an Array in Ascending Order Using a Priority Queue
     * @param {number[]} arr - Input array of numbers
     * @returns {number[]} New array sorted in ascending order
     *
     * Logic:
     * - Use a min-heap (priority queue).
     * - Insert all numbers into the heap.
     * - Repeatedly dequeue elements and push them into result.
     * - Result array will be sorted in ascending order.
     */
    static sortArray(arr) {
        //Edge case: empty or invalid input
        if (!Array.isArray(arr) || arr.length === 0) return [];

        //Create a min-heap
        const pq = new PriorityQueue((a, b) => a - b);

        //Insert all numbers into heap
        for (const x of arr) {
            pq.enqueue(x);
        }

        //Extract elements in sorted order
        const result = [];
        while (!pq.isEmpty()) {
            result.push(pq.dequeue());
        }

        //Return the sorted array
        return result;
    }
}
