//algorithm 2 private SLL
const hasCycle = () => {
    head = this.head
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


console.log(hasCycle())

/*algorithm 3 DB private pseudo-code--------------------------------------------------------------------------
// Fill the array using the following rule.

Routine: Solve
Input: Coin array of size N, denomiation amount
Required for intermediate results: Matrix M of size Nx(amount+1)

Base case:
1. For all rows with column index j=0, set M[i][j]=0
2. For each row i=0..(N-1)
    a. If a column index (j>0) is an integer multiple of coin[i], i.e., if (j mod coin[i] == 0) 
        then M[i][j] = j/coin[i]
        else M[i][j] = inf
        
Recursive case:
1. for each row i=1..(N-1)
    a. for each col j=0..amount
            i. M[i][j] = min(M[i-1][j-k*coin[i] ]+k), where k is 0..floor(j/coin[i])
2. return M[i-1][amount]

*/