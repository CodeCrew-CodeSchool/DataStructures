//Build a Node for the Binary Search Tree
class TreeNode {
    //Constructor Method to Create a Single Node with Value and Two Child Pointers
    constructor(value) {
        this.value = value;   //Value Stored at This Node
        this.left = null;     //Pointer to Left Child
        this.right = null;    //Pointer to Right Child
    }
}

//Build the Binary Search Tree (BST)
class BinarySearchTree {
    //Constructor Method to Create an EMPTY BST
    constructor() {
        this.root = null; //Root of the BST
    }

   //Method to delete a value from BST
    delete(value) {
        //Recursive helper to delete a node and return new subtree root
        const deleteNode = (node, target) => {
            //If subtree is empty, nothing to delete
            if (node === null) return null;

            //Traverse Left Subtree if target is smaller
            if (target < node.value) {
                node.left = deleteNode(node.left, target);
                return node; //Return current node as subtree root
            }

            //Traverse Right Subtree if target is larger
            if (target > node.value) {
                node.right = deleteNode(node.right, target);
                return node; //Return current node as subtree root
            }

            //At this point node.value === target means this is the node to delete

            //Case: Node with NO children (leaf)
            if (node.left === null && node.right === null) {
                return null; //Remove leaf by returning null
            }

            //Case: Node with ONE child (right only)
            if (node.left === null) {
                return node.right; //Promote right child
            }

            //Case: Node with ONE child (left only)
            if (node.right === null) {
                return node.left; //Promote left child
            }

            //Case: Node with TWO children
            //Find inorder successor (smallest in right subtree)
            const findMinNode = (cur) => {
                //Go as far left as possible
                while (cur.left !== null) {
                    cur = cur.left;
                }
                return cur;
            };

            //Get successor node and copy its value here
            const successor = findMinNode(node.right);
            node.value = successor.value;

            //Delete the successor value from right subtree
            node.right = deleteNode(node.right, successor.value);

            //Return current node after adjustments
            return node;
        };

        //Update root after deletion
        this.root = deleteNode(this.root, value);
    }
}
