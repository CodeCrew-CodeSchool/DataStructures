import { BinarySearchTree } from "./BST.js";

class BSTSolutions {
    /**
     * Method to Insert a Value into a BST
     * @param {BinarySearchTree} bst - The BST instance
     * @param {number} value - Value to be inserted
     * @returns {void} Modifies the BST in place
     *
     * Logic:
     * - If tree is empty, new node becomes root.
     * - Otherwise traverse from root:
     *   - Go left if value < current.value
     *   - Go right otherwise (duplicates go right)
     * - Insert when a null child spot is found.
     */
    static insertIntoBST(bst, value) {
        //Create a new node to insert
        const newNode = { value, left: null, right: null };

        //If tree is empty, make new node the root
        if (bst.root === null) {
            bst.root = newNode;
            return;
        }

        //Otherwise, traverse to find correct spot
        let current = bst.root;
        while (true) {
            if (value < current.value) {
                //Go left
                if (current.left === null) {
                    current.left = newNode; //Insert here
                    return;
                }
                current = current.left; //Keep going left
            } else {
                //Go right (>= handles duplicates)
                if (current.right === null) {
                    current.right = newNode; //Insert here
                    return;
                }
                current = current.right; //Keep going right
            }
        }
    }

    /**
     * Method to Search a Value in a BST
     * @param {BinarySearchTree} bst - The BST instance
     * @param {number} value - Target value to look for
     * @returns {boolean} True if value exists, otherwise False
     *
     * Logic:
     * - Start at root and walk down:
     *   - If value equals current, return true.
     *   - If smaller, go left; else go right.
     * - If we reach null, value is not in the tree.
     */
    static searchInBST(bst, value) {
        //Start traversal at root
        let current = bst.root;

        //Walk down until value found or null
        while (current !== null) {
            if (value === current.value) {
                return true; //Found match
            }

            //If value is smaller, move to the left child
            if (value < current.value) {
                current = current.left;
            }
            //Otherwise move to the right child
            else {
                current = current.right;
            }
        }

        //If loop ends, value was not found in the BST
        return false;
    }


    /**
     * Method to Find the Minimum Value in a BST
     * @param {BinarySearchTree} bst - The BST instance
     * @returns {number|null} Smallest value or null if tree is empty
     *
     * Logic:
     * - Minimum value is at the leftmost node from root.
     */
    static findMinimumValue(bst) {
        //If tree empty, return null
        if (bst.root === null) return null;

        //Go to leftmost node
        let current = bst.root;
        while (current.left !== null) {
            current = current.left;
        }

        //Return its value
        return current.value;
    }

    /**
     * Method to Find the Maximum Value in a BST
     * @param {BinarySearchTree} bst - The BST instance
     * @returns {number|null} Largest value or null if tree is empty
     *
     * Logic:
     * - Maximum value is at the rightmost node from root.
     */
    static findMaximumValue(bst) {
        //If tree empty, return null
        if (bst.root === null) return null;

        //Go to rightmost node
        let current = bst.root;
        while (current.right !== null) {
            current = current.right;
        }

        //Return its value
        return current.value;
    }
}
