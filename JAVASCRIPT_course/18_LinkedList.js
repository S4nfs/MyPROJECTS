//Main difference between a Linked List and an Array is indexes. Arrays are indexed while Linked Lists are not thats why a linked list cannot start with index 0.

//Example :1 Less Optimised Without Tail pointer
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }
//     //O(1)
//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head       //pushing head to next and new value to head
//             this.head = node
//         }
//         this.size++
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('List is Empty')
//         } else {
//             let curr = this.head
//             let list = ''
//             while (curr) {
//                 list += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(list)
//         }
//     }
//     //O(n)
//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index >= this.size) {
//             return null
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {       //traversing always requires a temporary pointer in linked list
//                 prev = prev.next                        //exit at index - 1
//             }
//             node.next = prev.next;
//             prev.next = node
//         }
//     }

//     //O(n)
//     remove(index) {
//         if (index < 0 || index >= this.size) {
//             return null
//         }
//         let removedNode;
//         if (index === 0) {
//             removedNode = this.head
//             this.head = this.head.next
//         }
//         if (index > 0) {
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next                    //exit at index - 1
//             }
//             removedNode = prev.next
//             prev.next = removedNode.next
//         }
//         this.size--
//         return removedNode.value
//     }

//     //O(n)
//     find(value) {
//         if (this.isEmpty()) {
//             return -1
//         }
//         let curr = this.head
//         let i = 0
//         while (curr) {
//             if (curr.value === value) {
//                 return i
//             }
//             curr = curr.next
//             i++
//         }
//         return -1
//     }

//     //O(n)
//     reverse() {
//         let prev = null;
//         let curr = this.head
//         while (curr) {
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }
// }


// let linkedlist = new LinkedList()
// console.log(linkedlist.isEmpty())
// linkedlist.prepend(10)
// linkedlist.prepend(20)
// linkedlist.prepend(30)
// linkedlist.append(40)
// linkedlist.print()
// linkedlist.insert(250, 3)
// linkedlist.print()
// console.log(linkedlist.remove(3))
// linkedlist.print()
// console.log(linkedlist.find(40))
// linkedlist.reverse()
// linkedlist.print()


//Example :2 Using tail pointer | both head and tail node point to same node at the beginning, Pop is O(n) as we can't go backwards in LL we have to index from the head.(see image)

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class List {
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
        this.tail = newNode
        this.size++;
        return this
    }

    pop() {
        if (!this.head) return "List is empty"

        let currentNode = this.head
        let pre = this.head
        while (currentNode.next) {
            pre = currentNode
            currentNode = currentNode.next
        }
        this.tail = pre
        this.tail.next = null
        this.size--
        if (this.size === 0) {
            this.head = null
            this.tail = null
        }
        return currentNode
    }

    unshift(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        newNode.next = this.head
        this.head = newNode
        this.size++
        return this
    }

    shift() {
        if (!this.head) return "List is empty"
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.size--
        if (this.size === 0) {
            this.tail = null
        }
        return this
    }
    get(index) {
        if (index < 0 || index >= this.size) return "Out of Range"
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
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
        const temp = this.get(index - 1) //one last
        newNode.next = temp
        temp.next = newNode
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

        let pre = this.get(index - 1)
        let temp = pre.next
        pre.next = temp.next
        temp.next = this.size--
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

let list = new List(0);
list.push(10);
// console.log(list.pop())
// list.unshift(40);
// console.log(list.shift())
// console.log(list.get(10))
// list.set(0, 100)
list.insert(0, 50);
// list.traversing();

// list.deleteNode(10);
// list.traversing();
list.reverse()
list.traversing();

/*Output
{
    "head": {
        "value": 100,
            "next": {
            "value": 200,
                "next": {
                "value": 300,
                    "next": {
                    "value": 400,
                        "next": {
                        "value": 500,
                            "next": null
                    }
                }
            }
        }
    },
    "tail": {
        "value": 500,
            "next": null
    }
}
*/