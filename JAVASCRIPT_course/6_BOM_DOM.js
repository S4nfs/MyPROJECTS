/*✔️ see BOM_DOM.png
BOM(Browser Object Model)       :within Window like history, location, screen, navigator, frames, XMLHttpRequest
DOM(Document Object Modal)      :within Document ..used in events later


✔️Navigate through the DOM 

1: document.documentElement
      returns the Element that is the root element of the document. 
2: document.head
3: document.body
4: document.body.childNodes (include tab,enter and whiteSpace)
  list of the direct children only 
5: document.children (without text nodes, only regular Elements)
6: document.childNodes.length

👉 Practice Time 
How to check whether an element has child nodes or not?
we will use hasChildNodes()

👉 Practice Time 
How to find the child in DOM tree 
firstChild vs firstElementChild
lastChild vs lastElementChild 
const data = document.body.firstElementChild;
undefined
data
data.firstElementChild
data.firstElementChild.firstElementChild
data.firstElementChild.firstElementChild.style.color = "red"
vs 
document.querySelector(".child-two").style.color = "yellow";

👉 How to find the Parent Nodes 
document.body.parentNode
document.body.parentElement

👉 How to find or access the siblings
document.body.nextSibling
document.body.nextElementSibling
document.body.previousSibling
document.body.previousElementSibling*/



//DOM MANIPULATION with respect to 6_BOM_DOM.html-------------------
let elem = document.getElementById("click");
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
//i want to change the color of the first container------------------
// elemClass[0].style.background = "green";

//i want to add a custom class called .bg-primary which made in CSS now to my second container-------------------
// elemClass[1].classList.add("bg-primary");
// elemClass[1].classList.remove("bg-primary");

//this displays inner HTML and text-------------------
console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

//i want to get elements by tag name <button>-------------------
// tn = document.getElementsByTagName("button");
// console.log(tn);

//i want to add a child in this div-------------------
// tn2 = document.getElementsByTagName("div");
// createdElement = document.createElement("p");
// createdElement.innerHTML = "This is a new paragraph by appending the div";
// tn2[0].appendChild(createdElement);
//i want to replace this child with another child-------------------
// createdElement2 = document.createElement("b");
// createdElement2.innerHTML = "This is a created bold";
// tn2[0].replaceChild(createdElement2, createdElement);

// //i want to remove this child-------------------
// tn2[0].removeChild(createdElement2);

//U can also use Query Selector while targeting elements-------------------
//this will return the first container but not the node list, use querySelectorAll() to get all the containers  
sel = document.querySelector(".container");  
console.log(sel);