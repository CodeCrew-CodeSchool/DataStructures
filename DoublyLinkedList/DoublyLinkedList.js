class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    insert(index, value) {
        if (index <= 0) {
            return this.prepend(value);
        }
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        const nextNode = current.next;
        current.next = newNode;
        newNode.prev = current;
        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let removedNode;

        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            if (removedNode === this.tail) {
                this.tail = null;
            }
        } else if (index === this.length - 1) {
            removedNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }

            removedNode = current;
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        this.length--;
        return removedNode.value;
    }
}
