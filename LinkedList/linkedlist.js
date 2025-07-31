class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;   
        this.tail = null;   
        this.length = 0;
    }

    
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value){
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
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;       
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.length++;
    }

    insert(index, value) {
        if (index <= 0){ 
            return this.prepend(value); 
        } 
        
        if (index >= this.length){ 
            return this.append(value);
        }
        

        const newNode = new Node(value);
        let prev = this.head;

        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++; 
    }

    remove(index) {
        if (index < 0 || index >= this.length){
            return null;
        }

        let removedNode;

        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;         
            prev.next = removedNode.next;   
            if (index === this.length - 1) {
                this.tail = prev;
            }
        }

        this.length--; 
        return removedNode.value;
    }

}

