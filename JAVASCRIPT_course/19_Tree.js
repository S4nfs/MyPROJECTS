/*🌳 A tree is a hierarchial data structure that consists of nodes connected by edges. A tree is a non-linear data structure, compared to arrays, linkedlists, stacks and queues which are linear data structures.

-In Linear data structures, the time required to search is proportional to the size of the data set, MORE THE DATA | MORE THE TIME NEEDED

A tree wll not contain any loops or cycles

Usage- File systems, DOM, Chatbots,

Terminology-
1.Root Node - A
2.Leaf Node - Not have any child node ------ (E,F,C,D)
3.Siblings - Node with same parent ------ (E,F) & (B,C,D)
4.Ancestors - Parent's parent ------ (A) ancestor of (E)
5.Path - Path ----- (A,E) is (A-B-E)
6.Degree - total no. of child node ----- (B) is 2 and degree of tree is maximum no. of child nodes here 3
7.Depth - no. of edges from root to node ----- (E) is 2
8.Height - no. of edges from deepest leaf to the node ----- (B) is 1 & height of tree is here 2
*/

/*🌳 Binary tree - Each node has at most two childrens, left child & right child.
     Binary Search Tree (BST) - 
            -Value of Each left node is smaller than the parent node
            -Value of Each Right node is greater than the parent node along with 
            -Each node has at most two childrens, left child & right child.
*/

class Node {
     constructor(value) {
          this.value = value;
          this.right = null
          this.left = null
     }
}

class BinarySearchTree {
     constructor() {
          this.root = null
     }

     isEmpty() {
          return this.root === null
     }

     insert(value) {
          const newNode = new Node(value)
          if (this.isEmpty()) {
               this.root = newNode
          } else {
               this.insertNode(this.root, newNode)
          }
     }
     insertNode(root, newNode) {
          if (newNode.value < root.value) {
               if (root.left === null) {
                    root.left = newNode
               } else {
                    this.insertNode(root.left, newNode)
               }
          } else {
               if (root.right === null) {
                    root.right = newNode
               } else {
                    this.insertNode(root.right, newNode)
               }
          }
     }

     search(root, value) {
          if (!root) {
               return false
          } else {
               if (root.value === value) {
                    return true
               } else if (value < root.value) {
                    return this.search(root.left, value)
               } else {
                    return this.search(root.right, value)
               }
          }
     }
}

const bst = new BinarySearchTree()
console.log("Is tree Empty", bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 10))
