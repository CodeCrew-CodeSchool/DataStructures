//Build a Priority Queue (Min-Heap by Default)
class PriorityQueue {

  //Constructor Method to Create an EMPTY Priority Queue
  constructor(comparator = (a, b) => a - b) {
    this.items = [];        //Array to Store Elements
    this.compare = comparator; //Comparator Function (Default for this case Min-Heap)
  }

  //Method to Add (Enqueue) a Value into the Priority Queue
  enqueue(value) {
    //Insert Element at the End of Array
    this.items.push(value);

    //Sort the Array According to Comparator
    this.items.sort(this.compare);
  }

  //Method to Remove (Dequeue) the Element with Highest Priority
  dequeue() {
    //If Queue is Empty Return Null
    if (this.items.length === 0) return null;

    //Remove and Return the First Element (Highest Priority)
    return this.items.shift();
  }

  //Method to Peek at the Element with Highest Priority
  peek() {
    //If Queue is Empty Return Null
    if (this.items.length === 0) return null;

    //Return the First Element in Array
    return this.items[0];
  }

  //Method to Get the Number of Elements in the Priority Queue
  size() {
    //Return the Length of Items Array
    return this.items.length;
  }

  //Method to Check if the Priority Queue is Empty
  isEmpty() {
    //Return True if Array is Empty, Otherwise False
    return this.items.length === 0;
  }
}
