//Build a Node for Doubly LinkedList
class Node {
    /*Constructor Method to create a Single Node Not
    Connected Anywhere*/
    constructor(value) {
        this.value = value;
        this.next = null; //Pointer to Next Node
        this.prev = null; //Pointer to Previous Node
    }
}

//Build a Doubly LinkedList
class DoublyLinkedList {
    /*Constructor Method to create an EMPTY Doubly LinkedList*/
    constructor() {
        this.head = null; //Head of LinkedList
        this.tail = null; //Tail of LinkedList
        this.length = 0;  //Number of Nodes in LinkedList
    }

    //Method to Find a Node by Its Value
    find(value) {
        //Start from Head
        let current = this.head;

        //Traverse the List Until Value is Found
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        //If Not Found Return Null
        return null;
    }

    //Method to Add a Node After the Current Tail of LinkedList
    append(value) {
        //Create a New Node
        const newNode = new Node(value);

        //If LinkedList is Empty
        if (!this.head) {
            //Set New Node to be Both Head and Tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            //Link New Node after the Current Tail
            this.tail.next = newNode;
            newNode.prev = this.tail;

            //Make New Node the New Tail
            this.tail = newNode;
        }
        //Increase the length by one
        this.length++;
    }

    //Method to Add a Node Before the Current Head of LinkedList
    prepend(value) {
        //Create a New Node
        const newNode = new Node(value);

        //If LinkedList is Empty
        if (!this.head) {
            //Set New Node to be Both Head and Tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            //Link New Node before the Current Head
            newNode.next = this.head;
            this.head.prev = newNode;

            //Make New Node the New Head
            this.head = newNode;
        }
        //Increase the length by one
        this.length++;
    }

    //Method to Insert a Node at a Certain Place (Index) of the LinkedList
    insert(index, value) {
        //If the Index is 0 or less
        if (index <= 0) {
            return this.prepend(value);
        }

        //If the Index is more than the Length
        if (index >= this.length) {
            return this.append(value);
        }

        //Create a New Node
        const newNode = new Node(value);

        /*Start from the Head Node (Note Current equal to Prev in Single LinkedList, just a change of 
        of name to current to avoid confusion)*/
        let current = this.head;

        //Traverse the LinkedList to One Node Before the Insertion Point
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        //Save the Next Node after Current
        const nextNode = current.next;

        /*Links the New Node Between Current and Next Node*/
        //Make Our New Node be the one after the Current Variable Node
        current.next = newNode;
        //Make the Previous Node of our New Node be the Current Variable Node
        newNode.prev = current;
        //Make the Next Node of our New Node be the Next Node after Current Variable Node
        newNode.next = nextNode;
        //Make the Prev Node of the Next Node after Current Variable Node be our New Node
        nextNode.prev = newNode;

        //Increase the length by one
        this.length++;
    }

    //Method to Remove a Node at a Certain Index of the LinkedList
    remove(index) {
        //Check that the Index is Valid
        if (index < 0 || index >= this.length) {
            return null;
        }

        //Declare a Variable to Store the Node to Remove
        let removedNode;

        //If the Node to Remove is the Head
        if (index === 0) {
            //Set the Node to be Removed equal to the Head Node
            removedNode = this.head;

            //Make the New Head the Next Node
            this.head = this.head.next;

            //If Head Exists Now, Remove Its Prev Pointer
            if (this.head) {
                this.head.prev = null;
            }

            //If List Had Only One Node
            if (removedNode === this.tail) {
                this.tail = null;
            }
        }
        //If the Node to Remove is the Tail
        else if (index === this.length - 1) {
            removedNode = this.tail;

            //Make the New Tail the Node Before
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        //If the Node is in the Middle
        else {
            //Set Current to be Head Node for future traverse
            let current = this.head;

            //Traverse to the Node at the Given Index
            for (let i = 0; i < index; i++) {
                current = current.next;
            }

            //Set Current Node to be the one Removed
            removedNode = current;

            /*Reconnect the Previous and Next Nodes Around the Removed Node*/

            /*Make the Node Before the one to be Deleted Have as Next Node the Node 
            that comes after the one that will be deleted.*/
            current.prev.next = current.next;
            /*Make the Node After the one to be Deleted Have as Previous Node the Node 
            that comes Before the one that will be deleted.*/
            current.next.prev = current.prev;
        }

        //Decrease the Length by One
        this.length--;

        //Return the Value of Removed Node
        return removedNode.value;
    }

}
