class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.size = 1;
    }

    appendNode(data) {
        let newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode
        this.size++;
    }

    //traverse the linked list
    traversing() {
        let counter = 0, currentNode = this.head;
        while (counter < this.size) {
            currentNode = currentNode.next
            console.log(`traversing nodes ->`, currentNode)
            counter++
        }
    }
    //delete
    deleteNode(element) {
        let counter = 1;
        let lead = this.head;
        if (element === 1) {    //compare head first
            this.head = this.head.next;
        } else {
            while (counter < element - 1) {
                lead = lead.next;
                counter++;
            }
        }
        let nextNode = lead.next.next;
        lead.next = nextNode;
        console.warn(lead)
    }
}

let list = new List(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.traversing();
list.deleteNode(1);
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