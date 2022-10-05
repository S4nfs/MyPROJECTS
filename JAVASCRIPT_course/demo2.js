// const Sort = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     let curr = array[i];
//     let j;
//     for (j = i - 1; j >= 0; j--) {
//       if (array[j] >= 0 && array[j] > curr) {
//         array[j + 1] = array[j];
//       }
//     }
//     array[j + 1] = curr;
//   }
//   return array
// }

// console.log(Sort([8, 2, 4, 1, 3]))


class Stack {

    constructor() {
        this.elements = [];
    }
    push(element) {
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length === 0) return "Underflow Situation"
        else return this.elements.pop();
    }
    isEmpty() {
        if (this.elements.length > 0) return false;
        else return true;
    }
}
function reverse(str) {
    let stack = new Stack()

    let i = 0, result = "";
    while (i !== str.length) {
        stack.push(str.charAt(i));
        i++
    }
    while (!stack.isEmpty()) {
        result += stack.pop()
    }
    return result
}


console.log(reverse("Sagar"))