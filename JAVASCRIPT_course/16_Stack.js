/* The stack is a data structure that follows Last In First Out (LIFO) principle
1. Linear Data Structure: Stack(LIFO), Queue(FIFO), Array
2. Non - Linear Data Structure: Tree, Graph,

In a linear data structure, the data elements connect to each other sequentially. A user can transverse each element through a single run. In a non-linear data structure, the data elements connect to each other hierarchically

If you add last and remove last that's a STACK
If you add last and remove first that's a QUEUE
If you do both that's a LINKED LIST

Yep it's that simple ;)
/*
Time Complexity: O(1)
*/
class Stack {
    constructor() {
        this.items = [];
    }

    add(element) {
        return this.items.push(element);
    }

    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    getMin() {
        return this.items.sort((a, b) => a - b)[0]
    }

    clear() {
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);