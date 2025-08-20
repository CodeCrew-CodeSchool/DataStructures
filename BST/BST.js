class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    delete(value) {
        const deleteNode = (node, target) => {
            if (node === null) return null;

            if (target < node.value) {
                node.left = deleteNode(node.left, target);
                return node;
            }

            if (target > node.value) {
                node.right = deleteNode(node.right, target);
                return node;
            }

            if (node.left === null && node.right === null) {
                return null;
            }

            if (node.left === null) {
                return node.right;
            }

            if (node.right === null) {
                return node.left;
            }

            const findMinNode = (cur) => {
                while (cur.left !== null) {
                    cur = cur.left;
                }
                return cur;
            };

            const successor = findMinNode(node.right);
            node.value = successor.value;
            node.right = deleteNode(node.right, successor.value);

            return node;
        };

        this.root = deleteNode(this.root, value);
    }
}
