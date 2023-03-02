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

     /*Traverse a tree has many ways: Depth First Search (DFS) & Breadth First Search (BFS)
          DFS - start with root node and explores as fas as possible along each brach before backtracking, 
               Types: PreOrder - visit node, visit the left subtree, visit the right subtree
                      InOrder  - visit left subtree, visit node, visit right subtree   
                      PostOrder - visit left subtree, visit right subtree, visit node

          BFS - starts traversing from the root node and explores all the neighboring nodes at the depth level
     */

     preorder(root) {
          if (root) {
               console.log("Preorder: ", root.value)
               this.preorder(root.left)
               this.preorder(root.right)
          }
     }

     inorder(root) {
          if (root) {
               this.inorder(root.left)
               console.log("Inorder: ", root.value)
               this.inorder(root.right)
          }
     }
     postorder(root) {
          if (root) {
               this.postorder(root.left)
               this.postorder(root.right)
               console.log("Postorder: ", root.value)
          }
     }

     bfsUnoptimised() {
          const queue = []
          queue.push(this.root)
          while (queue.length) {
               let curr = queue.shift()
               console.log(curr.value)
               if (curr.left) {
                    queue.push(curr.left)
               }
               if (curr.right) {
                    queue.push(curr.right)
               }
          }
     }

     min(root) {
          if (!root.left) return root.value
          else {
               return this.min(root.left)
          }
     }
     max(root) {
          if (!root.right) return root.value
          else {
               return this.min(root.right)
          }
     }

     delete(value) {
          this.root = this.deleteNode(this.root, value)
     }

     deleteNode(root, value) {
          if (root === null) return root
          if (value < root.value) {
               root.left = this.deleteNode(root.left, value)
          } else if (value > root.value) {
               root.right = this.deleteNode(root.right, value)
          } else {
               if (!root.left && !root.right) { return null }  //null to root if no child node present
               if (!root.left) { return root.right }
               else if (!root.right) { return root.left }

               root.value = this.min(root.right)
               root.right = this.deleteNode(root.right, root.value)
               return root
          }
     }
}

//i made the more optimised solution to traverse with constant complexity---------------------------------------
class BFSOptimised {
     constructor() {
          this.items = {}
          this.front = 0
          this.rear = 0
     }

     enqueue(element) {
          this.items[this.rear] = element
          this.rear++
     }


     dequeue() {
          const item = this.items[this.front]
          delete this.items(this.front)
          this.front++
          console.log(item)

     }

     isEmpty() {
          return this.rear - this.front === 0;
     }

     traverse(element) {
          console.log(element.root.value)
          this.enqueue(element.root.value)
          let curr = element.root
          while (curr) {
               if (element.root.left) {
                    this.enqueue(element.root.left.value)
                    curr = element.root.left
               }
               if (element.root.right) {
                    this.enqueue(element.root.left.value)
                    curr = element.root.left
               }
          }
          while (!this.isEmpty) {
               this.dequeue()
          }
     }
}
//---------------------------------------------------------------------------------------------------Not working (debugging)

const bst = new BinarySearchTree()
console.log("Is tree Empty", bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// console.log(bst.search(bst.root, 15))
// console.log(bst.search(bst.root, 10))
// bst.preorder(bst.root)   //10,5,3,7,15
// bst.inorder(bst.root)   //3,5,7,10,15
// bst.postorder(bst.root)   //3,7,5,15,10
bst.bfsUnoptimised()
console.log("Minimum: ", bst.min(bst.root))
console.log("Maximum: ", bst.max(bst.root))
bst.delete(7)
bst.bfsUnoptimised()
// const bfs = new BFSOptimised()
// bfs.traverse(bst)
// console.log(bst.root.value)


