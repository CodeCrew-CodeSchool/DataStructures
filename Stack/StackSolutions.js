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
        this.stack = new Stack(); //Time Complexity: O(1) - stack initialization
        //Min Tracking Stack
        this.minStack = new Stack(); //Time Complexity: O(1) - min stack initialization
    }

    //Method to Push a Value into the Stack
    push(value) {
        //Push to main stack
        this.stack.push(value); 
        if (this.minStack.isEmpty() || value <= this.minStack.peek()) {
            //Time Complexity: O(1) - check if min stack is empty or new value is less than current min

            //Track New Min if Needed
            this.minStack.push(value);
            //Time Complexity: O(1) - push to min stack
        }
    }
    //Time Complexity: O(1) - push operations are all in constant time

    //Method to Pop a Value from the Stack
    pop() {
        //Remove from main stack
        const popped = this.stack.pop();
        //Time Complexity: O(1) - pop operation is constant time
        if (popped === this.minStack.peek()) {
            //Time Complexity: O(1) - check if popped value is current min
            //Remove from min stack if it's the min
            this.minStack.pop(); 
            //Time Complexity: O(1) - pop from min stack
        }
        return popped;
        //Time Complexity: O(1) - return operation is constant time
    }
    //Time Complexity: O(1) - pop operations are all in constant time

    //Method to Get the Minimum Element
    getMin() {
        //Peek top of min stack
        return this.minStack.peek(); 
        //Time Complexity: O(1) - peek operation is constant time
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
        //Time Complexity: O(1) - stack initialization
        const tokens = expression.split(" "); //Split by space
        //Time Complexity: O(n) - where n is the number of tokens in the expression

        for (let token of tokens) {
            //Time Complexity: O(n) - loop through each token

            //If token is a number, push to stack
            if (!isNaN(token)) {
                //Time Complexity: O(1) - check if token is a number
                stack.push(parseInt(token));
                //Time Complexity: O(1) - push operation is constant time
            } else {
                //Pop two values for operation
                const b = stack.pop();
                //Time Complexity: O(1) - pop operation is constant time
                const a = stack.pop();
                //Time Complexity: O(1) - pop operation is constant time

                //Apply operator and push result
                switch (token) {
                    //Time Complexity: O(1) - switch case operations are constant time
                    case "+": stack.push(a + b); break;
                    case "-": stack.push(a - b); break;
                    case "*": stack.push(a * b); break;
                    case "/": stack.push(Math.floor(a / b)); break;
                }
            }
        }

        return stack.pop(); //Final result
        //Time Complexity: O(1) - pop operation is constant time
    }
    //Time Complexity: O(n) - where n is the number of tokens in the expression

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
        //Time Complexity: O(1) - stack initialization

        for (let action of actions) {
            //Time Complexity: O(n) - loop through each action

            //If action is UNDO, pop last
            if (action === "UNDO") {
                //Time Complexity: O(1) - string comparison
                stack.pop();
                //Time Complexity: O(1) - pop operation is constant time
            } else {
                //Otherwise push action
                stack.push(action);
                //Time Complexity: O(1) - push operation is constant time
            }
        }

        //Reconstruct stack from array
        const result = [];
        //Time Complexity: O(1) - array initialization
        while (!stack.isEmpty()) {
            //Time Complexity: O(n) - where n is the number of actions in the stack
            
            result.unshift(stack.pop()); //Rebuild from bottom to top
            //Time Complexity: O(n) - unshift operation is O(n) in worst case
        }
        return result;
        //Time Complexity: O(1) - return operation is constant time
    }
    //Time Complexity: O(n^2) - The unshift operation inside a loop can lead to O(n^2) in worst case, but overall complexity is dominated by the number of actions processed.
}

