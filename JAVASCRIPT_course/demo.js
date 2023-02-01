class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head;
      this.head = node
    }
    this.size++
  }
  print() {
    if (this.isEmpty()) {
      console.log(`List is empty`)
    } else {
      let curr = this.head;
      let listValues = ''
      while (curr) {
        listValues += `${curr.value} `
        curr = curr.next;
      }
      console.log(listValues)
    }
  }
  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let pre = this.head;
      while (pre.next) {
        pre = pre.next
      }
      pre.next = node
    }
    this.size++
  }
}

let Obj = new LinkedList()
console.log(Obj.isEmpty())
Obj.prepend(10)
Obj.prepend(20)
Obj.prepend(30)
Obj.print()
Obj.append(40)
Obj.append(50)
Obj.print()