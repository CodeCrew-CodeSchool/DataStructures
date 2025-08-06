//Build a Stack using an Array
class Stack {
    /*Constructor Method to Create an EMPTY Stack*/
    constructor() {
        this.items = []; //Array to Hold Stack Elements
    }

    //Method to Add a Value to the Top of the Stack
    push(value) {
        //Push the Value to the Top Of Stack
        this.items.push(value);
    }

    //Method to Remove the Value from the Top of the Stack
    pop() {
        //If Stack is Empty Return Null
        if (this.isEmpty()) {
            return null;
        }

        //Remove and Return the Last Element in the Array
        return this.items.pop();
    }

    //Method to View the Top Value Without Removing It
    peek() {
        //If Stack is Empty Return Null
        if (this.isEmpty()) {
            return null;
        }

        //Return the Last Element in the Array (i.e. Top of Stack)
        return this.items[this.items.length - 1];
    }

    //Method to Check if Stack is Empty
    isEmpty() {
        //Return True if Array Length is 0, Otherwise False
        return this.items.length===0;
    }

    //Method to Return the Number of Elements in the Stack
    size() {
        return this.items.length;
    }

}
