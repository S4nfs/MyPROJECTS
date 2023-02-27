//Queue follows the FIFO principle and take elements from right(start) to left(end),  you can follow the same stack approach here but use shift() instead of pop() and peek() to show element at arr[0]

/*
Time Complexity: O(n)
*/
// let queue = [];
// let currentSize = queue.length;
// let maxSize = 5;

// function enqueue(newVal) {
//     queue[currentSize] = newVal;
//     currentSize++;
// }

// function dequeue() {
//     for (let i = 0; i < queue.length; i++) {
//         queue[i] = queue[i + 1]
//     }
//     currentSize--;
//     queue.length = currentSize;
// }


// enqueue(10)
// enqueue(20)
// enqueue(30)
// dequeue()
// console.log(queue)

//here is the more optimized solution to make the complexity constant = O(1)
class Queue {
    constructor() {
        this.items = {};    //take object this time
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        const item = this.items[this.front];     //save in item, before delete
        delete this.items[this.front];
        this.front++;
        return item
    }

    peek() {
        return this.items[this.front];
    }
    isEmpty() {
        return this.rear - this.front === 0;
    }
    size() {
        return this.rear - this.front;
    }
    print() {
        console.log(this.items);
    }
}

let queue1 = new Queue();
console.log(queue1.isEmpty());
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
console.log(queue1.size())
console.log("Removed", queue1.dequeue());
console.log("First", queue1.peek())
queue1.print()


//Circular Queue | Usage: Clock, Streaming Data, traffic lights


