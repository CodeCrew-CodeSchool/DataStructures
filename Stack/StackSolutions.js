import { Stack } from './Stack.js'; //Import Stack Data Structure

/**
 * MinStack Class
 *
 * Supports retrieving the minimum element in constant time.
 * Maintains a secondary stack to track minimum values.
 */
class MinStack {
    constructor() {
        //Main Stack
        this.stack = new Stack();
        //Min Tracking Stack
        this.minStack = new Stack(); 
    }

    //Method to Push a Value into the Stack
    push(value) {
        //Push to main stack
        this.stack.push(value); 
        if (this.minStack.isEmpty() || value <= this.minStack.peek()) {
            //Track New Min if Needed
            this.minStack.push(value);
        }
    }

    //Method to Pop a Value from the Stack
    pop() {
        //Remove from main stack
        const popped = this.stack.pop(); 
        if (popped === this.minStack.peek()) {
            //Remove from min stack if it's the min
            this.minStack.pop(); 
        }
        return popped;
    }

    //Method to Get the Minimum Element
    getMin() {
        //Peek top of min stack
        return this.minStack.peek(); 
    }
}

class OtherSolutions{
    /**
     * Evaluate Postfix Expression
     *
     * @param {string} expression - A space-separated postfix expression like "2 3 + 4 *"
     * @returns {number} - The result of the evaluated expression
     *
     * Logic:
     * - Use a stack to store operands.
     * - For each token: push numbers, apply operators by popping 2 values.
    */
    evaluatePostfix(expression) {
        const stack = new Stack(); //Use Stack to hold numbers
        const tokens = expression.split(" "); //Split by space

        for (let token of tokens) {
            //If token is a number, push to stack
            if (!isNaN(token)) {
                stack.push(parseInt(token));
            } else {
                //Pop two values for operation
                const b = stack.pop();
                const a = stack.pop();
                //Apply operator and push result
                switch (token) {
                    case "+": stack.push(a + b); break;
                    case "-": stack.push(a - b); break;
                    case "*": stack.push(a * b); break;
                    case "/": stack.push(Math.floor(a / b)); break;
                }
            }
        }

        return stack.pop(); //Final result
    }

    /**
     * Undo Operation Stack
     *
     * @param {string[]} actions - List of actions like ["a", "b", "UNDO", "c"]
     * @returns {string[]} - Final stack of actions after applying undo commands
     *
     * Logic:
     * - Maintain a stack.
     * - Push values normally. If "UNDO", remove the top item.
    */
    processActions(actions) {
        //Stack to track actions
        const stack = new Stack(); 

        for (let action of actions) {
            //If action is UNDO, pop last
            if (action === "UNDO") {
                stack.pop();
            } else {
                //Otherwise push action
                stack.push(action);
            }
        }

        //Reconstruct stack from array
        const result = [];
        while (!stack.isEmpty()) {
            result.unshift(stack.pop()); //Rebuild from bottom to top
        }
        return result;
    }
}

