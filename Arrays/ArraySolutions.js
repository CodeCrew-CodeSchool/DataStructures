//Class with Array Coding Problem Solutions
class ArrayProblems {

    /**
     * Method to find the median of two sorted arrays.
     *
     * @param {number[]} nums1 - First sorted array.
     * @param {number[]} nums2 - Second sorted array.
     * @returns {number} The median value of the combined sorted arrays.
     *
     * This method merges the two input arrays and sorts the result.
     * Then it calculates the median by checking the length of the merged array.
     * - If the length is even, it returns the average of the two middle elements.
     * - If the length is odd, it returns the middle element directly.
     * 
    */
    static findMedianSortedArrays(nums1, nums2) {
        //Merge and sort both arrays
        const merged = [...nums1, ...nums2].sort((a, b) => a - b);
        //Time: O((m+n) log(m+n)), where m and n are lengths of nums1 and nums2

        //Get the Lenght of Array
        const n = merged.length;
        //Time: O(1) - simple property access

        //Get the Index of Middle Element of Array
        const mid = Math.floor(n / 2);
        //Time: O(1) - simple arithmetic operation

        //If even length, return average of two middle numbers
        if (n % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2;
        }
        //Time: O(1) - Array access + arithmetic operation

        //If odd length, return middle number
        else {
            return merged[mid];
        }
        //Time: O(1) - Array access
    }
    //Overall complexity: O(m+n) log(m+n), O(1) space for merged array

    /**
     * Method to find the maximum product of any contiguous subarray (only positive, non-zero integers).
     *
     * @param {number[]} nums - The input array of positive, non-zero integers.
     * @returns {number} The maximum product found in any subarray.
     *
     * Since all numbers are positive, we only track the running product.
     * - Reset the product to 1 if it ever drops below the current number.
     * - Keep updating the max product found so far.
     * - No need to track minimum products or handle negative flips.
     * 

    */
    static maxProductSubarray(nums) {
        //Return 0 if array is empty
        if (nums.length === 0) return 0;
        //Time: O(1) - simple length check

        //Initialize max product to first element
        let maxProd = nums[0];
        //Time: O(1) - variable assignment

        //Track current running product
        let currProd = nums[0];
        //Time: O(1) - variable assignment

        //Start from second element
        for (let i = 1; i < nums.length; i++) {
            //Time: O(n) - Loop runs n-1 times

            const num = nums[i];
            //Time: O(1) - Array access

            //If current number is better than extending product, reset
            currProd = Math.max(num, currProd * num);
            //Time: O(1) - Arithmetic and Math operation

            //Update global max product
            maxProd = Math.max(maxProd, currProd);
            //Time: O(1) - Comparison
        }

        //Return the maximum product found
        return maxProd;
    }
    //Overall complexity: O(n) time, O(1) space


    /**
     * Method to find the longest contiguous subarray made only of zeros.
     *
     * @param {number[]} arr - Input array with only non-negative integers.
     * @returns {number} The length of the longest continuous subarray of zeroes.
     *
     * The method scans the array and counts consecutive zeroes.
     * - When a zero is found, we increase the current count.
     * - If a non-zero is found, we reset the count.
     * - Track the maximum length of consecutive zeroes seen so far.
     *
    */
    static largestZeroSumSubarrayArrayOnly(arr) {
        //Track current zero chain length
        let currentCount = 0;
        //Time: O(1) - variable initialization

        //Track max zero chain length
        let maxCount = 0;
        //Time: O(1) - variable initialization

        for (let i = 0; i < arr.length; i++) {
            //Time: O(n) - Loop runs n times

            //If current element is zero, increase the current chain count
            if (arr[i] === 0) {
                //Time: O(1) - Array access
                currentCount++;
                //Time: O(1) - Increment operation
                maxCount = Math.max(maxCount, currentCount);
                //Time: O(1) - Comparison
            }
            //If not zero, reset the current chain count
            else {
                currentCount = 0;
                //Time: O(1) - Assignment
            }
        }

        //Return the longest chain of zeroes found
        return maxCount;
        //Time: O(1) - Return statement
    }
    //Overall complexity: O(n) time, O(1) space

}
