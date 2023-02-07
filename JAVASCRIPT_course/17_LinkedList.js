//Example :1
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
    //O(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head       //pushing head to next and new value to head
            this.head = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty')
        } else {
            let curr = this.head
            let list = ''
            while (curr) {
                list += `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }
    }
    //O(n)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {       //traversing always requires a temporary pointer in linked list
                prev = prev.next                        //exit at index - 1
            }
            node.next = prev.next;
            prev.next = node
        }
    }

    //O(n)
    remove(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        }
        if (index > 0) {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next                    //exit at index - 1
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    //O(n)
    find(value) {
        if (this.isEmpty()) {
            return -1
        }
        let curr = this.head
        let i = 0
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null;
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}


let linkedlist = new LinkedList()
console.log(linkedlist.isEmpty())
linkedlist.prepend(10)
linkedlist.prepend(20)
linkedlist.prepend(30)
linkedlist.append(40)
linkedlist.print()
linkedlist.insert(250, 3)
linkedlist.print()
console.log(linkedlist.remove(3))
linkedlist.print()
console.log(linkedlist.find(40))
linkedlist.reverse()
linkedlist.print()


//Example :2 a bit complex but efficient using tail

// class List {
//     constructor(data) {
//         this.head = {
//             value: data,
//             next: null
//         }
//         this.tail = this.head;
//         this.size = 1;
//     }

//     appendNode(data) {
//         let newNode = {
//             value: data,
//             next: null
//         }
//         this.tail.next = newNode;
//         this.tail = newNode
//         this.size++;
//     }

//     //traverse the linked list
//     traversing() {
//         let counter = 0, currentNode = this.head;
//         while (counter < this.size) {
//             currentNode = currentNode.next
//             console.log(`traversing nodes ->`, currentNode)
//             counter++
//         }
//     }
//     //delete
//     deleteNode(element) {
//         let counter = 1;
//         let lead = this.head;
//         if (element === 1) {    //compare head first
//             this.head = this.head.next;
//         } else {
//             while (counter < element - 1) {
//                 lead = lead.next;
//                 counter++;
//             }
//         }
//         let nextNode = lead.next.next;
//         lead.next = nextNode;
//         console.warn(lead)
//     }
// }

// let list = new List(100);
// list.appendNode(200);
// list.appendNode(300);
// list.appendNode(400);
// list.appendNode(500);
// list.traversing();
// list.deleteNode(1);
// console.log(list);

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