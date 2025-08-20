export class PriorityQueue {

  constructor(comparator = (a, b) => a - b) {
    this.items = [];
    this.compare = comparator;
  }

  enqueue(value) {
    this.items.push(value);
    this.items.sort(this.compare); 
  }

  dequeue() {
    if (this.items.length === 0) return null;
    return this.items.shift(); 
  }

  peek() {
    return this.items.length > 0 ? this.items[0] : null;
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
