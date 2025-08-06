//Build a Node
class Node {
    /*Constructor Method to create a Single Node Not
    Connected Anywhere*/
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Build a LinkedList
class LinkedList {
    /*Constructor Method to create an EMPTY LinkedList*/
    constructor() {
        this.head = null; //Head of LinkedList
        this.tail = null; //Tail of LinkedList
        this.length = 0;  //Number of Nodes in Linkedlist
    }

    //Method to find a node by its value in a linked list
    find(value) {
        //Start with the head node
        let current = this.head;

        //Traverse the linked list
        while (current) {
            //If the current node value matches the target value, return it
            if (current.value === value) {
                return current;
            }
            //Move to the next node
            current = current.next;
        }

        //If the value is not found, return null
        return null;
    }


    //Method to Add a Node After the Current Tail of LinkedList
    append(value) {
        //Create a New Node
        const newNode = new Node(value);

        //If there is no Head (i.e. LinkedList is Empty)
        if (!this.head) {
            // Set the new Node to be both Head and Tail 
            this.head = newNode;
            this.tail = newNode;
        } else { //If there is a head
            //Add the New Node After the Current Tail
            this.tail.next = newNode;
            //Make the NewNode the new Tail
            this.tail = newNode;
        }
        //Increase the length by one
        this.length++;
    }

    //Method to add Node Before the Current Head of LinkedList
    prepend(value) {
        //Create a New Node
        const newNode = new Node(value);

        /*Make the Original HEAD of the LinkedList be Node After
        The Node we Just Created*/
        newNode.next = this.head;

        //Make our new created Node be the new Head of Linkedlist
        this.head = newNode;

        //If there is no tail or LinkedList is empty
        if (!this.tail) {
            //Make our NewNode be the tail of LinkedList
            this.tail = newNode;
        }
        //Increase the length by one
        this.length++;
    }


    //Mehtod to Add a Node at a Certain Place (Index) of the LinkedList
    insert(index, value) {
        //If the Index is 0 or less
        if (index <= 0) {
            //Do a prepend method then end method
            return this.prepend(value);
        }

        //If the Index is more than the length of LinkedList
        if (index >= this.length) {
            //Do an append method then end method
            return this.append(value);
        }

        //Create a New Node
        const newNode = new Node(value);

        //Make the Variable Prev be Equal to the Head Node of LinkedList
        let prev = this.head;

        //Traverse the Linkedlist to find the node just before the insertion point
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        /*Make the Node after our new Created Node
        be the Node after the value of Prev*/
        newNode.next = prev.next;

        /*Make the Node after Prev be our new Node*/
        prev.next = newNode;

        //Increase the length by one
        this.length++;
    }

    remove(index) {

        //Check that the Index Provided is Valid
        if (index < 0 || index >= this.length) {
            return null;
        }

        //Declare a Variable for pur Node to be Deleted
        let removedNode;

        //If the Node is the Head of LinkedList
        if (index === 0) {
            //Make the New Head be the Node After Original Head
            this.head = this.head.next;
        } else {
            //Make the Variable Prev be Equal to the Head Node of LinkedList
            let prev = this.head;

            //Traverse the Linkedlist to find the node just before the deletion point
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            //Set the Node be Removed be the one After the Current Node Value of Prev
            removedNode = prev.next;
            //Make the Node After the Current Value of Prev be Node After the our Node to be Deleted
            prev.next = removedNode.next;

            //If the Node is the tail
            if (index === this.length - 1) {
                //Make the tail be the current value of Prev or one before last Node of LinkedList
                this.tail = prev;
            }
        }

        //Reduce Length of LinkedList by One
        this.length--;

        //Return the value of Removed Node Just in Case but is optional
        return removedNode.value;
    }

}

