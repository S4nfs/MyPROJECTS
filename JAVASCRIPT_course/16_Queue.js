//Queue follows the FIFO principle and take elements from right(start) to left(end)

let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
    queue[currentSize] = newVal;
    currentSize++;
}

function dequeue() {
    for (let i = 0; i < queue.length; i++) {
        queue[i] = queue[i + 1]
    }
    currentSize--;
    queue.length = currentSize;
}


enqueue(10)
enqueue(20)
enqueue(30)
dequeue()
console.log(queue)
