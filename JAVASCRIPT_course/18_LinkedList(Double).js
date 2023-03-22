
class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoubleLinkedList {
    constructor(data) {
        const newNode = new Node(data)
        this.head = newNode
        this.tail = this.head;
        this.size = 1;
    }

    push(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode;
        newNode.prev = this.tail                             //
        this.tail = newNode
        this.size++;
        return this
    }

    pop() {
        if (!this.head) return "List is empty"
        let temp = this.tail
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.size--
        return temp
    }

    unshift(data) {
        const newNode = new Node(data)
        if (this.size === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
        return this
    }

    shift() {
        if (!this.head) return "List is empty"
        if (this.size === 1) {
            this.tail = null
        } else {

            let temp = this.head
            this.head = this.head.next
            this.head.prev = temp
            temp.next = null
            temp.prev = null
        }
        this.size--
        return this
    }
    get(index) {    //here we are using this.tail.prev to optimize traverse backwards unlike SLL
        if (index < 0 || index >= this.size) return "Out of Range"
        let temp = this.head
        if (index < this.size / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i = this.size - 1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp

    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.size) return this.push(value)
        if (index < 0 || index >= this.size) return "Out of Range"

        const newNode = new Node(value)
        const before = this.get(index - 1) //one last
        const after = before.next
        before.next = newNode
        newNode.next = after
        newNode.prev = before
        after.prev = newNode
        this.size++
        return true
    }
    //O(n)
    //traverse the linked list
    traversing() {
        let counter = 0, currentNode = this.head;
        while (counter < this.size) {
            console.log(`traversing nodes ->`, currentNode)
            currentNode = currentNode.next
            counter++
        }
        console.log(this.size)
    }

    deleteNode(index) {
        if (index === 0) return this.shift()
        if (index === this.size) return this.pop()
        if (index < 0 || index >= this.size) return "Out of Range"

        let temp = this.get(index)
        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null
        this.size--
        return temp
    }

    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let pre = null
        for (let i = 0; i < this.size; i++) {
            console.log(i)
            next = temp.next
            temp.next = pre
            pre = temp
            temp = next
        }
        return this
    }
}

let dll = new DoubleLinkedList(0);
dll.push(10);
dll.push(20);
// console.log(dll.pop())

// console.log(dll.unshift(40));
// console.log(dll.shift())
// console.log(dll.get(2))
// dll.set(0, 100)
// dll.insert(1, 50);

dll.deleteNode(1);
// dll.reverse()
dll.traversing();
