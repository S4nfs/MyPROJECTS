//algorithm 2 private
const hasCycle = () => {
    //head = this.head
    let set = new Set()
    // for traversing, initialize current with head node
    let current = head

    while (current) {
        if (set.has(current)) {
            // if duplication occurs, return true
            return true
        } else {
            set.add(current)
        }

        current = current.next
    }
    // traverse is completed, cycle not found
    return false
};

//head = current node head

console.log(hasCycle())

//algorithm 3 DB private pseudo-code
